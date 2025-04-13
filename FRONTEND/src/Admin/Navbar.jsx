// Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <div className="text-sm font-medium text-gray-900">Admin User</div>
            <div className="text-xs text-gray-500">admin@example.com</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
            AU
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;