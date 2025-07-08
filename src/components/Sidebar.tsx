
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Calendar,
  FileText,
  Target,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    {
      title: 'Dashboard',
      href: '/',
      icon: BarChart3,
      description: 'Overview & metrics'
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: TrendingUp,
      description: 'Detailed insights'
    },
    {
      title: 'Users',
      href: '/users',
      icon: Users,
      description: 'User management'
    },
    {
      title: 'Revenue',
      href: '/revenue',
      icon: DollarSign,
      description: 'Financial data'
    },
    {
      title: 'Goals',
      href: '/goals',
      icon: Target,
      description: 'Track objectives'
    },
    {
      title: 'Reports',
      href: '/reports',
      icon: FileText,
      description: 'Generate reports'
    },
    {
      title: 'Real-time',
      href: '/realtime',
      icon: Activity,
      description: 'Live monitoring'
    }
  ];

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center mb-6 px-3">
            <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">KPI Platform</h2>
          </div>
          
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 group",
                    isActive
                      ? "bg-blue-100 text-blue-900 shadow-sm"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )
                }
              >
                <item.icon className="mr-3 h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-600">
                    {item.description}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        
        <div className="px-3 py-2">
          <div className="space-y-1">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )
              }
            >
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
