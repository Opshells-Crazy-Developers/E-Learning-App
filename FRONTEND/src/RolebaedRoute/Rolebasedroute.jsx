import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';

const RoleBasedRoute = ({ element, allowedRoles }) => {
  const { user, isAuthenticated, loading } = useAuth();
  
  // Show loading spinner while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // If user role is not allowed, redirect to dashboard
  if (!allowedRoles.includes(user.role)) {
    // Redirect based on role
    if (user.role === 'student') {
      return <Navigate to="/dashboard" />;
    } else if (user.role === 'creator') {
      return <Navigate to="/creator/dashboard" />;
    } else if (user.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/dashboard" />;
    }
  }
  
  // If role is allowed, render the component
  return element;
};

export default RoleBasedRoute;