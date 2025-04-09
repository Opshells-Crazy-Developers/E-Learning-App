import React, { useState } from 'react';

const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => setRightPanelActive(true);
  const handleSignInClick = () => setRightPanelActive(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 px-4">
      <div
        className={`relative w-full max-w-4xl h-[520px] bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-700 ${
          isRightPanelActive ? 'right-panel-active' : ''
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-700 bg-white z-10 ${
            isRightPanelActive ? 'translate-x-full opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <form className="h-full flex flex-col justify-center items-center px-10 space-y-4">
            <h1 className="text-3xl font-bold text-purple-700">Create Account</h1>
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

       {/* Sign In Form */}
<div
  className={`absolute top-0 h-full w-1/2 transition-all duration-700 bg-white ${
    isRightPanelActive ? 'translate-x-full opacity-0 z-10' : 'opacity-100 z-20'
  }`}
>
  <form className="h-full flex flex-col justify-center items-center px-10 space-y-4">
    <h1 className="text-3xl font-bold text-purple-700">Sign In</h1>
    <input
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      type="email"
      placeholder="Email"
    />
    <input
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      type="password"
      placeholder="Password"
    />
    <a href="#" className="text-sm text-purple-600 hover:underline">
      Forgot password?
    </a>
    <button
      type="submit"
      className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition"
    >
      Sign In
    </button>

    {/* ✅ New line added here */}
    <p className="text-sm text-gray-600">
      Don&apos;t have an account?{' '}
      <button
        type="button"
        onClick={handleSignUpClick}
        className="text-purple-700 font-semibold hover:underline"
      >
        Sign Up
      </button>
    </p>
  </form>
</div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-1/2 h-full w-1/2 bg-gradient-to-r from-pink-500 to-orange-400 transition-transform duration-700 z-30 flex flex-col items-center justify-center text-white px-8 text-center ${
            isRightPanelActive ? '-translate-x-full' : ''
          }`}
        >
          {isRightPanelActive ? (
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-sm mb-4">To keep connected with us, please login with your personal info</p>
              <button
                onClick={handleSignInClick}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-600 transition"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold mb-2">Hello!</h1>
              <p className="text-sm mb-4">Enter your details to start your journey with us</p>
              <button
                onClick={handleSignUpClick}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-600 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
