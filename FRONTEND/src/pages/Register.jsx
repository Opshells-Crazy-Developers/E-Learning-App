import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full transition hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Create Account 🚀</h2>

        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none bg-transparent py-2"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-purple-600 transition-all"
            >
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none bg-transparent py-2"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-purple-600 transition-all"
            >
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none bg-transparent py-2"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-purple-600 transition-all"
            >
              Password
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              className="peer w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none bg-transparent py-2"
              required
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-purple-600 transition-all"
            >
              Confirm Password
            </label>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-md">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:underline font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
