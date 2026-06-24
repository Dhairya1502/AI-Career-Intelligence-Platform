const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");
const resumeRoutes = require("./routes/resumeRoutes");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend Running Successfully",
  });
});

// Protected Route (Testing JWT Middleware)
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});