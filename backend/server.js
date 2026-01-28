require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/auth");
const leadsRoutes = require("./routes/leads");
const blogsRoutes = require("./routes/blogs");
const eligibilityRoutes = require("./routes/eligibility");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://capton-visa-point.vercel.app/"],
    credentials: true,
  }),
);
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Capton Visa Point API is running!" });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/eligibility", eligibilityRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
});
