
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart } from 'lucide-react';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 45000, customers: 450, orders: 320 },
    { month: 'Feb', revenue: 52000, customers: 520, orders: 380 },
    { month: 'Mar', revenue: 48000, customers: 480, orders: 340 },
    { month: 'Apr', revenue: 61000, customers: 610, orders: 450 },
    { month: 'May', revenue: 55000, customers: 550, orders: 400 },
    { month: 'Jun', revenue: 67000, customers: 670, orders: 520 },
  ];

  const customerSegmentData = [
    { segment: 'New Customers', value: 35, color: '#3b82f6' },
    { segment: 'Returning Customers', value: 45, color: '#10b981' },
    { segment: 'VIP Customers', value: 20, color: '#f59e0b' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics</h1>
        <p className="text-gray-600">Deep insights into your business performance</p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Average Order Value</p>
              <p className="text-2xl font-bold text-gray-900">$127.50</p>
              <div className="flex items-center text-green-600 text-sm mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+5.2%</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">3.2%</p>
              <div className="flex items-center text-red-600 text-sm mt-1">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>-0.8%</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Customer Lifetime Value</p>
              <p className="text-2xl font-bold text-gray-900">$890</p>
              <div className="flex items-center text-green-600 text-sm mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+12.1%</span>
              </div>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Churn Rate</p>
              <p className="text-2xl font-bold text-gray-900">2.1%</p>
              <div className="flex items-center text-green-600 text-sm mt-1">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>-0.3%</span>
              </div>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue vs Customer Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
              <YAxis yAxisId="left" stroke="#6b7280" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} />
              <Line yAxisId="right" type="monotone" dataKey="customers" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Orders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="orders" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Segments Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerSegmentData.map((segment) => (
            <div key={segment.segment} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="3"
                    strokeDasharray={`${segment.value}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{segment.value}%</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
