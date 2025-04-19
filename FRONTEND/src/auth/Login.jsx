import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth.api"; // Import API call
import { useAuth } from "../hooks/UseAuth"; // Custom hook for managing auth state
import AuthLayout from "../components/AuthLayout"; // Auth layout component

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // State to store error messages
  const [loading, setLoading] = useState(false); // State to handle loading status

  const { login } = useAuth(); // Get login function from the custom hook
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the login process
    setError(""); // Clear any previous error

    try {
      const { token, user } = await loginUser(formData); // Call login API
      login(user, token); // Save user and token to context or state

      // Redirect based on user role
      if (user.roleId === 1 || user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.roleId === 2 || user.role === "creator") {
        navigate("/creator-dashboard");
      } 
      setError(err.message || "Login failed"); // Show error message
    } finally {
      setLoading(false); // Set loading to false after the process completes
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome Back
      </h2>

      {/* Display error message if any */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
          {error}
        </div>
      )}

      {/* Login form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Sign up link */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginForm;
