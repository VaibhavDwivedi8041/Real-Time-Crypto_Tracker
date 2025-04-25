import { store } from '../store';
import { updatePrices } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../features/crypto/type';

// Random value generator for price fluctuations
const getRandomPercent = (min: number, max: number) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

// Get a random price change within a reasonable range
const getRandomPriceChange = (currentPrice: number) => {
  const changePercent = parseFloat(getRandomPercent(-1.5, 1.5)) / 100;
  return currentPrice * (1 + changePercent);
};

// Update chart data by removing the first point and adding a new one
const updateChartData = (chartData: number[], price: number) => {
  const newChartData = [...chartData.slice(1)];
  // Create a small random variation based on the current price
  const newDataPoint = price * (1 + (Math.random() * 0.01 - 0.005));
  newChartData.push(newDataPoint);
  return newChartData;
};

class MockWebSocket {
  private interval: NodeJS.Timeout | null = null;
  
  start() {
    if (this.interval) return;
    
    this.interval = setInterval(() => {
      const currentAssets = store.getState().crypto.assets;
      const updates: Partial<CryptoAsset>[] = currentAssets.map(asset => {
        // Update prices with random fluctuations
        const newPrice = getRandomPriceChange(asset.price);
        
        // Generate new percentages for 1h, 24h, and 7d
        const percentChange1h = parseFloat(getRandomPercent(-0.5, 0.8));
        const percentChange24h = parseFloat(getRandomPercent(-1.5, 1.8));
        const percentChange7d = parseFloat(getRandomPercent(-3, 5));
        
        // Update 24h volume with random fluctuation
        const volumeChangePercent = parseFloat(getRandomPercent(-2, 2)) / 100;
        const newVolume = asset.volume24h * (1 + volumeChangePercent);
        
        // Update chart data
        const newChartData = updateChartData(asset.chartData, newPrice);

        return {
          id: asset.id,
          price: newPrice,
          percentChange1h,
          percentChange24h,
          percentChange7d,
          volume24h: newVolume,
          chartData: newChartData
        };
      });
      
      store.dispatch(updatePrices(updates));
    }, 2000);
  }
  
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export default new MockWebSocket();