export interface CryptoAsset {
    id: string;
    rank: number;
    name: string;
    symbol: string;
    logo: string;
    price: number;
    percentChange1h: number;
    percentChange24h: number;
    percentChange7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply: number | null;
    chartData: number[];
    isFavorite: boolean;
  }
  
  export interface CryptoState {
    assets: CryptoAsset[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }