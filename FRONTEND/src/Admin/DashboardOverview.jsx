import React from 'react';

function DashboardOverview() {
  // Sample data for dashboard metrics
  const stats = [
    { id: 1, name: 'Active Courses', value: '42', change: '+12%', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 2, name: 'Total Students', value: '2,540', change: '+5%', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 3, name: 'Course Completion', value: '78%', change: '+3%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 4, name: 'Revenue', value: '$12,430', change: '+18%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  // Recent activities
  const activities = [
    { id: 1, user: 'Mark Wilson', action: 'enrolled in', subject: 'Advanced Machine Learning', time: '5 minutes ago' },
    { id: 2, user: 'Sarah Johnson', action: 'completed', subject: 'Web Development Basics', time: '2 hours ago' },
    { id: 3, user: 'David Lee', action: 'submitted assignment for', subject: 'Data Science Fundamentals', time: '5 hours ago' },
    { id: 4, user: 'Emily Chen', action: 'left a review on', subject: 'Introduction to Python', time: 'Yesterday' },
  ];

  // Pending tasks
  const tasks = [
    { id: 1, title: 'Review new course submissions', category: 'Courses', priority: 'High' },
    { id: 2, title: 'Approve instructor applications', category: 'Instructors', priority: 'Medium' },
    { id: 3, title: 'Resolve student support tickets', category: 'Support', priority: 'High' },
    { id: 4, title: 'Update platform policies', category: 'Admin', priority: 'Low' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Jessica!</h1>
        <p className="text-gray-600">Here's what's happening with your platform today.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="flex items-center text-sm text-green-600">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {stat.change}
                </p>
              </div>
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-5">
            <ul className="divide-y divide-gray-200">
              {activities.map((activity) => (
                <li key={activity.id} className="py-3">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs">
                      {activity.user.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">
                        <span className="font-medium text-gray-900">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action} </span>
                        <span className="font-medium text-indigo-600">{activity.subject}</span>
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <button className="text-sm text-indigo-600 hover:text-indigo-900">View all activity</button>
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Pending Tasks</h3>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">4 tasks</span>
          </div>
          <div className="p-5">
            <ul className="divide-y divide-gray-200">
              {tasks.map((task) => (
                <li key={task.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{task.title}</p>
                        <p className="text-xs text-gray-500">{task.category}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === 'High' ? 'bg-red-100 text-red-800' : 
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <button className="text-sm text-indigo-600 hover:text-indigo-900">View all tasks</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;