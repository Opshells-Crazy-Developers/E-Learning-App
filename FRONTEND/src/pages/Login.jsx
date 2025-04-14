import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import firebaseAuthService from '../firebase/Auth'; // Adjust path as needed

const Login = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [error, setError] = useState('');

  const signUpNameRef = useRef(null);
  const signUpEmailRef = useRef(null);
  const signUpPasswordRef = useRef(null);

  const signInEmailRef = useRef(null);
  const signInPasswordRef = useRef(null);

  const { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } = firebaseAuthService;

  const handleTogglePanel = () => {
    setRightPanelActive(!isRightPanelActive);
    setError('');
  };

  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Clear inputs when switching panels
    setSignUpData({ name: '', email: '', password: '' });
    setSignInData({ email: '', password: '' });
  }, [isRightPanelActive]);

 // In Login.js, update the handleSignUpSubmit function
const handleSignUpSubmit = async (e) => {
  e.preventDefault();
  setError('');
  const { name, email, password } = signUpData;

  if (!name || !email || !password) {
    setError('Please fill all the fields');
    toast.error('Please fill all the fields');
    return;
  }

  try {
    // Create the user
    const userCredential = await doCreateUserWithEmailAndPassword(email, password);
    
    // Update the user profile with the name
    await userCredential.user.updateProfile({
      displayName: name
    });
    
    toast.success('Signup successful!');
    setSignUpData({ name: '', email: '', password: '' });
    setTimeout(() => (window.location.href = '/'), 2000);
  } catch (err) {
    console.error('Signup Error:', err.message);
    toast.error(err.message || 'Signup failed');
  }


    try {
      await doCreateUserWithEmailAndPassword(email, password);
      toast.success('Signup successful!');
      setSignUpData({ name: '', email: '', password: '' });
      setTimeout(() => (window.location.href = '/'), 2000);
    } catch (err) {
      console.error('Signup Error:', err.message);
      toast.error(err.message || 'Signup failed');
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { email, password } = signInData;

    if (!email || !password) {
      setError('Please fill all the fields');
      toast.error('Please fill all the fields');
      return;
    }

    try {
      await doSignInWithEmailAndPassword(email, password);
      toast.success('Sign in successful!');
      setSignInData({ email: '', password: '' });
      setTimeout(() => (window.location.href = '/'), 2000);
    } catch (err) {
      console.error('Signin Error:', err.message);
      toast.error(err.message || 'Sign in failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 px-4 flex flex-col items-center justify-center">
      <ToastContainer />
      <div className="relative w-full max-w-4xl h-[600px] bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-700">
        {error && (
          <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center p-2 z-50">
            {error}
          </div>
        )}

        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-700 bg-white z-10 ${isRightPanelActive ? 'translate-x-full opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <form onSubmit={handleSignUpSubmit} className="h-full flex flex-col justify-center items-center px-10 space-y-4">
            <h1 className="text-3xl font-bold text-purple-700">Create Account with Learnity</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={signUpNameRef}
              value={signUpData.name}
              onChange={handleInputChange(setSignUpData)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={signUpEmailRef}
              value={signUpData.email}
              onChange={handleInputChange(setSignUpData)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative w-full">
              <input
                type={showSignUpPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={signUpData.password}
                ref={signUpPasswordRef}
                onChange={handleInputChange(setSignUpData)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showSignUpPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 h-full w-1/2 transition-all duration-700 bg-white ${isRightPanelActive ? 'translate-x-full opacity-0 z-10' : 'opacity-100 z-20'}`}>
          <form onSubmit={handleSignInSubmit} className="h-full flex flex-col justify-center items-center px-10 space-y-4">
            <h1 className="text-3xl font-bold text-purple-700">Sign In to Learnity</h1>
            <input
              type="email"
              name="email"
              ref={signInEmailRef}
              placeholder="Email"
              value={signInData.email}
              onChange={handleInputChange(setSignInData)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative w-full">
              <input
                type={showSignInPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                ref={signInPasswordRef}
                value={signInData.password}
                onChange={handleInputChange(setSignInData)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                onClick={() => setShowSignInPassword(!showSignInPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showSignInPassword ? <Visibility /> : <VisibilityOff />}
              </span>
            </div>
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
              Don’t have an account?{' '}
              <button
                type="button"
                onClick={handleTogglePanel}
                className="text-purple-700 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>

        {/* Overlay Panel */}
        <div className={`absolute top-0 left-1/2 h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-400 transition-transform duration-700 z-30 flex flex-col items-center justify-center text-white px-8 text-center ${isRightPanelActive ? '-translate-x-full' : ''}`}>
          {isRightPanelActive ? (
            <>
              <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-sm mb-4">To stay connected with Learnity, please login with your personal info</p>
              <button
                onClick={handleTogglePanel}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-600 transition"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-2">Hello!</h1>
              <p className="text-sm mb-4">Enter your details and start your journey with Learnity</p>
              <button
                onClick={handleTogglePanel}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-600 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
