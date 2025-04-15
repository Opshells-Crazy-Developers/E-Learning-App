const express = require('express');
const db = require('../config/db'); // Assuming db connection is exported from db.js
const router = express.Router();

const enrollUserInCourse = (userId, courseId) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)';
    db.query(query, [userId, courseId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// GET enrolled courses for a specific user
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const [rows] = await db.query(`
        SELECT c.* FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE e.user_id = ?
      `, [userId]);
  
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch enrolled courses' });
    }
  });
  

const getEnrolledCourses = (userId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT c.* FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE e.user_id = ?
    `;
    db.query(query, [userId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = { enrollUserInCourse, getEnrolledCourses };
