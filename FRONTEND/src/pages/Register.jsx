import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/register", formData);
      setSuccess("Registered successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm">{error}</div>}
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm">{success}</div>
        )}

        <input
          name="name"
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
        >
          <option value="user">User</option>
          <option value="creator">Creator</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
