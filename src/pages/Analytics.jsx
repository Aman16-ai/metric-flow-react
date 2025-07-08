
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Analytics = () => {
  const detailedData = [
    { name: 'Week 1', visitors: 4000, conversions: 240, revenue: 2400 },
    { name: 'Week 2', visitors: 3000, conversions: 139, revenue: 2210 },
    { name: 'Week 3', visitors: 2000, conversions: 980, revenue: 2290 },
    { name: 'Week 4', visitors: 2780, conversions: 390, revenue: 2000 },
  ];

  const hourlyData = [
    { hour: '00:00', users: 120 },
    { hour: '02:00', users: 85 },
    { hour: '04:00', users: 65 },
    { hour: '06:00', users: 145 },
    { hour: '08:00', users: 280 },
    { hour: '10:00', users: 350 },
    { hour: '12:00', users: 420 },
    { hour: '14:00', users: 380 },
    { hour: '16:00', users: 340 },
    { hour: '18:00', users: 290 },
    { hour: '20:00', users: 220 },
    { hour: '22:00', users: 180 },
  ];

  const metricCards = [
    { title: 'Avg. Session Duration', value: '4m 32s', change: '+12% from last month', icon: '⏱️' },
    { title: 'Bounce Rate', value: '32.4%', change: '-8% from last month', icon: '📈' },
    { title: 'Goal Completions', value: '1,247', change: '+23% from last month', icon: '🎯' },
    { title: 'New vs Returning', value: '68% / 32%', change: 'Healthy ratio', icon: '👥' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">Detailed performance insights and trends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
              <span className="text-lg">{card.icon}</span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Weekly Performance</h3>
            <p className="text-muted-foreground text-sm">Visitors, conversions, and revenue trends</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={detailedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#3b82f6" name="Visitors" />
              <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">Hourly Active Users</h3>
            <p className="text-muted-foreground text-sm">User activity throughout the day</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
