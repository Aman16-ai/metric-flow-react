
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import './KPIDashboard.css';

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
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="kpi-dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">KPI Dashboard</h1>
          <p className="dashboard-subtitle">Monitor your key performance indicators</p>
        </div>
        <div className="time-range-selector">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              className={`time-range-btn ${selectedTimeRange === range ? 'active' : ''}`}
              onClick={() => setSelectedTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-cards-grid">
        {kpiData.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <div className="kpi-card-header">
              <h3 className="kpi-title">{kpi.title}</h3>
            </div>
            <div className="kpi-card-content">
              <div className="kpi-value">{kpi.value}</div>
              <div className={`kpi-change ${kpi.trend}`}>
                <span className={`trend-icon ${kpi.trend}`}>
                  {kpi.trend === 'up' ? '↗' : '↘'}
                </span>
                {kpi.change}
              </div>
              <p className="kpi-description">{kpi.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        {/* Revenue Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Revenue Overview</h3>
            <p className="chart-description">Monthly revenue and user growth</p>
          </div>
          <div className="chart-content">
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
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Conversion Rate</h3>
            <p className="chart-description">Daily conversion rate trends</p>
          </div>
          <div className="chart-content">
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
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Traffic Sources</h3>
            <p className="chart-description">Website traffic distribution</p>
          </div>
          <div className="chart-content">
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
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Performance Metrics</h3>
            <p className="chart-description">Key performance indicators comparison</p>
          </div>
          <div className="chart-content">
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
