import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../features/courses/courseService';

const VideoPlayer = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const selectedCourse = await getCourseById(id); // await here if async
        console.log('Fetched course:', selectedCourse);
        setCourse(selectedCourse);

        if (
          selectedCourse &&
          selectedCourse.modules &&
          selectedCourse.modules.length > 0 &&
          selectedCourse.modules[0].lessons.length > 0
        ) {
          setCurrentLesson(selectedCourse.modules[0].lessons[0]);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course)
    return (
      <div className="p-6 text-center text-gray-500 text-lg">Loading course...</div>
    );

  if (!currentLesson)
    return (
      <div className="p-6 text-center text-gray-500 text-lg">
        No lessons found for this course.
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Sidebar Playlist */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-xl shadow-md overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4 text-purple-700">Course Playlist</h2>
        {course.modules.map((mod, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold text-gray-700">{mod.title}</h3>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              {mod.lessons.map((lesson, j) => (
                <li
                  key={j}
                  className={`cursor-pointer text-sm ${
                    lesson.title === currentLesson.title
                      ? 'text-purple-700 font-semibold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                  onClick={() => setCurrentLesson(lesson)}
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Video Player */}
      <div className="w-full md:w-2/3 bg-white p-4 rounded-xl shadow-lg">
        <div className="w-full h-72 md:h-96 mb-4">
          <iframe
            src={currentLesson.video_url}
            title={currentLesson.title}
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {currentLesson.title}
        </h2>
        <p className="text-gray-600">{currentLesson.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
