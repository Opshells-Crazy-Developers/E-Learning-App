import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

const StudentDashboard = ({ children }) => {
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([]); // State to store courses data
  const [loading, setLoading] = useState(true); // State for loading state

  // Fetch courses data dynamically (replace the URL with your actual API endpoint)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = 1; // Get this dynamically based on authenticated user (JWT token, user context, etc.)
        const response = await axios.get(`http://localhost:5000/api/courses?user_id=${userId}`);
        setCourses(response.data); // Set courses from the API
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Compute stats dynamically based on the courses data
  const totalCourses = courses.length;
  const completedCourses = courses.filter(course => course.progress === 100).length;
  const totalHours = courses.reduce((acc, course) => acc + course.hoursSpent, 0); // Assuming each course has `hoursSpent` data
  const certificatesEarned = courses.filter(course => course.certified).length; // Assuming each course has a `certified` flag

  const stats = [
    { label: "Courses", value: totalCourses },
    { label: "Completed", value: completedCourses },
    { label: "Hours", value: totalHours },
    { label: "Certificates", value: certificatesEarned },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-64 p-6">
        {/* Topbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-purple-700">My Learning Dashboard</h1>
            <p className="text-gray-500 mt-1">Track your progress and continue learning</p>
          </div>

          <div className="flex items-center gap-4">
         

            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-purple-700">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("courses")}
              className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "courses"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab("recommended")}
              className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "recommended"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Recommended
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`py-2 px-1 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "achievements"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-6">
          {/* My Courses Tab */}
          {activeTab === "courses" && (
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Continue Learning</h2>
                <Link
                  to="/courses"
                  className="text-purple-600 text-sm font-medium hover:text-purple-800"
                >
                  View All
                </Link>
              </div>

              {/* If courses are loading, show a loading indicator */}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div
                            className={`h-2 rounded-full ${
                              course.progress === 100 ? "bg-green-500" : "bg-purple-600"
                            }`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                          <span>
                            {course.lessonsCompleted} of {course.lessons} lessons
                          </span>
                          <span>Last: {course.lastAccessed}</span>
                        </div>

                        <Link to={`/courses/${course.id}/learn`}>
                          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors text-sm font-medium">
                            {course.progress === 100
                              ? "Review Course"
                              : "Continue Learning"}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Recommended Tab */}
          {activeTab === "recommended" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-purple-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h2 className="text-xl font-semibold mb-2">Recommended Courses</h2>
              <p className="text-gray-500 mb-6">
                We're preparing personalized recommendations for you
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full font-semibold">
                See More
              </button>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              <p className="text-gray-500">
                Keep up the great work! Achievements will appear here as you progress.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
