import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartOptions
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface MiniChartProps {
  data: number[];
  isPositive: boolean;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, isPositive }) => {
  const chartColor = isPositive ? '#10b981' : '#ef4444';
  
  const chartData = {
    labels: Array(data.length).fill(''),
    datasets: [
      {
        data,
        borderColor: chartColor,
        borderWidth: 1.5,
        backgroundColor: `${chartColor}15`,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      }
    },
  };

  return (
    <div className="h-16 w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MiniChart;