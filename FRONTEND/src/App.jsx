import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TestQuiz from "./pages/TestQuiz";
import ForgotPassword from "./pages/ForgotPassword";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import CourseContentDetails from "./pages/CourseContentDetails";
import VideoCoursePlayer from "./pages/VideoPlayer";
import SubscriptionPlans from "./components/Subscriptions";
import FreePlans from "./pages/Plans/FreePlans";
import ProPlans from "./pages/Plans/ProPlans";
import Premium from "./pages/Plans/Premium";
import MyCourses from "./pages/MyCourses";

// Auth Pages
import LoginForm from "./auth/Login";
import RegisterForm from "./auth/Register";

// Admin Pages
import AdminLayout from "./Admin/AdminLayout";
import AdminNavbar from "./Admin/Navbar";
import AdminDashboard from "./Admin/AdminDashboard";
import Analytics from "./Admin/Analytics";
import AdminSettings from "./Admin/AdminSettings";
import UserList from "./Admin/UsersList";
import AddCourse from "./Admin/AddCourses";
import CourseFormModal from "./features/courses/CourseFormModal";
import AppRoutes from "./routes/Approutes";

// Nested Role-Based Routing

// Layouts
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

const AdminOnlyLayout = ({ children }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <AdminNavbar />
    <main className="flex-1 px-4 py-6 max-w-7xl mx-auto">{children}</main>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes with shared layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/test-quiz" element={<Layout><TestQuiz /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/courses/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/courses/:id/content" element={<Layout><CourseContentDetails /></Layout>} />
        <Route path="/courses/:id/learn" element={<Layout><VideoCoursePlayer /></Layout>} />
        <Route path="/subscriptions" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans" element={<Layout><SubscriptionPlans /></Layout>} />
        <Route path="/plans/free" element={<Layout><FreePlans /></Layout>} />
        <Route path="/plans/pro" element={<Layout><ProPlans /></Layout>} />
        <Route path="/plans/premium" element={<Layout><Premium /></Layout>} />
        <Route path="/my-courses" element={<Layout><MyCourses /></Layout>} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginLayout><LoginForm /></LoginLayout>} />
        <Route path="/signup" element={<LoginLayout><RegisterForm /></LoginLayout>} />
        <Route path="/forgot-password" element={<LoginLayout><ForgotPassword /></LoginLayout>} />

        {/* Admin Routes with Admin-only layout */}
        <Route path="/admin" element={<AdminOnlyLayout><AdminLayout /></AdminOnlyLayout>} />
        <Route path="/admin/dashboard" element={<AdminOnlyLayout><AdminDashboard /></AdminOnlyLayout>} />
        <Route path="/admin/analytics" element={<AdminOnlyLayout><Analytics /></AdminOnlyLayout>} />
        <Route path="/admin/settings" element={<AdminOnlyLayout><AdminSettings /></AdminOnlyLayout>} />
        <Route path="/admin/users" element={<AdminOnlyLayout><UserList /></AdminOnlyLayout>} />
        <Route path="/admin/course-form-modal" element={<AdminOnlyLayout><CourseFormModal /></AdminOnlyLayout>} />
        <Route path="/admin/add-course" element={<AdminOnlyLayout><AddCourse /></AdminOnlyLayout>} />

        {/* Nested Authenticated Role-based Routing (Student, Creator, etc.) */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
