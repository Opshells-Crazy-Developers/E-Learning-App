// src/pages/Dashboard/CreatorDashboard.jsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const CreatorDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Creator Dashboard</h1>
      <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Welcome, {user?.firstName}!</h2>
        <p className="mb-4">Manage your courses and track student progress here.</p>
        
        <div className="flex gap-4 mt-6">
          <Link 
            to="/creator/courses/create" 
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Create New Course
          </Link>
          
          <Link 
            to="/creator/courses" 
            className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50"
          >
            Manage Courses
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Course Statistics</h3>
            <p className="text-gray-600">You haven't created any courses yet.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Student Engagement</h3>
            <p className="text-gray-600">Create your first course to see student statistics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;