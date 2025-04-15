import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Here you could add any logout logic like clearing tokens/session
    navigate('/login');
  };
  
  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">E-Learning Admin Portal</h2>
        
        <div className="flex items-center">
          {/* Search Bar */}
          <div className="mr-4 relative">
            <input
              type="text"
              placeholder="Search courses, students..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm w-64"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Notifications */}
          <div className="mr-4 relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10">
                <div className="p-2 border-b">
                  <h3 className="text-sm font-medium">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-3 border-b hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium">New course submission</p>
                    <p className="text-xs text-gray-500">Advanced JavaScript - needs approval</p>
                    <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
                  </div>
                  <div className="p-3 border-b hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium">Student support request</p>
                    <p className="text-xs text-gray-500">Issue with quiz in Python Basics</p>
                    <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                  </div>
                  <div className="p-3 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium">New instructor application</p>
                    <p className="text-xs text-gray-500">Jane Doe - Web Development</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                  </div>
                </div>
                <div className="p-2 text-center border-t">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View all notifications</button>
                </div>
              </div>
            )}
          </div>
          
          {/* Help */}
          <button className="mr-4 p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          {/* User Profile */}
          <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={() => setShowProfileMenu(!showProfileMenu)}>
              <div className="mr-3 text-right">
                <div className="text-sm font-medium text-gray-900">Jessica Chen</div>
                <div className="text-xs text-gray-500">Course Admin</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                JC
              </div>
            </div>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help Center</a>
                  <div className="border-t"></div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Direct Logout Button */}
       
        </div>
      </div>
    </header>
  );
}

export default Navbar;