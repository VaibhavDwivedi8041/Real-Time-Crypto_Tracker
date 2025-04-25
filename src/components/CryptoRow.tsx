import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import PriceChange from './PriceChange';
import MiniChart from './MiniChart';
import { formatNumber, formatPrice, formatSupply } from '../utils/formatter';
import { CryptoAsset } from '../features/crypto/type';
import { useAppDispatch } from '../hooks/redux';
import { toggleFavorite } from '../features/crypto/cryptoSlice';

interface CryptoRowProps {
  asset: CryptoAsset;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ asset }) => {
  const dispatch = useAppDispatch();
  const prevPriceRef = useRef(asset.price);
  const [priceChanged, setPriceChanged] = useState(false);
  const [priceIncreased, setPriceIncreased] = useState(false);

  useEffect(() => {
    if (prevPriceRef.current !== asset.price) {
      setPriceIncreased(asset.price > prevPriceRef.current);
      setPriceChanged(true);
      
      const timer = setTimeout(() => {
        setPriceChanged(false);
        prevPriceRef.current = asset.price;
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [asset.price]);

  const priceColorClass = priceChanged 
    ? priceIncreased ? 'text-green-500' : 'text-red-500'
    : 'text-gray-900';

  const flashBgClass = priceChanged
    ? priceIncreased ? 'bg-green-50' : 'bg-red-50'
    : '';

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(asset.id));
  };

  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${flashBgClass}`}>
      <td className="py-4 pl-4 pr-2">
        <button 
          onClick={handleToggleFavorite}
          className="text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <Star 
            className={`w-5 h-5 ${asset.isFavorite ? 'text-yellow-400 fill-yellow-400' : ''}`} 
          />
        </button>
      </td>
      <td className="py-4 px-2 text-center">{asset.rank}</td>
      <td className="py-4 px-2">
        <div className="flex items-center">
          <img 
            src={asset.logo} 
            alt={`${asset.name} logo`} 
            className="w-8 h-8 mr-3 flex-shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className={`w-8 h-8 mr-3 flex-shrink-0 rounded-full bg-blue-100 hidden flex items-center justify-center text-blue-600 font-bold`}>
            {asset.symbol.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{asset.name}</div>
            <div className="text-gray-500 text-sm">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className={`py-4 px-2 font-medium ${priceColorClass} transition-colors`}>
        {formatPrice(asset.price)}
      </td>
      <td className="py-4 px-2">
        <PriceChange value={asset.percentChange1h} />
      </td>
      <td className="py-4 px-2">
        <PriceChange value={asset.percentChange24h} />
      </td>
      <td className="py-4 px-2">
        <PriceChange value={asset.percentChange7d} />
      </td>
      <td className="py-4 px-2 font-medium">
        {formatNumber(asset.marketCap)}
      </td>
      <td className="py-4 px-2">
        {formatNumber(asset.volume24h)}
      </td>
      <td className="py-4 px-2">
        {formatSupply(asset.circulatingSupply)} {asset.symbol}
      </td>
      <td className="py-4 px-2">
        <MiniChart 
          data={asset.chartData} 
          isPositive={asset.percentChange7d > 0} 
        />
      </td>
    </tr>
  );
};

export default CryptoRow;