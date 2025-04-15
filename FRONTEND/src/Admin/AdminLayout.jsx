import React from 'react';
import Sidebar from '../Admin/Sidebar';
import Navbar from './Navbar';
import DashboardOverview from './DashboardOverview';

function AdminLayout({ children }) {
  const hasChildren = React.Children.count(children) > 0;
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-52 flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <main className="p-0">
          {hasChildren ? children : <DashboardOverview />}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;