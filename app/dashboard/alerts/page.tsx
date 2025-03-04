"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Bell, 
  AlertTriangle, 
  Shield, 
  Mail, 
  Phone, 
  Settings, 
  CheckCircle2,
  Clock,
  Filter,
  Loader2
} from 'lucide-react';
import { useScrollAnimation } from '@/components/scroll-animation';

// Sample data - In a real app, this would come from your API
const alerts = [
  {
    id: 1,
    type: 'high',
    message: 'Suspicious login attempt detected from IP 192.168.1.1',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    type: 'medium',
    message: 'Unusual transaction pattern identified on your account',
    time: '5 hours ago',
    read: false,
  },
  {
    id: 3,
    type: 'low',
    message: 'New device used for authentication',
    time: '1 day ago',
    read: true,
  },
  {
    id: 4,
    type: 'medium',
    message: 'Multiple failed login attempts detected',
    time: '2 days ago',
    read: true,
  },
  {
    id: 5,
    type: 'high',
    message: 'Potential data breach detected in your network',
    time: '3 days ago',
    read: true,
  },
];

const notificationSettings = [
  {
    id: 'email',
    label: 'Email Notifications',
    description: 'Receive alerts via email',
    icon: Mail,
    enabled: true,
  },
  {
    id: 'sms',
    label: 'SMS Notifications',
    description: 'Receive alerts via text message',
    icon: Phone,
    enabled: false,
  },
  {
    id: 'browser',
    label: 'Browser Notifications',
    description: 'Receive alerts in your browser',
    icon: Bell,
    enabled: true,
  },
];

export default function AlertsPage() {
  useScrollAnimation();
  const [userAlerts, setUserAlerts] = useState(alerts);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [settings, setSettings] = useState(notificationSettings);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const markAsRead = (id: number) => {
    setUserAlerts(
      userAlerts.map((alert) =>
        alert.id === id ? { ...alert, read: true } : alert
      )
    );
  };

  const markAllAsRead = () => {
    setUserAlerts(
      userAlerts.map((alert) => ({ ...alert, read: true }))
    );
  };

  const toggleSetting = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  const filteredAlerts = userAlerts.filter((alert) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !alert.read;
    return alert.type === filter;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Security Alerts</h1>
          <p className="text-gray-600">Stay informed about potential security threats</p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2"
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Button>
          <Button
            onClick={markAllAsRead}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
        </div>
      </div>

      {showSettings && (
        <Card className="p-6 animate-fade-up">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            {settings.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <setting.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{setting.label}</h3>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                </div>
                <Switch
                  checked={setting.enabled}
                  onCheckedChange={() => toggleSetting(setting.id)}
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      <div className="flex items-center space-x-4 mb-6">
        <Filter className="text-gray-400 h-4 w-4" />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Alerts</option>
          <option value="unread">Unread</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <span className="text-sm text-gray-500">
          {filteredAlerts.length} {filteredAlerts.length === 1 ? 'alert' : 'alerts'} found
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
        </div>
      ) : filteredAlerts.length > 0 ? (
        <div className="space-y-4">
          {filteredAlerts.map((alert) => (
            <Card 
              key={alert.id} 
              className={`p-6 hover:shadow-md transition-shadow ${!alert.read ? 'border-l-4 border-blue-500' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    alert.type === 'high' ? 'bg-red-100' :
                    alert.type === 'medium' ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{alert.message}</h3>
                    <p className="text-gray-500 text-sm">{alert.time}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {!alert.read && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => markAsRead(alert.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No alerts found</h3>
          <p className="text-gray-600">
            {filter !== 'all' 
              ? "No alerts match your current filter. Try selecting a different filter."
              : "You're all caught up! No security alerts at this time."}
          </p>
        </Card>
      )}
    </div>
  );
}