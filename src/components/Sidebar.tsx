
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, FileText, Settings, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

const Sidebar = () => {
  const navigationItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard', exact: true },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/alerts', icon: AlertCircle, label: 'Alerts' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">BizDash</h1>
            <p className="text-slate-400 text-sm">Business Intelligence</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-slate-700 p-4 rounded-lg">
          <p className="text-sm font-semibold mb-1">Need Help?</p>
          <p className="text-xs text-slate-400">Check our documentation for detailed guides.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
