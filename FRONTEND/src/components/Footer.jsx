import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-3">LearnSphere</h3>
          <p className="text-sm mb-4">
            Empowering learners through quality content, expert instructors, and accessible education for all.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/courses" className="hover:text-blue-600">Courses</Link></li>
            <li><Link to="/instructors" className="hover:text-blue-600">Instructors</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 9876543210</li>
            <li>📧 support@learnsphere.com</li>
            <li>🕒 Mon - Fri, 9:00AM - 6:00PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h2>
          <p className="text-sm mb-3">Stay updated with new courses and blog posts.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-purple-600 text-white px-4 rounded-r-md text-sm hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />
      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} LearnSphere — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
