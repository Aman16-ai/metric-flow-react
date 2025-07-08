
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import KPIDashboard from "./components/KPIDashboard";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<KPIDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<div className="p-6"><h1 className="text-2xl font-bold">Users Management</h1><p className="text-gray-600">User analytics and management tools coming soon...</p></div>} />
            <Route path="/revenue" element={<div className="p-6"><h1 className="text-2xl font-bold">Revenue Analytics</h1><p className="text-gray-600">Financial performance metrics coming soon...</p></div>} />
            <Route path="/goals" element={<div className="p-6"><h1 className="text-2xl font-bold">Goals & Objectives</h1><p className="text-gray-600">Goal tracking and KPI targets coming soon...</p></div>} />
            <Route path="/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p className="text-gray-600">Custom report generation coming soon...</p></div>} />
            <Route path="/realtime" element={<div className="p-6"><h1 className="text-2xl font-bold">Real-time Monitoring</h1><p className="text-gray-600">Live data monitoring dashboard coming soon...</p></div>} />
            <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600">Platform configuration options coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
