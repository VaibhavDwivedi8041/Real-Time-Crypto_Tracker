import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface PriceChangeProps {
  value: number;
  className?: string;
}

const PriceChange: React.FC<PriceChangeProps> = ({ value, className = '' }) => {
  // Determine if the value is positive, negative, or zero
  const isPositive = value > 0;
  const isZero = value === 0;

  // Determine the color class based on the value
  const colorClass = isPositive 
    ? 'text-green-500' 
    : isZero 
      ? 'text-gray-500' 
      : 'text-red-500';

  // Format the value with a plus sign for positive values
  const formattedValue = `${isPositive ? '+' : ''}${value.toFixed(2)}%`;

  return (
    <span className={`flex items-center ${colorClass} ${className} font-medium`}>
      {isPositive ? (
        <ArrowUp className="w-4 h-4 mr-1" />
      ) : isZero ? null : (
        <ArrowDown className="w-4 h-4 mr-1" />
      )}
      {formattedValue}
    </span>
  );
};

export default PriceChange;