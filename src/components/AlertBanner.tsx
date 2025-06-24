
import React from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface Alert {
  id: string;
  type: 'warning' | 'success' | 'info' | 'error';
  title: string;
  message: string;
  timestamp: string;
}

const AlertBanner = () => {
  const [alerts, setAlerts] = React.useState<Alert[]>([
    {
      id: '1',
      type: 'warning',
      title: 'Low Profit Margin',
      message: 'Your profit margin has dropped below 25% this month. Consider reviewing expenses.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'success',
      title: 'Sales Target Achieved',
      message: 'Congratulations! You have exceeded your monthly sales target by 15%.',
      timestamp: '1 day ago'
    },
    {
      id: '3',
      type: 'info',
      title: 'Monthly Report Ready',
      message: 'Your comprehensive business report for this month is ready for review.',
      timestamp: '3 days ago'
    }
  ]);

  const removeAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getAlertColors = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-3 mb-6">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-lg border flex items-start space-x-3 ${getAlertColors(alert.type)}`}
        >
          <div className="flex-shrink-0 mt-0.5">
            {getAlertIcon(alert.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm">{alert.title}</h4>
              <span className="text-xs opacity-75">{alert.timestamp}</span>
            </div>
            <p className="text-sm mt-1 opacity-90">{alert.message}</p>
          </div>
          
          <button
            onClick={() => removeAlert(alert.id)}
            className="flex-shrink-0 p-1 hover:bg-black hover:bg-opacity-10 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertBanner;
