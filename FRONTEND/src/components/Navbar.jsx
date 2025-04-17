import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getCourses } from '../features/courses/courseService';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getCourses();
        const uniqueCategories = [...new Set(allCourses.map((c) => c.category))];
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
      navigate(`/courses?search=${encodeURIComponent(searchTerm.trim())}`);
      setMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    ...(currentUser
      ? [
          { name: 'Dashboard', path: '/dashboard' },
          { name: 'My Courses', path: '/my-courses' },
          { name: 'Subscriptions', path: '/subscriptions' },
        ]
      : []),
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-700">Learnity</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 flex-1 justify-center items-center">
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

        {/* Search & Auth */}
        <div className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button type="submit" className="absolute right-2 top-1.5 text-gray-500 hover:text-purple-600">
              <Search size={16} />
            </button>
          </form>

          {currentUser ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" title="Profile">
                <User className="text-purple-700" />
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-500 text-sm">
                Log in
              </Link>
              <Link to="/signup" className="px-4 py-1 border border-purple-600 text-purple-600 rounded hover:bg-purple-200 text-sm">
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
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

          {/* Categories under Courses */}
          {categories.length > 0 && (
            <div className="border-t pt-2">
              <p className="text-sm font-semibold text-gray-500">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/courses?category=${encodeURIComponent(cat)}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-purple-600 ml-2"
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {/* Auth Links */}
          {currentUser ? (
            <>
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="block text-purple-700">
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-purple-600">
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="block text-purple-600">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
