
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/users', label: 'Users', icon: '👥' },
    { path: '/revenue', label: 'Revenue', icon: '💰' },
    { path: '/goals', label: 'Goals', icon: '🎯' },
    { path: '/reports', label: 'Reports', icon: '📋' },
    { path: '/realtime', label: 'Real-time', icon: '⚡' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className={`${isCollapsed ? 'w-[70px]' : 'w-[250px]'} h-screen bg-card border-r border-border flex flex-col transition-all duration-300 fixed left-0 top-0 z-50`}>
      <div className="p-5 border-b border-border flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📊</span>
          {!isCollapsed && <span className="text-lg font-bold text-foreground">KPI Platform</span>}
        </div>
        <button 
          className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="flex-1 py-5">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-3 px-5 py-3 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 rounded-r-[25px] mr-5 ${
                    isActive ? 'bg-primary text-primary-foreground' : ''
                  }`
                }
              >
                <span className="text-lg min-w-[18px]">{item.icon}</span>
                {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
