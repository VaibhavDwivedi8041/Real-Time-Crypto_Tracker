// Format large numbers to shortened format with appropriate suffix
export const formatNumber = (num: number): string => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };
  
  // Format price with appropriate precision
  export const formatPrice = (price: number): string => {
    if (price >= 1000) return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (price >= 1) return `$${price.toFixed(2)}`;
    return `$${price.toFixed(6)}`;
  };
  
  // Format percentages with a plus sign for positive values
  export const formatPercent = (percent: number): string => {
    const sign = percent > 0 ? '+' : '';
    return `${sign}${percent.toFixed(2)}%`;
  };
  
  // Format supply numbers in millions/billions
  export const formatSupply = (supply: number): string => {
    return `${supply.toFixed(2)}M`;
  };