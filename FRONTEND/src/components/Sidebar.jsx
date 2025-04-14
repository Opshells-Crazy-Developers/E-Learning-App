import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon,
  Assignment as AssignmentIcon,
  LiveTv as LiveTvIcon,
  Quiz as QuizIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const menuItems = [
  { title: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
  { title: "My Courses", icon: <LibraryBooksIcon />, path: "/my-courses" },
  { title: "Tests & Quizzes", icon: <QuizIcon />, path: "/tests" },
  { title: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { title: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="bg-white h-screen shadow-lg w-64 fixed top-0 left-0 z-50">
      <div className="p-4 font-bold text-purple-600 text-2xl">
        Learnity
      </div>
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
  );
};

export default Sidebar;
