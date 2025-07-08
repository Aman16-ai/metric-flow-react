
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const KPIDashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock KPI data
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$124,592',
      change: '+12.5%',
      trend: 'up',
      description: 'Total revenue this month'
    },
    {
      title: 'Active Users',
      value: '8,549',
      change: '+8.2%',
      trend: 'up',
      description: 'Monthly active users'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      description: 'Visitor to customer rate'
    },
    {
      title: 'Avg. Session Time',
      value: '4m 32s',
      change: '+5.7%',
      trend: 'up',
      description: 'Average time per session'
    }
  ];

  // Mock chart data
  const revenueData = [
    { name: 'Jan', value: 4000, revenue: 4000, users: 2400 },
    { name: 'Feb', value: 3000, revenue: 3000, users: 1398 },
    { name: 'Mar', value: 2000, revenue: 2000, users: 9800 },
    { name: 'Apr', value: 2780, revenue: 2780, users: 3908 },
    { name: 'May', value: 1890, revenue: 1890, users: 4800 },
    { name: 'Jun', value: 2390, revenue: 2390, users: 3800 },
    { name: 'Jul', value: 3490, revenue: 3490, users: 4300 }
  ];

  const conversionData = [
    { name: 'Mon', value: 2.4, conversion: 2.4 },
    { name: 'Tue', value: 1.8, conversion: 1.8 },
    { name: 'Wed', value: 3.2, conversion: 3.2 },
    { name: 'Thu', value: 2.9, conversion: 2.9 },
    { name: 'Fri', value: 3.8, conversion: 3.8 },
    { name: 'Sat', value: 2.1, conversion: 2.1 },
    { name: 'Sun', value: 1.9, conversion: 1.9 }
  ];

  const trafficSourceData = [
    { name: 'Organic Search', value: 45, color: '#8884d8' },
    { name: 'Direct', value: 30, color: '#82ca9d' },
    { name: 'Social Media', value: 15, color: '#ffc658' },
    { name: 'Email', value: 10, color: '#ff7c7c' }
  ];

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-background">
        <div className="w-10 h-10 border-4 border-border border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-muted-foreground text-base">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">KPI Dashboard</h1>
          <p className="text-muted-foreground text-base">Monitor your key performance indicators</p>
        </div>
        <div className="flex gap-1 bg-card p-1 rounded-lg shadow-sm border border-border">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTimeRange === range
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
              onClick={() => setSelectedTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{kpi.title}</h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">{kpi.value}</div>
              <div className={`flex items-center gap-2 text-sm font-semibold ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-500'
              }`}>
                <span className="text-base">
                  {kpi.trend === 'up' ? '↗' : '↘'}
                </span>
                {kpi.change}
              </div>
              <p className="text-muted-foreground text-sm">{kpi.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-foreground mb-2">Revenue Overview</h3>
            <p className="text-muted-foreground text-sm">Monthly revenue and user growth</p>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="users" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Rate Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-foreground mb-2">Conversion Rate</h3>
            <p className="text-muted-foreground text-sm">Daily conversion rate trends</p>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="conversion" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-foreground mb-2">Traffic Sources</h3>
            <p className="text-muted-foreground text-sm">Website traffic distribution</p>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="mb-5">
            <h3 className="text-xl font-bold text-foreground mb-2">Performance Metrics</h3>
            <p className="text-muted-foreground text-sm">Key performance indicators comparison</p>
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIDashboard;
