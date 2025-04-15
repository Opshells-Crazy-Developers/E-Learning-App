const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

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

// --- Serve Static Videos ---
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// --- APIs ---

// Sign Up
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err) => {
      if (err) return res.status(500).json({ message: 'Error in signing up', error: err });
      res.status(201).json({ message: 'User signed up successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Password hashing failed', error: err });
  }
});

// Sign In
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, result) => {
    if (err) return res.status(500).json({ message: 'Login error', error: err });

    if (result.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    res.status(200).json({ message: 'Login successful', user });
  });
});

// Profile Update
app.put('/api/profile', (req, res) => {
  const { userId, name, email, address, city, state, zipCode, country } = req.body;

  const query = `
    UPDATE users SET name = ?, email = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ?, updated_at = NOW()
    WHERE id = ?;
  `;
  db.query(query, [name, email, address, city, state, zipCode, country, userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Profile update failed', error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'Profile updated successfully' });
  });
});

// Get All Videos (MySQL)
app.get('/api/videos', (req, res) => {
  const query = 'SELECT * FROM videos';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch videos', error: err });
    res.json(results);
  });
});

// Insert sample videos (MySQL)
app.get('/api/insert-sample-videos', (req, res) => {
  const videos = [
    ['React Tutorial for Beginners', 'BACKEND/videos/React/M7/t1v1.mp4'],
    ['React Components and Props', 'BACKEND/videos/React/M7/t2v1.mp4'],
    ['React Components and Props (Part 2)', 'BACKEND/videos/React/M7/t2v2.mp4'],
    ['React State and Lifecycle', 'BACKEND/videos/React/M7/t3v1.mp4'],
    ['React State and Lifecycle (Part 2)', 'BACKEND/videos/React/M7/t3v2.mp4'],
    ['Handling Events in React', 'BACKEND/videos/React/M7/t4v1.mp4'],
    ['Handling Events in React (Part 2)', 'BACKEND/videos/React/M7/t4v2.mp4'],
    ['Handling Events in React (Part 3)', 'BACKEND/videos/React/M7/t4v3.mp4'],
    ['Conditional Rendering in React', 'BACKEND/videos/React/M7/t5v1.mp4'],
    ['Conditional Rendering in React (Part 2)', 'BACKEND/videos/React/M7/t5v2.mp4'],
    ['Lists and Keys in React', 'BACKEND/videos/React/M7/t6v1.mp4'],
    ['Lists and Keys in React (Part 2)', 'BACKEND/videos/React/M7/t6v2.mp4'],
    ['Forms in React', 'BACKEND/videos/React/M7/t7v1.mp4'],
    ['Forms in React (Part 2)', 'BACKEND/videos/React/M7/t7v2.mp4'],
    ['Lifting State Up in React', 'BACKEND/videos/React/M7/t8v1.mp4'],
    ['Composition vs Inheritance in React', 'BACKEND/videos/React/M7/t9v1.mp4'],
    ['Thinking in React', 'BACKEND/videos/React/M7/t10v1.mp4'],
    ['Thinking in React (Part 2)', 'BACKEND/videos/React/M7/t10v2.mp4']
  ];

  const query = 'INSERT INTO videos (title, path) VALUES ?';

  // Insert the videos into the MySQL database
  db.query(query, [videos], (err, result) => {
    if (err) {
      console.error('Error inserting videos:', err);
      return res.status(500).json({ message: 'Failed to insert videos', error: err });
    }

    console.log('Videos inserted successfully');
    res.send('Sample videos inserted');
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
