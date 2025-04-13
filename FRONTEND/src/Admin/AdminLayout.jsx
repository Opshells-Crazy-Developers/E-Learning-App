// AdminLayout.jsx
import React from 'react';
import Sidebar from '../Admin/Sidebar';
import Navbar from './Navbar';

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Navbar/>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;