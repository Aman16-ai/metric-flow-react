
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import KPIDashboard from './components/KPIDashboard';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<KPIDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<div className="placeholder-page"><h1>Users Management</h1><p>User analytics and management tools coming soon...</p></div>} />
          <Route path="/revenue" element={<div className="placeholder-page"><h1>Revenue Analytics</h1><p>Financial performance metrics coming soon...</p></div>} />
          <Route path="/goals" element={<div className="placeholder-page"><h1>Goals & Objectives</h1><p>Goal tracking and KPI targets coming soon...</p></div>} />
          <Route path="/reports" element={<div className="placeholder-page"><h1>Reports</h1><p>Custom report generation coming soon...</p></div>} />
          <Route path="/realtime" element={<div className="placeholder-page"><h1>Real-time Monitoring</h1><p>Live data monitoring dashboard coming soon...</p></div>} />
          <Route path="/settings" element={<div className="placeholder-page"><h1>Settings</h1><p>Platform configuration options coming soon...</p></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
