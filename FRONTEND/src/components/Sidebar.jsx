import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon,
  Quiz as QuizIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon, // For mobile toggle button
  Close as CloseIcon, // For mobile close button
} from "@mui/icons-material";

const menuItems = [
  { title: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
  { title: "My Courses", icon: <LibraryBooksIcon />, path: "/my-courses" },
  { title: "Tests & Quizzes", icon: <QuizIcon />, path: "/test-quiz" },
  { title: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { title: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially set to false on mobile

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button for mobile */}
      <div className="md:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-purple-600 focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white h-screen shadow-lg w-52 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 font-bold text-purple-600 text-2xl">Learnity</div>
        <nav className="mt-6">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-5 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-purple-100 text-purple-600 border-r-4 border-purple-500"
                        : "text-gray-600 hover:bg-gray-100 hover:text-purple-500"
                    }`
                  }
                >
                  <span className="mr-4">{item.icon}</span>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="md:hidden fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
