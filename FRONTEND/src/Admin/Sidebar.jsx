import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} />, path: '/admin' },
    { id: 'courses', label: 'Courses', icon: <BookOpen size={20} />, path: '/admin/courses' },
    { id: 'users', label: 'Users', icon: <Users size={20} />, path: '/admin/users' },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={20} />, path: '/admin/analytics' },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-purple-800 text-white flex flex-col justify-between shadow-lg z-50">
      {/* Brand / Logo Section */}
      <div className="p-6 flex items-center gap-2 border-b border-purple-600">
        <BookOpen size={26} />
        <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="mt-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-700 text-white'
                      : 'text-purple-200 hover:bg-purple-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-6 border-t border-purple-600">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center w-full text-left text-purple-200 hover:text-white hover:bg-purple-700 px-4 py-3 rounded transition-all"
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
