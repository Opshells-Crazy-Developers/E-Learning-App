const mysql = require('mysql2/promise');

const con = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pranav@1402',
  database: 'elearning_app', // Ensure this matches your database name
});

module.exports = con;
