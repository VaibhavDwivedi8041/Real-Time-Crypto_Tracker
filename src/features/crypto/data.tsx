import { CryptoAsset } from './type';

// Generate random price chart data
const generateChartData = () => {
  return Array.from({ length: 24 }, () => Math.random() * 10 + 90);
};

export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    price: 93759.48,
    percentChange1h: 0.43,
    percentChange24h: 0.93,
    percentChange7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85,
    maxSupply: 21,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    price: 1802.46,
    percentChange1h: 0.60,
    percentChange24h: 3.21,
    percentChange7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71,
    maxSupply: null,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    price: 1.00,
    percentChange1h: -0.00,
    percentChange24h: -0.00,
    percentChange7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: 145.27,
    maxSupply: null,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'xrp',
    rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
    price: 2.22,
    percentChange1h: 0.46,
    percentChange24h: 0.54,
    percentChange7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39,
    maxSupply: 100,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'bnb',
    rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    price: 606.65,
    percentChange1h: 0.09,
    percentChange24h: -1.20,
    percentChange7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89,
    maxSupply: 200,
    chartData: generateChartData(),
    isFavorite: false
  },
  {
    id: 'solana',
    rank: 6,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    price: 151.51,
    percentChange1h: 0.53,
    percentChange24h: 1.26,
    percentChange7d: 14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31,
    maxSupply: null,
    chartData: generateChartData(),
    isFavorite: false
  }
];