const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app and MySQL connection
const app = express();

// CORS middleware should be added before routes
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Change to your DB username
  password: 'Pranav@1402', // Change to your DB password
  database: 'elearning_app' // Change to your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
});

// Sign Up API (POST)
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error in signing up user', error: err });
      }
      res.status(201).json({ message: 'User signed up successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Error in hashing password', error: err });
  }
});

// Add a profile update route
app.put('/api/profile', async (req, res) => {
  const { userId, name, email, address, city, state, zipCode, country } = req.body;

  try {
    const query = `
      UPDATE users
      SET name = ?, email = ?, address = ?, city = ?, state = ?, zip_code = ?, country = ?, updated_at = NOW()
      WHERE id = ?;
    `;
    const values = [name, email, address, city, state, zipCode, country, userId];
    const [result] = await pool.execute(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
});


// Sign In API (POST)
app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;

  // Get user by email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error in fetching user', error: err });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password with the hashed password in the DB
    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User signed in successfully', user });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
