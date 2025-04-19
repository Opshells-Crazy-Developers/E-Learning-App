const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2/promise");
const con = require("../config/db"); // Centralized DB config

// Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if the user already exists
    const [existingUser] = await con.query("SELECT * FROM users WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Ensure role is provided
    if (!role) {
      return res.status(400).json({ success: false, message: "Role is required" });
    }

    // Lookup the role_id based on the role
    const [roleResult] = await con.query("SELECT id FROM roles WHERE name = ?", [role]);

    if (roleResult.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const roleId = roleResult[0].id;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const [result] = await con.query(
      "INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, roleId]
    );

    // Create JWT token for user session
    const token = jwt.sign({ userId: result.insertId, email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ success: true, message: "User registered", token });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};
// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const [user] = await con.query("SELECT * FROM users WHERE email = ?", [email]);

    if (user.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Compare password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Create JWT token for user session
    const token = jwt.sign(
      { userId: user[0].id, email: user[0].email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user[0].id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        role: user[0].role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
