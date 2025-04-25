import React from 'react';
import CryptoRow from './CryptoRow';
import InfoIcon from './InfoIcon';
import { useAppSelector } from '../hooks/redux';

const CryptoTable: React.FC = () => {
  const { assets } = useAppSelector(state => state.crypto);

  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-left"></th>
            <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              1h %
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h %
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              7d %
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Market Cap
              <InfoIcon tooltip="The total market value of a cryptocurrency's circulating supply" />
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Volume(24h)
              <InfoIcon tooltip="A measure of how much of a cryptocurrency was traded in the last 24 hours" />
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Circulating Supply
              <InfoIcon tooltip="The amount of coins that are circulating in the market and are in public hands" />
            </th>
            <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.map(asset => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;