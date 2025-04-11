import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import allCourses  from '../features/courses/courseService';


const getCourseById = (id) => {
  return allCourses.find((course) => course.id === Number(id));
};

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  
  useEffect(() => {
    const selectedCourse = getCourseById(id);
    setCourse(selectedCourse);
  }, [id]);

  const getTechnologyImage = (title = '') => {
    const tech = title.toLowerCase();
    if (tech.includes('react'))
      return 'https://images.unsplash.com/photo-1618005198919-d3d4b4b62b6c';
    if (tech.includes('javascript'))
      return 'https://images.unsplash.com/photo-1581091012184-5c7abd4c1001';
    if (tech.includes('python'))
      return 'https://images.unsplash.com/photo-1584697964154-bd4083c52b3b';
    if (tech.includes('node'))
      return 'https://images.unsplash.com/photo-1518770660439-4636190af475';
    if (tech.includes('html') || tech.includes('css'))
      return 'https://images.unsplash.com/photo-1581276879432-15a19d654956';
    return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'; // default
  };

  if (!course) return <div className="p-6 text-center text-gray-500">Course not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-8">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row gap-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-purple-200">
        {/* Left Side - Image */}
        <div className="md:w-1/2 overflow-hidden rounded-xl">
          <img
            src={course.thumbnail_url || getTechnologyImage(course.title)}
            alt={course.title}
            className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 flex flex-col justify-between p-4">
          <div>
            <h1 className="text-4xl font-bold text-purple-700">{course.title}</h1>
            <p className="text-gray-600 mt-3 leading-relaxed">{course.description}</p>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Instructor:</span> {course.instructor}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Duration:</span> {course.duration}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Level:</span> {course.level}
            </p>
            <p className="text-2xl font-bold text-purple-600 mt-4">₹{course.price}</p>

            {/* CTA Button */}
            <Link to={`/courses/${id}/learn`}>
              <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
