// CourseCard.jsx
import React from 'react';
import { Code, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="no-underline text-inherit h-full">
      <div className="bg-white p-6 rounded-2xl border hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full">
        <div>
          {/* Thumbnail (if present) */}
          {course.thumbnail && (
            <img
              src={course.thumbnail}
              alt={course.title}
              className="rounded-lg w-full h-32 object-cover mb-3"
            />
          )}

          {/* Badge & Icon */}
          <div className="flex items-center justify-between mb-4">
            <Code className="text-purple-600" size={24} />
            <span className="text-xs bg-purple-100 text-purple-600 px-3 py-0.5 rounded-full font-medium">
              Popular
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>

          {/* Instructor (if present) */}
          {course.instructor && (
            <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">{course.description}</p>

          {/* Metadata: Level & Duration */}
          <div className="flex items-center text-xs text-gray-500 gap-6 mb-3">
            <div className="flex items-center gap-1">
              <BarChart3 size={14} className="text-purple-500" />
              <span>{course.level || 'Beginner'}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-purple-500" />
              <span>{course.duration || '4h'}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
