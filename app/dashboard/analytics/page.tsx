"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  Calendar, 
  Download, 
  Filter,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Shield,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useScrollAnimation } from '@/components/scroll-animation';

// Sample data - In a real app, this would come from your API
const threatData = [
  { date: 'Jan', phishing: 45, malware: 30, identity: 25 },
  { date: 'Feb', phishing: 50, malware: 25, identity: 30 },
  { date: 'Mar', phishing: 35, malware: 45, identity: 20 },
  { date: 'Apr', phishing: 40, malware: 35, identity: 35 },
  { date: 'May', phishing: 55, malware: 40, identity: 30 },
  { date: 'Jun', phishing: 60, malware: 45, identity: 40 },
];

const detectionStats = [
  {
    label: 'Threats Detected',
    value: '1,284',
    change: '+12.3%',
    trend: 'up',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'False Positives',
    value: '32',
    change: '-8.5%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    label: 'Detection Rate',
    value: '99.2%',
    change: '+0.5%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    label: 'Avg. Response Time',
    value: '1.2s',
    change: '-15.3%',
    trend: 'down',
    icon: TrendingDown,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
];

const topThreats = [
  { name: 'Phishing Attempts', percentage: 45, color: 'bg-blue-500' },
  { name: 'Malware Attacks', percentage: 30, color: 'bg-yellow-500' },
  { name: 'Identity Theft', percentage: 15, color: 'bg-red-500' },
  { name: 'Data Breaches', percentage: 10, color: 'bg-green-500' },
];

export default function AnalyticsPage() {
  useScrollAnimation();
  const [timeRange, setTimeRange] = useState('6m');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Security Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into your security posture</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Custom Range</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {detectionStats.map((stat) => (
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

      {/* Main Charts */}
      <Tabs defaultValue="threats" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="threats" className="flex items-center space-x-2">
              <LineChart className="h-4 w-4" />
              <span>Threat Trends</span>
            </TabsTrigger>
            <TabsTrigger value="distribution" className="flex items-center space-x-2">
              <PieChart className="h-4 w-4" />
              <span>Threat Distribution</span>
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center space-x-2">
              <BarChart className="h-4 w-4" />
              <span>Monthly Comparison</span>
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last Year</option>
            </select>
          </div>
        </div>

        <TabsContent value="threats" className="mt-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Threat Detection Trends</h3>
            <div className="h-80 w-full">
              {/* This would be a real chart in a production app */}
              <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="space-y-4 w-full px-8">
                  {/* Simulated chart */}
                  <div className="w-full h-60 relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full">
                      {threatData.map((month, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="relative w-full h-52 flex items-end justify-center space-x-1">
                            <div 
                              className="w-3 bg-blue-500 rounded-t-sm" 
                              style={{ height: `${month.phishing}%` }}
                            ></div>
                            <div 
                              className="w-3 bg-yellow-500 rounded-t-sm" 
                              style={{ height: `${month.malware}%` }}
                            ></div>
                            <div 
                              className="w-3 bg-red-500 rounded-t-sm" 
                              style={{ height: `${month.identity}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">{month.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      <span className="text-sm text-gray-600">Phishing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                      <span className="text-sm text-gray-600">Malware</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <span className="text-sm text-gray-600">Identity Theft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="distribution">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Threat Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                {/* Simulated pie chart */}
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="188.4" transform="rotate(-90 50 50)" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EF4444" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="220.8" transform="rotate(-162 50 50)" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22C55E" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="238.64" transform="rotate(-216 50 50)" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Top Threats</h4>
                {topThreats.map((threat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{threat.name}</span>
                      <span className="text-sm font-bold">{threat.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${threat.color} rounded-full`} 
                        style={{ width: `${threat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Comparison</h3>
            <div className="h-80 w-full">
              {/* This would be a real chart in a production app */}
              <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="space-y-4 w-full px-8">
                  {/* Simulated chart */}
                  <div className="w-full h-60 relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full">
                      {threatData.map((month, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="relative w-full h-52 flex items-end justify-center">
                            <div 
                              className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                              style={{ height: `${month.phishing + month.malware + month.identity}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">{month.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Average: </span>
                      <span className="font-medium">87 threats/month</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Peak: </span>
                      <span className="font-medium">145 (May)</span>
                    </div>
                    <div className="text-sm text-green-600 flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="font-medium">+18.5% vs previous period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">World map visualization would appear here</p>
              <p className="text-sm text-gray-400 mt-2">Top regions: United States, China, Russia</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Security Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium">Enable Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Strengthen account security with 2FA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">Update Security Policies</h4>
                <p className="text-sm text-gray-600">Your policies were last updated 90 days ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Increase Phishing Detection</h4>
                <p className="text-sm text-gray-600">Configure advanced phishing protection</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}