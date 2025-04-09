import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../features/courses/courseService';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = getCourseById(id);
    setCourse(selectedCourse);
  }, [id]);

  if (!course) return <div className="p-6">Course not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <img src={course.thumbnail_url} alt={course.title} className="w-full h-60 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <p className="text-sm text-gray-500 mt-2">Instructor: {course.instructor}</p>
      <p className="text-sm text-gray-500">Duration: {course.duration}</p>
      <p className="text-sm text-gray-500">Level: {course.level}</p>
      <p className="text-lg font-semibold mt-4 text-purple-700">Price: ₹{course.price}</p>
    </div>
  );
};

export default CourseDetail;
