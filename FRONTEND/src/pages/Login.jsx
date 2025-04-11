import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';

const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [signInData, setSignInData] = useState({ email: '', password: '' });

  const handleSignUpClick = () => setRightPanelActive(true);
  const handleSignInClick = () => setRightPanelActive(false);

  // Handle form input changes
  const handleSignUpInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInInputChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  // Handle form submissions
 // Inside your handleSignUpSubmit function:
const handleSignUpSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    });
    
    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      // Optionally, redirect to another page or reset form
    } else {
      alert(result.message);
    }
  } catch (err) {
    console.error('Error signing up:', err);
  }
};


const handleSignInSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInData),
    });
    
    const result = await response.json();
    if (response.ok) {
      alert(result.message);  // Show success message
      // Optionally, redirect to another page after successful sign-in
      // For example: history.push('/dashboard');
    } else {
      alert(result.message);  // Show error message from API
    }
  } catch (err) {
    console.error('Error signing in:', err);
    alert('An error occurred during sign-in.');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 px-4 flex flex-col items-center">
      <div className="relative w-full max-w-4xl h-[600px] bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-700 mb-8 mt-8">
        
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-700 bg-white z-10 ${
            isRightPanelActive ? 'translate-x-full opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <form className="h-full flex flex-col justify-center items-center px-10 space-y-4" onSubmit={handleSignUpSubmit}>
            <h1 className="text-3xl font-bold text-purple-700">Create Account with Learnity</h1>
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              name="name"
              placeholder="Name"
              value={signUpData.name}
              onChange={handleSignUpInputChange}
            />
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={handleSignUpInputChange}
            />
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={handleSignUpInputChange}
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
          <form className="h-full flex flex-col justify-center items-center px-10 space-y-4" onSubmit={handleSignInSubmit}>
            <h1 className="text-3xl font-bold text-purple-700">Sign In to Learnity</h1>
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              name="email"
              placeholder="Email"
              value={signInData.email}
              onChange={handleSignInInputChange}
            />
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="password"
              name="password"
              placeholder="Password"
              value={signInData.password}
              onChange={handleSignInInputChange}
            />
              <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </Link>
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Sign In
            </button>
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
              <p className="text-sm mb-4">
                To keep connected with Learnity, please login with your personal info
              </p>
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
              <p className="text-sm mb-4">
                Enter your details to start your journey with Learnity
              </p>
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
