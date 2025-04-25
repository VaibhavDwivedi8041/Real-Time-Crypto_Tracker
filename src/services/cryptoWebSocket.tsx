import { store } from '../store';
import { updatePrices } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../features/crypto/type';

class CryptoWebSocket {
  private ws: WebSocket | null = null;
  private symbols: string[] = [
    'btcusdt',
    'ethusdt',
    'bnbusdt',
    'xrpusdt',
    'solusdt'
  ];
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private pingInterval: number | null = null;
  private lastPongTime: number = Date.now();

  start() {
    if (this.ws) return;

    try {
      // Format the stream name correctly for Binance WebSocket
      const streams = this.symbols.map(symbol => `${symbol}@ticker`).join('/');
      this.ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
        this.startPingInterval();
      };

      this.ws.onmessage = (event) => {
        try {
          const response = JSON.parse(event.data);
          
          // Handle ping/pong messages
          if (response.data?.e === 'pong') {
            this.lastPongTime = Date.now();
            return;
          }

          // Handle ticker data
          if (response.data?.s) {
            const data = response.data;
            const update: Partial<CryptoAsset> = {
              id: data.s.toLowerCase().replace('usdt', ''),
              price: parseFloat(data.c),
              percentChange1h: parseFloat(data.P),
              percentChange24h: parseFloat(data.p),
              volume24h: parseFloat(data.v) * parseFloat(data.c),
            };
            store.dispatch(updatePrices([update]));
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.checkConnectionHealth();
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
        this.stopPingInterval();
        this.reconnect();
      };
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      this.reconnect();
    }
  }

  private startPingInterval() {
    this.stopPingInterval();
    this.pingInterval = window.setInterval(() => {
      this.sendPing();
      this.checkConnectionHealth();
    }, 30000); // Send ping every 30 seconds
  }

  private stopPingInterval() {
    if (this.pingInterval) {
      window.clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  private sendPing() {
    if (this.ws?.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify({ method: 'ping' }));
      } catch (error) {
        console.error('Error sending ping:', error);
      }
    }
  }

  private checkConnectionHealth() {
    const now = Date.now();
    if (now - this.lastPongTime > 60000) { // No pong for 1 minute
      console.log('Connection appears stale, reconnecting...');
      this.stop();
      this.start();
    }
  }

  private reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      return;
    }

    const backoffTime = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
    this.reconnectAttempts++;

    console.log(`Attempting to reconnect in ${backoffTime}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
    
    setTimeout(() => {
      this.stop();
      this.start();
    }, backoffTime);
  }

  stop() {
    this.stopPingInterval();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default new CryptoWebSocket();