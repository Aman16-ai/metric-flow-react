
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[250px] flex-1 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
