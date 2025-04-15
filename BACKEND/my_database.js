const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Open a database connection
let db = new sqlite3.Database('./my-database.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Example route to fetch video data from the SQLite database
app.get('/videos', (req, res) => {
  const query = 'SELECT * FROM videos';
  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows); // Send back the video data as JSON
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
