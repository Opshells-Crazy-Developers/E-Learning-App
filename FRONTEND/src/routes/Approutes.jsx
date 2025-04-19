import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import LoginForm from '../auth/Login';

// User Dashboard Pages
import StudentDashboard from '../pages/Dashboard/StudentDashboard';
import CreatorDashboard from '../pages/Dashboard/CreatorDashboard';
import CoursesList from '../pages/Courses/CoursesList';
import CourseDetail from '../pages/CourseDetail';
import LessonView from '../pages/Lesson/LessonView';
import Profile from '../pages/Profile/Profile';
// Creator Dashboard Pages
import CourseManagement from '../pages/Creator/CourseManagement';
import CreateCourse from '../pages/Creator/CreateCourse';
// import EditCourse from './pages/Creator/EditCourse';

// Layout components
import MainLayout from '../components/Layout/MainLayout';
import RegisterForm from '../auth/Register';
import RoleBasedRoute from '../RolebaedRoute/Rolebasedroute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<RegisterForm />} />
      
      {/* Student Routes */}
      <Route 
        path="/dashboard" 
        element={
          <RoleBasedRoute
            element={<MainLayout><StudentDashboard /></MainLayout>} 
            allowedRoles={['student', 'creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/courses" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><CoursesList /></MainLayout>} 
            allowedRoles={['student', 'creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/courses/:courseId" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><CourseDetail /></MainLayout>} 
            allowedRoles={['student', 'creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/lessons/:lessonId" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><LessonView /></MainLayout>} 
            allowedRoles={['student', 'creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/profile" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><Profile /></MainLayout>} 
            allowedRoles={['student', 'creator', 'admin']} 
          />
        } 
      />
      
      {/* Creator Routes */}
      <Route 
        path="/creator/dashboard" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><CreatorDashboard /></MainLayout>} 
            allowedRoles={['creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/creator/courses" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><CourseManagement /></MainLayout>} 
            allowedRoles={['creator', 'admin']} 
          />
        } 
      />
      <Route 
        path="/creator/courses/create" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><CreateCourse /></MainLayout>} 
            allowedRoles={['creator', 'admin']} 
          />
        } 
      />
      {/* <Route 
        path="/creator/courses/:courseId/edit" 
        element={
          <RoleBasedRoute 
            element={<MainLayout><EditCourse /></MainLayout>} 
            allowedRoles={['creator', 'admin']} 
          />
        } 
      /> */}
      
      {/* Redirect to dashboard if already logged in */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;