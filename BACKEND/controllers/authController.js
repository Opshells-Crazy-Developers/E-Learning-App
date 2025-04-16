const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); // adjust path as needed

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const roleMap = { user: 1, creator: 2 };
  const role_id = roleMap[role] || 1;

  db.query(
    "INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "User registered successfully" });
    }
  );
};

const login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: "User not found" });

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

    // 👉 Get IP address and user agent for logging
    const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.get("User-Agent");

    // ✅ Insert login log
    db.query(
      "INSERT INTO login_logs (user_id, ip_address, user_agent) VALUES (?, ?, ?)",
      [user.id, ipAddress, userAgent],
      (logErr) => {
        if (logErr) console.error("Failed to log login:", logErr.message);
      }
    );

    const token = jwt.sign(
      { user_id: user.id, role_id: user.role_id },
      "your_jwt_secret_key", // ideally from .env
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
      },
    });
  });
};

module.exports = { register, login };
