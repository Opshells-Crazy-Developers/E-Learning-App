import React from 'react';
import { Code, Clock, BarChart3 } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full">
      {/* Top section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <Code className="text-purple-600" size={24} />
          <span className="text-xs bg-purple-100 text-purple-600 px-3 py-0.5 rounded-full font-medium">
            Popular
          </span>
        </div>

        {/* Title and description */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        {/* Additional Info */}
        <div className="flex items-center text-xs text-gray-500 gap-6 mb-3">
          <div className="flex items-center gap-1">
            <BarChart3 size={14} className="text-purple-500" />
            <span>{course.level || 'Beginner'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-purple-500" />
            <span>{course.duration || '4h 30m'}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-start">
        <button className="px-5 py-2 text-sm font-medium bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
