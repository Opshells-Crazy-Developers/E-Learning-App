const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const roleMap = { user: 1, creator: 2 };
  const role_id = roleMap[role] || 1;

  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if user already exists
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length > 0) return res.status(400).json({ error: "Email already registered" });

    // Register new user
    db.query(
      "INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role_id],
      (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT u.*, r.name AS role_name FROM users u JOIN roles r ON u.role_id = r.role_id WHERE u.email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: "User not found" });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { user_id: user.id, role_id: user.role_id },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_id: user.role_id,
        role_name: user.role_name,
      },
    });
  });
};

module.exports = { register, login };
