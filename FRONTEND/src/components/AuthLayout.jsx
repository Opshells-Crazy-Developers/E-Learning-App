// components/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">{children}</div>
    </div>
  );
};

export default AuthLayout;
