import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  // Mock data for dashboard content
  const upcomingClasses = [
    { id: 1, title: "Advanced React Patterns", time: "Today, 2:00 PM", instructor: "David Miller", attendees: 24 },
    { id: 2, title: "UI/UX Design Workshop", time: "Tomorrow, 10:00 AM", instructor: "Sarah Johnson", attendees: 18 },
    { id: 3, title: "Node.js Performance", time: "Apr 12, 3:30 PM", instructor: "Michael Chen", attendees: 12 }
  ];
  
  const progressStats = [
    { id: 1, label: "Courses Completed", value: 7, icon: "📚", color: "bg-green-100 text-green-800" },
    { id: 2, label: "Hours Learned", value: 48, icon: "⏱️", color: "bg-blue-100 text-blue-800" },
    { id: 3, label: "Certificates", value: 3, icon: "🏆", color: "bg-purple-100 text-purple-800" },
    { id: 4, label: "Current Streak", value: "5 days", icon: "🔥", color: "bg-amber-100 text-amber-800" }
  ];
  
  const recentCourses = [
    { 
      id: 1, 
      title: "React Fundamentals", 
      progress: 80,
      image: "/api/placeholder/400/320",
      category: "Frontend Development"
    },
    { 
      id: 2, 
      title: "UI/UX Design Principles", 
      progress: 45,
      image: "/api/placeholder/400/320",
      category: "Design"
    },
    { 
      id: 3, 
      title: "Node.js & Express", 
      progress: 60,
      image: "/api/placeholder/400/320",
      category: "Backend Development"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Right Section */}
      <div className="flex flex-col flex-1 ml-64 p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back! Continue your learning journey</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <svg 
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="relative">
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">3</span>
            </div>
            
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
              />
              <div className="hidden md:block">
                <p className="font-medium text-sm">Alex Johnson</p>
                <p className="text-xs text-gray-500">Pro Member</p>
              </div>
              <svg 
                className="w-5 h-5 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Weekly Learning Goal */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Weekly Goal</h2>
              <span className="text-sm text-purple-600 font-medium">5 days streak 🔥</span>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">6h 30m / 10h</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Continue Learning
              </button>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                Update Goal
              </button>
            </div>
          </div>
          
          {/* Upcoming Live Classes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Upcoming Live Classes</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              {upcomingClasses.map(classItem => (
                <div key={classItem.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-purple-100 text-purple-700 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">{classItem.title}</h3>
                      <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {classItem.time}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {classItem.instructor}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {classItem.attendees} attendees
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {progressStats.map(stat => (
            <div key={stat.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className={`p-3 rounded-xl mr-4 ${stat.color}`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <h3 className="text-xl font-bold">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Continue Learning Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Continue Learning</h2>
            <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
              View All Courses
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-md mb-2">
                    {course.category}
                  </span>
                  <h3 className="font-bold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                    <div 
                      className="bg-purple-600 h-1.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recommended Path & Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Path */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Your Learning Path</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                View Details
              </button>
            </div>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-6 relative">
                <div className="ml-10 relative">
                  <div className="absolute -left-10 mt-1.5 rounded-full w-6 h-6 bg-green-500 border-4 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium">HTML & CSS Fundamentals</h3>
                  <p className="text-sm text-gray-500">Completed on March 15, 2025</p>
                </div>
                
                <div className="ml-10 relative">
                  <div className="absolute -left-10 mt-1.5 rounded-full w-6 h-6 bg-green-500 border-4 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium">JavaScript Basics</h3>
                  <p className="text-sm text-gray-500">Completed on March 28, 2025</p>
                </div>
                
                <div className="ml-10 relative">
                  <div className="absolute -left-10 mt-1.5 rounded-full w-6 h-6 bg-purple-600 border-4 border-white flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <h3 className="font-medium">React Fundamentals</h3>
                  <p className="text-sm text-gray-500">In progress - 80% completed</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div className="ml-10 relative opacity-50">
                  <div className="absolute -left-10 mt-1.5 rounded-full w-6 h-6 bg-gray-300 border-4 border-white"></div>
                  <h3 className="font-medium">Node.js & Express</h3>
                  <p className="text-sm text-gray-500">Upcoming</p>
                </div>
                
                <div className="ml-10 relative opacity-50">
                  <div className="absolute -left-10 mt-1.5 rounded-full w-6 h-6 bg-gray-300 border-4 border-white"></div>
                  <h3 className="font-medium">Full Stack Project</h3>
                  <p className="text-sm text-gray-500">Upcoming</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Community</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://i.pravatar.cc/32?img=1" alt="User" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Sarah posted in React Forum</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Has anyone implemented context API with custom hooks? Looking for best practices..."
                </p>
              </div>
              
              <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://i.pravatar.cc/32?img=2" alt="User" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">New study group formed</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Advanced React Patterns study group starts next week. 5 spots left!"
                </p>
                <button className="mt-2 text-sm text-purple-600 font-medium">
                  Join Group
                </button>
              </div>
              
              <div className="p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://i.pravatar.cc/32?img=3" alt="User" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Michael shared a resource</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Found this amazing cheatsheet for CSS Grid. Super helpful!"
                </p>
                <button className="mt-2 text-sm text-purple-600 font-medium">
                  View Resource
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Children content if needed */}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;