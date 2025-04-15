// models/course.js
const db = require('../server'); // Import db from server.js

// Add a course to the database
const addCourse = (title, description, imageUrl) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO courses (title, description, imageUrl) VALUES (?, ?, ?)';
    db.query(query, [title, description, imageUrl], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Get all courses
const getCourses = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// Enroll user in a course (you can add user and course relationship table later)
const enrollUserInCourse = (userId, courseId) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO course_enrollments (user_id, course_id) VALUES (?, ?)';
    db.query(query, [userId, courseId], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  addCourse,
  getCourses,
  enrollUserInCourse
};
