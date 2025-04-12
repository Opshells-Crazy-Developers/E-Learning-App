import React, { useEffect, useState } from 'react';
import { getCourses } from '../features/courses/courseService';
import CourseCard from './CourseCard';  // Import the CourseCard component

const FeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setFeaturedCourses(courses.slice(0, 4)); // Or filter based on a flag like isFeatured: true
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {featuredCourses.map(course => (
        <CourseCard key={course.id} course={course} />  // Use the CourseCard component here
      ))}
    </div>
  );
};

export default FeaturedCourses;
