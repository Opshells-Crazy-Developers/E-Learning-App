import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth.api"; // Import API call
import { useAuth } from "../hooks/UseAuth"; // Custom hook for managing auth state
import AuthLayout from "../components/AuthLayout"; // Auth layout component

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: "", role: "student"
  });
  const [error, setError] = useState(""); // State to store error messages
  const [loading, setLoading] = useState(false); // State to handle loading status

  const { login } = useAuth(); // Get login function from custom hook
  const navigate = useNavigate(); // Hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the registration process
    setError(""); // Clear any previous error

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...userData } = formData; // Exclude confirmPassword from the data
      const { token, user } = await registerUser(userData); // Call register API
      login(user, token); // Save user and token to context or state

      // Redirect based on user role
      navigate(
        user.role === "creator" ? "/creator/dashboard" :
        user.role === "admin" ? "/admin/dashboard" :
        "/student-dashboard" // Default to student dashboard if not creator/admin
      );
    } catch (err) {
      setError(err.message || "Registration failed"); // Show error message
    } finally {
      setLoading(false); // Set loading to false after the process completes
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

      {/* Display error message if any */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">{error}</div>
      )}

      {/* Registration form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="px-3 py-2 border rounded"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded"
        >
          <option value="student">Learn (Student)</option>
          <option value="creator">Teach (Creator)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Creating Account..." : "Sign up"}
        </button>
      </form>

      {/* Login link */}
      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterForm;
