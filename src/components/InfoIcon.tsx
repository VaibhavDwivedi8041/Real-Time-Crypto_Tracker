import React from 'react';
import { Info } from 'lucide-react';

interface InfoIconProps {
  tooltip: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ tooltip }) => {
  return (
    <div className="group relative flex items-center">
      <Info className="w-4 h-4 text-gray-400 cursor-help ml-1" />
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 invisible group-hover:visible 
                     bg-gray-800 text-white text-xs rounded py-1 px-2 w-48 opacity-0 group-hover:opacity-100
                     transition-opacity duration-200 pointer-events-none z-10">
        {tooltip}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default InfoIcon;