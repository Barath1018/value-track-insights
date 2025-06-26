
import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Percent } from 'lucide-react';
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
          value="$622,299"
          change={5979}
          changeText="vs last month"
          icon={<DollarSign className="w-5 h-5" />}
          color="blue"
        />
        <MetricCard
          title="Net Profit"
          value="$169,371"
          change={2989}
          changeText="vs last month"
          icon={<TrendingUp className="w-5 h-5" />}
          color="green"
        />
        <MetricCard
          title="Total Expenses"
          value="$452,928"
          change={68}
          changeText="vs last month"
          icon={<CreditCard className="w-5 h-5" />}
          color="red"
        />
        <MetricCard
          title="Profit Margin"
          value="+27.2%"
          change={2.1}
          changeText="vs last month"
          icon={<Percent className="w-5 h-5" />}
          color="orange"
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
