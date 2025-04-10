// At the top of your file
import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Correctly placed here
import Sidebar from "../components/Sidebar";

export default function CoursesDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 100,
      status: "completed",
      instructor: "Sarah Johnson",
      duration: "8 hours",
      category: "Frontend",
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "Node.js & Express Masterclass",
      progress: 45,
      status: "in-progress",
      instructor: "Michael Chen",
      duration: "12 hours",
      category: "Backend",
      lastAccessed: "Today",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 80,
      status: "in-progress",
      instructor: "Emma Rodriguez",
      duration: "10 hours",
      category: "Design",
      lastAccessed: "Yesterday",
    },
    {
      id: 4,
      title: "MongoDB Database Design",
      progress: 100,
      status: "completed",
      instructor: "David Kim",
      duration: "6 hours",
      category: "Database",
      lastAccessed: "1 week ago",
    },
  ];

  const filteredCourses = courses
    .filter((course) => {
      if (activeTab === "all") return true;
      if (activeTab === "in-progress") return course.status === "in-progress";
      if (activeTab === "completed") return course.status === "completed";
      return true;
    })
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "progress-high":
        return b.progress - a.progress;
      case "progress-low":
        return a.progress - b.progress;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const getProgressColor = (progress) => {
    if (progress === 100) return "bg-emerald-500";
    if (progress >= 70) return "bg-purple-600";
    if (progress >= 30) return "bg-amber-500";
    return "bg-rose-500";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
    <div className="w-64">
      <Sidebar />
    </div>
    <div className="flex-1 p-6 lg:p-10 overflow-x-hidden">
  
    <div className="flex justify-between items-center mb-8">
  <h1 className="text-2xl font-bold text-gray-800">My Learning Journey</h1>
  <Link to="/courses">
    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
      <svg
        className="h-5 w-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
      Explore Courses
    </button>
  </Link>
</div>


        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Total Courses</p>
            <p className="text-2xl font-bold mt-1">{courses.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">In Progress</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">
              {courses.filter((c) => c.status === "in-progress").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {courses.filter((c) => c.status === "completed").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Avg. Progress</p>
            <div className="flex items-center mt-1">
              <span className="text-2xl font-bold text-purple-600">
                {Math.round(
                  courses.reduce((acc, c) => acc + c.progress, 0) /
                    courses.length
                )}
                %
              </span>
              <div className="w-full h-2 bg-gray-200 ml-3 rounded">
                <div
                  className="h-full rounded bg-purple-600"
                  style={{
                    width: `${Math.round(
                      courses.reduce((acc, c) => acc + c.progress, 0) /
                        courses.length
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Filters */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex border-b border-gray-200">
            {["all", "in-progress", "completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mr-6 py-2 font-medium text-sm border-b-2 transition ${
                  activeTab === tab
                    ? "text-purple-600 border-purple-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab === "all"
                  ? "All Courses"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex space-x-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-60 text-sm focus:ring-purple-500 focus:border-purple-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="default">Default</option>
              <option value="progress-high">Progress (High to Low)</option>
              <option value="progress-low">Progress (Low to High)</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
            </select>
          </div>
        </div>

        {/* Course Cards */}
        {sortedCourses.length === 0 ? (
          <div className="text-center text-gray-500 py-10 bg-white rounded-md shadow">
            No courses found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-5 rounded-md shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {course.instructor} · {course.duration}
                </p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1 text-gray-500">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-full rounded-full ${getProgressColor(
                        course.progress
                      )}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
