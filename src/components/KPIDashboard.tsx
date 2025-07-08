import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Eye, Calendar, Filter } from 'lucide-react';

interface KPIMetric {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

interface ChartDataPoint {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  conversion?: number;
}

const KPIDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock KPI data
  const kpiMetrics: KPIMetric[] = [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: '$45,231',
      change: 12.5,
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />,
      color: 'text-green-600'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '2,847',
      change: 8.3,
      trend: 'up',
      icon: <Users className="h-4 w-4" />,
      color: 'text-blue-600'
    },
    {
      id: 'orders',
      title: 'Total Orders',
      value: '1,423',
      change: -2.1,
      trend: 'down',
      icon: <ShoppingCart className="h-4 w-4" />,
      color: 'text-purple-600'
    },
    {
      id: 'pageviews',
      title: 'Page Views',
      value: '28,490',
      change: 15.2,
      trend: 'up',
      icon: <Eye className="h-4 w-4" />,
      color: 'text-orange-600'
    }
  ];

  // Mock chart data with required value property
  const revenueData: ChartDataPoint[] = [
    { name: 'Jan', value: 4000, revenue: 4000, users: 2400 },
    { name: 'Feb', value: 3000, revenue: 3000, users: 1398 },
    { name: 'Mar', value: 2000, revenue: 2000, users: 9800 },
    { name: 'Apr', value: 2780, revenue: 2780, users: 3908 },
    { name: 'May', value: 1890, revenue: 1890, users: 4800 },
    { name: 'Jun', value: 2390, revenue: 2390, users: 3800 },
    { name: 'Jul', value: 3490, revenue: 3490, users: 4300 }
  ];

  const conversionData: ChartDataPoint[] = [
    { name: 'Mon', value: 2.4, conversion: 2.4 },
    { name: 'Tue', value: 1.8, conversion: 1.8 },
    { name: 'Wed', value: 3.2, conversion: 3.2 },
    { name: 'Thu', value: 2.9, conversion: 2.9 },
    { name: 'Fri', value: 3.8, conversion: 3.8 },
    { name: 'Sat', value: 2.1, conversion: 2.1 },
    { name: 'Sun', value: 1.9, conversion: 1.9 }
  ];

  const trafficSourceData = [
    { name: 'Organic Search', value: 35, color: '#3b82f6' },
    { name: 'Direct', value: 25, color: '#10b981' },
    { name: 'Social Media', value: 20, color: '#f59e0b' },
    { name: 'Email', value: 12, color: '#8b5cf6' },
    { name: 'Referral', value: 8, color: '#ef4444' }
  ];

  const performanceData: ChartDataPoint[] = [
    { name: '00:00', value: 120 },
    { name: '04:00', value: 95 },
    { name: '08:00', value: 280 },
    { name: '12:00', value: 450 },
    { name: '16:00', value: 380 },
    { name: '20:00', value: 220 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">KPI Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor your key performance indicators</p>
          </div>
          
          <div className="flex gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[150px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1d">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiMetrics.map((metric) => (
            <Card key={metric.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gray-100 ${metric.color}`}>
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs mt-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {Math.abs(metric.change)}%
                  </span>
                  <span className="text-gray-500">vs last period</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue & Users Chart */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Revenue & User Growth</CardTitle>
              <CardDescription>Monthly revenue and active users comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="users" fill="#10b981" name="Users" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Conversion Rate Chart */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Daily Conversion Rate</CardTitle>
              <CardDescription>Conversion rate performance by day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="conversion" 
                    stroke="#8b5cf6" 
                    fill="#8b5cf6" 
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Distribution of website traffic sources</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {trafficSourceData.map((source, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-xs text-gray-600">{source.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {source.value}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Performance */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Real-time Performance</CardTitle>
              <CardDescription>Hourly active users throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Summary Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
            <CardDescription>Key insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Top Performing</h4>
                <p className="text-sm text-gray-600">
                  Page views increased by 15.2% this period, showing strong user engagement.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-600">Needs Attention</h4>
                <p className="text-sm text-gray-600">
                  Order volume decreased by 2.1%. Consider reviewing pricing strategy.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Opportunity</h4>
                <p className="text-sm text-gray-600">
                  Conversion rate peaks on Fridays. Optimize marketing campaigns for this day.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPIDashboard;
