// routes/courseRoutes.js
const express = require('express');
const { addCourse, getCourses, enrollUserInCourse } = require('../models/Course');
const router = express.Router();

// Route to add a course
router.post('/add', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const result = await addCourse(title, description, imageUrl);
    res.status(200).json({ msg: 'Course added successfully', courseId: result.insertId });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

// Route to get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

// Route to enroll user in a course
router.post('/enroll', async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const result = await enrollUserInCourse(userId, courseId);
    res.status(200).json({ msg: 'User enrolled successfully', enrollmentId: result.insertId });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error', error });
  }
});

module.exports = router;
