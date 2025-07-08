
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import KPIDashboard from './components/KPIDashboard';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<KPIDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Users Management</h1><p className="text-muted-foreground">User analytics and management tools coming soon...</p></div>} />
          <Route path="/revenue" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Revenue Analytics</h1><p className="text-muted-foreground">Financial performance metrics coming soon...</p></div>} />
          <Route path="/goals" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Goals & Objectives</h1><p className="text-muted-foreground">Goal tracking and KPI targets coming soon...</p></div>} />
          <Route path="/reports" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Reports</h1><p className="text-muted-foreground">Custom report generation coming soon...</p></div>} />
          <Route path="/realtime" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Real-time Monitoring</h1><p className="text-muted-foreground">Live data monitoring dashboard coming soon...</p></div>} />
          <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold text-foreground">Settings</h1><p className="text-muted-foreground">Platform configuration options coming soon...</p></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
