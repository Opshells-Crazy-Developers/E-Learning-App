const bcrypt = require('bcryptjs');
const db = require('../config/db'); // MySQL connection

const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainPassword, salt);
};

const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
};

const createUser = async ({ firstName, lastName, email, password, role }) => {
  const hashed = await hashPassword(password);
  const [result] = await db.query(
    'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)',
    [firstName, lastName, email, hashed, role || 'student']
  );
  return result.insertId;
};

module.exports = {
  hashPassword,
  comparePassword,
  findUserByEmail,
  createUser
};
