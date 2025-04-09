import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import SubscriptionPlans from "./components/Subscriptions";
import FreePlans from "./pages/Plans/FreePlans";
import ProPlans from "./pages/Plans/ProPlans";
import Premium from "./pages/Plans/Premium";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="px-4 py-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/subscriptions" element={<SubscriptionPlans />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<SubscriptionPlans />} />
            <Route path="/plans/free" element={<FreePlans />} />
            <Route path="/plans/pro" element={<ProPlans />} />
            <Route path="/plans/premium" element={<Premium />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
