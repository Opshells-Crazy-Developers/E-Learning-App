// pages/CoursesPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { allCourses } from '../features/courses/courseService';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const category = queryParams.get('category')?.toLowerCase() || '';
  const search = queryParams.get('search')?.toLowerCase() || '';

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = category ? course.category.toLowerCase() === category : true;
    const matchesSearch = search
      ? course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.instructor.toLowerCase().includes(search)
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Courses</h2>
      {filteredCourses.length === 0 ? (
        <p className="text-gray-600">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
