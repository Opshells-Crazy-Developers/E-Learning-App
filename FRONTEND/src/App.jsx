import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CourseContentDetails from "./pages/CourseContentDetails";
import SubscriptionPlans from "./components/Subscriptions";
import FreePlans from "./pages/Plans/FreePlans";
import ProPlans from "./pages/Plans/ProPlans";
import Premium from "./pages/Plans/Premium";
import MyCourses from "./pages/MyCourses";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

// Layouts
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardLayout from "./pages/Dashboard";
import Settings from "./pages/Settings";
import VideoCoursePlayer from "./pages/VideoPlayer";
import AdminLayout from "./Admin/AdminLayout";
import UserList from "./Admin/UsersList";
import CourseFormModal from "./features/courses/CourseFormModal";
import StatCard from "./components/Analytics/StatCard";
import RevenueReport from "./components/Analytics/RevenueReport";
import AdminDashboard from "./pages/AdminDashboard";
import TestQuiz from "./pages/TestQuiz";

// Layouts for different page categories
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1 px-4 py-6 max-w-7xl mx-auto">{children}</main>
    <Footer />
  </div>
);

const LoginLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <main className="flex-1 px-4 py-6 w-full">{children}</main>
  </div>
);

const DashboardOnly = ({ children }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<LoginLayout><Login /></LoginLayout>} />
        <Route path="/forgot-password" element={<LoginLayout><ForgotPassword /></LoginLayout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/test-quiz" element={<Layout><TestQuiz /></Layout>} />


        {/* Dashboard and settings */}
        <Route path="/dashboard" element={<DashboardOnly><DashboardLayout /></DashboardOnly>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />

        {/* Subscription Plans */}
        <Route path="/subscriptions" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans/*" element={<Layout />}>
          <Route path="free" element={<FreePlans />} />
          <Route path="pro" element={<ProPlans />} />
          <Route path="premium" element={<Premium />} />
        </Route>

        {/* Course Routes */}
        <Route path="/courses/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/courses/:id/content" element={<Layout><CourseContentDetails /></Layout>} />
        <Route path="/courses/:id/learn" element={<Layout><VideoCoursePlayer /></Layout>} />

        {/* My Courses */}
        <Route path="/my-courses" element={<Layout><MyCourses /></Layout>} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<Layout><AdminLayout /></Layout>}>
          <Route path="users-list" element={<UserList />} />
          <Route path="course-form-modal" element={<CourseFormModal />} />
          <Route path="statcard" element={<StatCard />} />
          <Route path="revenue-report" element={<RevenueReport />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
