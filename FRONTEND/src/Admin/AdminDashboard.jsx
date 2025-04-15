import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  BookOpen,
  BarChart2,
  ChevronRight,
  TrendingUp,
  Bell,
  Mail,
  Calendar,
} from 'lucide-react';
import { mockUsers, mockCourses } from '../data/MockData';
import AdminLayout from './AdminLayout';

function AdminDashboard() {
  const totalStudents = mockUsers.filter((user) => user.role === 'student').length;
  const totalCourses = mockCourses.length;
  const totalRevenue = mockCourses.reduce((sum, course) => sum + course.revenue, 0);
  const activeStudents = mockUsers.filter(
    (user) => user.role === 'student' && user.isActive
  ).length;

  const growthRate = 8.7;
  const completionRate = 76;

  return (
    <AdminLayout>
      <div className="lg:ml-64 md:ml-48 w-full lg:w-[calc(100%-16rem)] md:w-[calc(100%-12rem)] bg-gray-50 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 md:px-6 py-6">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-500 mt-1">
                  Welcome back, Admin! Here's your latest overview.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
                  <Mail size={20} className="text-gray-600" />
                </button>
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                  A
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="space-y-6">
            {/* Stats Overview */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Students */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Users size={20} className="text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    +{growthRate}%
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{totalStudents}</h3>
                <p className="text-sm text-gray-500 mt-1">Total Students</p>
              </div>

              {/* Active Students */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Users size={20} className="text-green-600" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {Math.round((activeStudents / totalStudents) * 100)}%
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{activeStudents}</h3>
                <p className="text-sm text-gray-500 mt-1">Active Students</p>
              </div>

              {/* Total Courses */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BookOpen size={20} className="text-purple-600" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {completionRate}% rate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{totalCourses}</h3>
                <p className="text-sm text-gray-500 mt-1">Total Courses</p>
              </div>

              {/* Revenue */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BarChart2 size={20} className="text-blue-600" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    +12.4%
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  ${totalRevenue.toLocaleString()}
                </h3>
                <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
              </div>
            </section>

            {/* Analytics Overview */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Performance Analytics</h2>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Student Enrollment</h3>
                    <p className="text-sm text-gray-500">
                      Showing enrollment trends over time
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                      <span className="text-xs text-gray-500">New Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-xs text-gray-500">Returning Students</span>
                    </div>
                  </div>
                </div>

                <div className="h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                  Analytics chart will appear here
                </div>
              </div>
            </section>

            {/* Tables Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Courses */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Top Courses</h2>
                  <Link
                    to="/admin/courses"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    View all <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="w-full">
                  <div className="grid grid-cols-12 text-xs font-medium text-gray-500 uppercase tracking-wider border-b py-2">
                    <div className="col-span-5 px-2">Course</div>
                    <div className="col-span-2 px-2">Students</div>
                    <div className="col-span-2 px-2">Rating</div>
                    <div className="col-span-3 px-2">Revenue</div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {mockCourses.slice(0, 3).map((course) => (
                      <div
                        key={course.id}
                        className="grid grid-cols-12 py-3 hover:bg-gray-50 transition-colors items-center"
                      >
                        <div className="col-span-5 px-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center mr-2 flex-shrink-0">
                              <BookOpen size={16} className="text-gray-500" />
                            </div>
                            <span className="font-medium text-gray-800 text-sm truncate">
                              {course.title}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 px-2 text-gray-600 text-sm">
                          {course.students}
                        </div>
                        <div className="col-span-2 px-2">
                          <div className="flex items-center">
                            <span
                              className={`text-sm font-medium ${
                                course.rating >= 4.5
                                  ? 'text-green-600'
                                  : 'text-amber-600'
                              }`}
                            >
                              {course.rating}
                            </span>
                            <span className="text-gray-400 text-sm">/5.0</span>
                          </div>
                        </div>
                        <div className="col-span-3 px-2 text-gray-600 text-sm">
                          ${course.revenue.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Users */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Users</h2>
                  <Link
                    to="/admin/users"
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                  >
                    View all <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="space-y-3">
                  {mockUsers.slice(0, 4).map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full">
                          {user.name[0]}
                        </div>
                        <span className="text-gray-800 text-sm">{user.name}</span>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          user.isActive ? 'text-green-600' : 'text-gray-400'
                        }`}
                      >
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
