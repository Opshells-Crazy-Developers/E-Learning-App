import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call an API to send a password reset email here
    console.log('Password reset requested for:', email);
    setMessage('If this email is registered, we will send a reset link to your inbox.');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter the email address you registered with, and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
