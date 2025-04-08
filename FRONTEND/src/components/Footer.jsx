import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-3">LearnSphere</h3>
          <p className="text-sm mb-4">
            Empowering learners through quality content, expert instructors, and accessible education for all.
          </p>
          {/* <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 hover:opacity-80 cursor-pointer" />
          </div> */}
        </div>

        {/* Center */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Courses</li>
            <li className="hover:text-blue-600 cursor-pointer">Instructors</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>+91 9876543210</li>
            <li>support@learnsphere.com</li>
            <li className="text-gray-500">Mon - Fri, 9:00AM - 6:00PM</li>
          </ul>
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
