import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import {getCourses}  from '../features/courses/courseService';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const getCourses = await getCourses();
        const uniqueCategories = [...new Set(getCourses.map((c) => c.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };
  
    fetchCourses();
  }, []);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Subscriptions', path: '/subscriptions' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-purple-700">
          Learnity
        </Link>

        <div className="hidden md:flex gap-6 items-center flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition duration-200 ${
                location.pathname === link.path
                  ? 'text-purple-700 underline underline-offset-4'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Search + Auth */}
        <div className="hidden md:flex gap-4 items-center">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 text-gray-500 hover:text-purple-600"
            >
              <Search size={16} />
            </button>
          </form>

          <Link
            to="/login"
            className="px-4 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 text-sm transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <form onSubmit={handleSearch} className="flex items-center border rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-sm outline-none"
            />
            <button type="submit" className="text-gray-500 hover:text-purple-600">
              <Search size={16} />
            </button>
          </form>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base transition ${
                location.pathname === link.path
                  ? 'text-purple-700 underline underline-offset-4'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="block border border-purple-600 text-purple-600 px-3 py-1 rounded hover:bg-purple-50 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
