const mysql = require("mysql2/promise"); // Use the promise-based version of mysql2
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// MySQL connection setup
const con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export connection for other files (like authController.js)
module.exports = con;

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Import and use auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test database connection
app.get("/test", async (req, res) => {
  try {
    const [rows] = await con.query("SELECT 1");
    res.json({ success: true, result: rows });
  } catch (err) {
    console.error("Test query failed:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
