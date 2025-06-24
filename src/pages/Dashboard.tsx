
import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Users } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import SalesChart from '../components/charts/SalesChart';
import ProfitChart from '../components/charts/ProfitChart';
import ExpenseChart from '../components/charts/ExpenseChart';
import AlertBanner from '../components/AlertBanner';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <AlertBanner />
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value="$847,520"
          change={12.5}
          icon={<DollarSign className="w-6 h-6" />}
          color="blue"
        />
        <MetricCard
          title="Total Profit"
          value="$254,256"
          change={8.2}
          icon={<TrendingUp className="w-6 h-6" />}
          color="green"
        />
        <MetricCard
          title="Total Expenses"
          value="$593,264"
          change={-3.1}
          icon={<CreditCard className="w-6 h-6" />}
          color="red"
        />
        <MetricCard
          title="Active Customers"
          value="2,847"
          change={15.3}
          icon={<Users className="w-6 h-6" />}
          color="purple"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SalesChart />
        <ProfitChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ExpenseChart />
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {[
                { id: 1, description: 'Product Sales - Online Store', amount: '+$2,450', date: 'Today', type: 'income' },
                { id: 2, description: 'Marketing Campaign - Google Ads', amount: '-$850', date: 'Yesterday', type: 'expense' },
                { id: 3, description: 'Product Sales - Retail Store', amount: '+$1,200', date: '2 days ago', type: 'income' },
                { id: 4, description: 'Office Supplies', amount: '-$320', date: '3 days ago', type: 'expense' },
                { id: 5, description: 'Client Payment - ABC Corp', amount: '+$5,500', date: '4 days ago', type: 'income' },
              ].map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <span className={`font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
