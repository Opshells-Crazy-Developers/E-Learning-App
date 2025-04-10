import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Right Section */}
      <div className="flex flex-col flex-1 ml-64 p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search anything..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
