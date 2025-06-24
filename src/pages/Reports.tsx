
import React from 'react';
import { Calendar, Download, FileText, Filter } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Sales Report',
      description: 'Comprehensive analysis of sales performance',
      date: '2024-01-31',
      status: 'Ready',
      type: 'PDF'
    },
    {
      id: 2,
      title: 'Expense Analysis',
      description: 'Detailed breakdown of business expenses',
      date: '2024-01-31',
      status: 'Ready',
      type: 'Excel'
    },
    {
      id: 3,
      title: 'Profit & Loss Statement',
      description: 'Financial performance overview',
      date: '2024-01-31',
      status: 'Generating',
      type: 'PDF'
    },
    {
      id: 4,
      title: 'Customer Analytics',
      description: 'Customer behavior and demographics',
      date: '2024-01-31',
      status: 'Ready',
      type: 'PDF'
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
        <p className="text-gray-600">Generate and download comprehensive business reports</p>
      </div>

      {/* Report Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Reports</option>
              <option>Sales Reports</option>
              <option>Financial Reports</option>
              <option>Customer Reports</option>
            </select>
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Generate New Report</span>
          </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                report.status === 'Ready' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{report.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span>Generated: {report.date}</span>
                <br />
                <span>Format: {report.type}</span>
              </div>
              
              <button 
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  report.status === 'Ready'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                disabled={report.status !== 'Ready'}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Report Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-gray-600">Reports Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">18</div>
            <div className="text-gray-600">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-gray-600">Scheduled Reports</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-gray-600">In Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
