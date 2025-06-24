
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', profit: 12000, margin: 26.7 },
  { month: 'Feb', profit: 15600, margin: 30.0 },
  { month: 'Mar', profit: 13440, margin: 28.0 },
  { month: 'Apr', profit: 18300, margin: 30.0 },
  { month: 'May', profit: 16500, margin: 30.0 },
  { month: 'Jun', profit: 20100, margin: 30.0 },
  { month: 'Jul', profit: 21300, margin: 30.0 },
  { month: 'Aug', profit: 20400, margin: 30.0 },
  { month: 'Sep', profit: 22500, margin: 30.0 },
  { month: 'Oct', profit: 24600, margin: 30.0 },
  { month: 'Nov', profit: 23700, margin: 30.0 },
  { month: 'Dec', profit: 26400, margin: 30.0 },
];

const ProfitChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Profit Trends</h3>
        <p className="text-gray-600">Monthly profit analysis</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Profit']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stroke="#10b981" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#profitGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitChart;
