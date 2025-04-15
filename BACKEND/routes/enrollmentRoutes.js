const express = require('express');
const { enrollUserInCourse, getEnrolledCourses } = require('../models/Enrollment');
const router = express.Router();

// Enroll user in a course
router.post('/enroll', async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const result = await enrollUserInCourse(userId, courseId);
    res.status(200).json({ msg: 'Enrolled successfully', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.sqlMessage || err.message });
  }
});

// Get enrolled courses for a user
router.get('/my-courses/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const courses = await getEnrolledCourses(userId);
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.sqlMessage || err.message });
  }
});

module.exports = router;
