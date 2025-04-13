// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, BarChart2, ChevronRight } from 'lucide-react';
import StatCard from '../components/Analytics/StatCard';
import { mockUsers, mockCourses } from '../data/MockData';
import AdminLayout from '../Admin/AdminLayout';

function AdminDashboard() {
  const totalStudents = mockUsers.filter(user => user.role === 'student').length;
  const totalCourses = mockCourses.length;
  const totalRevenue = mockCourses.reduce((sum, course) => sum + course.revenue, 0);
  
  const statCards = [
    { title: 'Total Students', value: totalStudents, icon: <Users className="text-purple-500" /> },
    { title: 'Total Courses', value: totalCourses, icon: <BookOpen className="text-green-500" /> },
    { title: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: <BarChart2 className="text-purple-500" /> },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((card, index) => (
          <StatCard key={index} title={card.title} value={card.value} icon={card.icon} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-700">Popular Courses</h3>
            <Link to="/admin/courses" className="text-indigo-600 hover:underline flex items-center">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                </tr>
              </thead>
              <tbody>
                {mockCourses.slice(0, 3).map((course) => (
                  <tr key={course.id} className="border-b">
                    <td className="py-3 text-sm">{course.title}</td>
                    <td className="py-3 text-sm">{course.students}</td>
                    <td className="py-3 text-sm">{course.rating}/5.0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-700">Recent Users</h3>
            <Link to="/admin/users" className="text-indigo-600 hover:underline flex items-center">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.slice(0, 3).map((user) => (
                  <tr key={user.id} className="border-b">
                    <td className="py-3 text-sm">{user.name}</td>
                    <td className="py-3 text-sm capitalize">{user.role}</td>
                    <td className="py-3 text-sm">{user.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;