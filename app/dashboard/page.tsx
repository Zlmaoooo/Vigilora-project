"use client";

import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Activity,
  LineChart,
  Bell,
  Eye,
  Lock,
  Brain,
} from 'lucide-react';
import { useScrollAnimation } from '@/components/scroll-animation';
import Link from 'next/link';

// Sample data - In a real app, this would come from your API
const recentAlerts = [
  {
    id: 1,
    type: 'high',
    message: 'Suspicious login attempt detected',
    time: '2 minutes ago',
  },
  {
    id: 2,
    type: 'medium',
    message: 'Unusual transaction pattern identified',
    time: '15 minutes ago',
  },
  {
    id: 3,
    type: 'low',
    message: 'New device used for authentication',
    time: '1 hour ago',
  },
];

const quickStats = [
  {
    label: 'Threat Score',
    value: '12',
    change: '-2.5%',
    trend: 'down',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    label: 'Active Threats',
    value: '3',
    change: '+1',
    trend: 'up',
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    label: 'Protected Assets',
    value: '1,284',
    change: '+12.3%',
    trend: 'up',
    icon: Lock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'AI Insights',
    value: '89%',
    change: '+5.2%',
    trend: 'up',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

const securityTools = [
  {
    name: 'Threat Scanner',
    description: 'Scan your system for potential security threats',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Real-time Monitor',
    description: 'Monitor your system activity in real-time',
    icon: Activity,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'User Analytics',
    description: 'Analyze user behavior and detect anomalies',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Performance Metrics',
    description: 'Track system performance and security metrics',
    icon: LineChart,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
];

export default function DashboardPage() {
  useScrollAnimation();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-600">Here's what's happening with your security today.</p>
        </div>
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white group"
        >
          <Link href="/dashboard/scan" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Run Security Scan</span>
          </Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => (
          <Card key={stat.label} className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{stat.change}</span>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Recent Alerts */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <Bell className="h-5 w-5 text-yellow-600 mr-2" />
            Recent Alerts
          </h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="space-y-4">
          {recentAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  alert.type === 'high' ? 'bg-red-100 text-red-600' :
                  alert.type === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Security Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityTools.map((tool) => (
          <Card
            key={tool.name}
            className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className={`${tool.bgColor} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <tool.icon className={`h-6 w-6 ${tool.color}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-600 text-sm">{tool.description}</p>
          </Card>
        ))}
      </div>

      {/* Getting Started */}
      <Alert className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <AlertTitle className="text-blue-800">Complete Your Security Setup</AlertTitle>
        <AlertDescription className="text-blue-700">
          Enhance your protection by completing these recommended steps:
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Button variant="outline" className="bg-white hover:bg-blue-50">
              Configure 2FA
            </Button>
            <Button variant="outline" className="bg-white hover:bg-blue-50">
              Set Alert Preferences
            </Button>
            <Button variant="outline" className="bg-white hover:bg-blue-50">
              Connect API Keys
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}