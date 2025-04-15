import React, { useEffect, useState } from 'react';

const CourseContentDetails = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // Fetch course data
        const courseRes = await fetch(`/api/courses/${courseId}`);
        if (!courseRes.ok) {
          throw new Error(`Error fetching course: ${courseRes.statusText}`);
        }
        const courseData = await courseRes.json();
        setCourse(courseData);

        // Fetch modules data
        const modulesRes = await fetch(`/api/modules/${courseId}`);
        if (!modulesRes.ok) {
          throw new Error(`Error fetching modules: ${modulesRes.statusText}`);
        }
        const modulesData = await modulesRes.json();
        setModules(modulesData);

      } catch (err) {
        console.error("API Error:", err);
        setError("An error occurred while fetching the data.");
      }
    };

    fetchCourseData();
  }, [courseId]);

  return (
    <div>
      {error && <div className="error">{error}</div>} {/* Show error if any */}
      
      {course && (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      )}

      <div>
        {modules.map((module) => (
          <div key={module.id}>
            <h2>{module.title}</h2>
            <ul>
              {module.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <div>
                    <h3>{lesson.title}</h3>
                    {lesson.video_url ? (
                      <video src={lesson.video_url} controls />
                    ) : (
                      <p>Video Coming Soon</p>  // Fallback message
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentDetails;
