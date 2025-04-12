import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../features/courses/courseService'; // Assume this returns a Promise

const CoursesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category')?.toLowerCase() || '';
  const search = queryParams.get('search')?.toLowerCase() || '';

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch course data dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses(); // Replace with real API call
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter courses based on search/category
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory
      ? course.category.toLowerCase() === selectedCategory
      : true;

    const matchesSearch = search
      ? course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.instructor.toLowerCase().includes(search)
      : true;

    return matchesCategory && matchesSearch;
  });

  // Group courses by category
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const categoryKeys = Object.keys(groupedCourses);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Courses</h2>

      {loading ? (
        <p className="text-gray-600">Loading courses...</p>
      ) : categoryKeys.length === 0 ? (
        <p className="text-gray-600">No courses found.</p>
      ) : (
        categoryKeys.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-xl font-semibold text-purple-700 mb-3 border-b border-purple-200 pb-1">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {groupedCourses[category].map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CoursesPage;
