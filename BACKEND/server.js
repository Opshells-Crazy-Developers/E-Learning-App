const express = require('express');
const mysql = require('mysql2');  // Using mysql2 for better support with promises
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

// --- Middleware ---
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(bodyParser.json());

// --- MySQL DB Setup ---
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pranav@1402',
  database: 'elearning_app'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL database connected');
});

// --- Route to fetch course data ---
app.get('/api/course/:id', (req, res) => {
  const courseId = req.params.id;

  // Fetch course details
  const courseQuery = `SELECT * FROM courses WHERE id = ?`;
  db.query(courseQuery, [courseId], (err, courseResults) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching course details' });
    }

    const course = courseResults[0];

    // Fetch modules for the course
    const modulesQuery = `SELECT * FROM modules WHERE course_id = ?`;
    db.query(modulesQuery, [courseId], (err, modulesResults) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching modules' });
      }

      // Fetch lessons for each module asynchronously
      const modulesWithLessons = modulesResults.map(module => {
        return new Promise((resolve, reject) => {
          const lessonsQuery = `SELECT * FROM lessons WHERE module_id = ?`;
          db.query(lessonsQuery, [module.id], (err, lessonsResults) => {
            if (err) {
              reject('Error fetching lessons');
            }
            module.lessons = lessonsResults;
            resolve(module);
          });
        });
      });

      // Fetch notes for the course
      const notesQuery = `SELECT * FROM notes WHERE course_id = ?`;
      db.query(notesQuery, [courseId], (err, notesResults) => {
        if (err) {
          return res.status(500).json({ message: 'Error fetching notes' });
        }

        // Wait for all lessons data to be fetched
        Promise.all(modulesWithLessons)
          .then(modulesWithLessonsData => {
            res.json({
              ...course,
              modules: modulesWithLessonsData,
              notes: notesResults
            });
          })
          .catch(err => res.status(500).json({ message: err }));
      });
    });
  });
});

// --- Use course and enrollment routes ---
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
