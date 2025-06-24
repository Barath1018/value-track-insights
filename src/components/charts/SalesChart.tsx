
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 45000, target: 50000 },
  { month: 'Feb', sales: 52000, target: 50000 },
  { month: 'Mar', sales: 48000, target: 55000 },
  { month: 'Apr', sales: 61000, target: 55000 },
  { month: 'May', sales: 55000, target: 60000 },
  { month: 'Jun', sales: 67000, target: 60000 },
  { month: 'Jul', sales: 71000, target: 65000 },
  { month: 'Aug', sales: 68000, target: 65000 },
  { month: 'Sep', sales: 75000, target: 70000 },
  { month: 'Oct', sales: 82000, target: 70000 },
  { month: 'Nov', sales: 79000, target: 75000 },
  { month: 'Dec', sales: 88000, target: 75000 },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Performance</h3>
        <p className="text-gray-600">Monthly sales vs targets</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            labelStyle={{ color: '#374151' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
            name="Actual Sales"
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#10b981" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            name="Target"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
