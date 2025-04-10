import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import SubscriptionPlans from "./components/Subscriptions";
import FreePlans from "./pages/Plans/FreePlans";
import ProPlans from "./pages/Plans/ProPlans";
import Premium from "./pages/Plans/Premium";
import VideoPlayer from "./pages/Plans/VideoPlayer";
import MyCourses from "./pages/MyCourses";
import Login from "./pages/Login"
// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardLayout from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/dashboard" element={<DashboardOnly><DashboardLayout /></DashboardOnly>} />
        <Route path="/courses/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/subscriptions" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans/free" element={<Layout><FreePlans /></Layout>} />
        <Route path="/plans/pro" element={<Layout><ProPlans /></Layout>} />
        <Route path="/plans/premium" element={<Layout><Premium /></Layout>} />
        <Route path="/courses/:id/learn" element={<Layout><VideoPlayer /></Layout>} />
        <Route path="/my-courses" element={<Layout><MyCourses /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />

      </Routes>
    </Router>
  );
};

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 px-4 py-6 max-w-7xl mx-auto">{children}</main>
    <Footer />
  </div>
);

const DashboardOnly = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    {/* No Footer here */}
  </div>
);

export default App;
