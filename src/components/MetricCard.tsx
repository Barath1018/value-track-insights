
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeText: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'red' | 'orange';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeText, icon, color }) => {
  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    orange: 'text-orange-600',
  };

  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-2 rounded-lg bg-white ${iconColors[color]}`}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-center text-sm">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
        ) : (
          <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
        )}
        <span className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-gray-500 ml-1">{changeText}</span>
      </div>
    </div>
  );
};

export default MetricCard;
