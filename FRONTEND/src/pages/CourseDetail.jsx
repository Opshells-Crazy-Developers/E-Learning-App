import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourses } from "../features/courses/courseService";
import { Award, BookOpen, CheckCircle, Clock, Globe, PlayCircle, Star,  Users } from "lucide-react";

// Fetch course by ID from the course data
const getCourseById = async (id) => {
  try {
    const courses = await getCourses();
    const courseId = parseInt(id, 10);
    return courses.find(course => course.id === courseId) || null;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courses = await getCourses();
        const selectedCourse = courses.find((c) => c.id.toString() === id);
        setCourse(selectedCourse);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading course...</div>;
  }

  if (!course) {
    return <div className="text-center mt-20 text-xl">Course not found.</div>;
  }
  const handleEnroll = async () => {
    try {
      // Example: Replace '1' with dynamic user ID based on authentication context
      const user_id = 1; // Example static value; replace with actual user context
      const res = await axios.post("http://localhost:5000/api/enrollments/enroll", {
        user_id: 1,
        course_id: course.id,
      });
      
      
      console.log("Enrollment response:", res);
      alert("Enrolled Successfully!");
    } catch (err) {
      console.error("Enrollment error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };
  
  
  // Function to return a default image if no thumbnail is available
  const getCourseImage = (course) => {
    return course?.thumbnail_url || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80";
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }
  

  // If course is not found, show an error message
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the course you're looking for. Please check the URL or try again later.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Course Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-700">{course.rating} ({course.ratingCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="ml-1 text-gray-700">{course.learners.toLocaleString()}+ students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <span className="ml-1 text-gray-700">{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Instructor"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                  <p className="text-sm text-gray-500">Expert {course.category} Instructor</p>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="relative aspect-video mb-6">
                <img
                  src={getCourseImage(course)}
                  alt={`${course.title} Preview`}
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-purple-600 text-white rounded-full p-4 hover:bg-purple-700 transition-colors">
                    <PlayCircle className="h-8 w-8" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-600">{course.duration} of content</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-600">
                      {course.modules?.reduce((acc, module) => acc + module.lessons.length, 0) || 0} lessons
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-600">English</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-600">Certificate of completion</span>
                  </div>
                </div>
                <button
  onClick={handleEnroll} // Wire the function here
  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
>
  Enroll Now
</button>

                <p className="text-sm text-gray-500 text-center">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Generate some learning outcomes based on the course title/description */}
                {[
                  `Master ${course.title} fundamentals`,
                  `Apply ${course.category} skills to real projects`,
                  'Build professional applications',
                  'Understand key concepts and principles',
                  'Follow industry best practices',
                  'Solve common problems efficiently',
                  'Develop critical thinking skills',
                  'Learn from practical examples'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content */}
            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.modules && course.modules.map((module, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {module.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {module.lessons.length} lessons • {module.lessons.reduce((acc, lesson) => {
                            const [min, sec] = lesson.duration.split(':');
                            return acc + parseInt(min) + parseInt(sec) / 60;
                          }, 0).toFixed(1)} hours
                        </p>
                      </div>
                      <PlayCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Lessons:</p>
                      <div className="mt-1 space-y-2">
                        {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{lesson.title}</span>
                            <span className="text-xs text-gray-500">{lesson.duration}</span>
                          </div>
                        ))}
                        {module.lessons.length > 3 && (
                          <p className="text-sm text-purple-600">+ {module.lessons.length - 3} more lessons</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Overview</h3>
              <div className="prose text-gray-600">
                <p>This comprehensive {course.level.toLowerCase()} level course covers everything you need to know about {course.title}:</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  {course.modules?.map((module, idx) => (
                    <li key={idx}>{module.title.replace(/Module \d+: /, '')}</li>
                  ))}
                </ul>
              </div>
            </div>

            {course.notes && course.notes.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
                <ul className="space-y-3 text-gray-600">
                  {course.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <p className="font-medium">{note.title}</p>
                        <p className="text-sm">{note.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Basic understanding of {course.category}</li>
                <li>• Familiarity with development concepts</li>
                <li>• A computer with required software installed</li>
                <li>• Basic command line knowledge</li>
                <li>• No advanced math required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;