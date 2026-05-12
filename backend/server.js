require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/auth");
const leadsRoutes = require("./routes/leads");
const blogsRoutes = require("./routes/blogs");
const eligibilityRoutes = require("./routes/eligibility");
const serviceLeadsRoutes = require("./routes/serviceLeads");

const app = express();

// Connect to MongoDB
connectDB();

// Security Middleware - Helmet (sets various HTTP headers for security)
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false,
}));

// Rate limiting - Prevent brute force and DDoS attacks
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { message: "Too many requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limit for form submissions
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // Limit each IP to 20 form submissions per hour
  message: { message: "Too many submissions, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply general rate limiting to all requests
app.use(generalLimiter);

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://captonvisapoint.vercel.app",
      "https://www.captonvisapoint.com"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.options("*", cors());

// Body parsing with size limits to prevent large payload attacks
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Capton Visa Point API is running!" });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogsRoutes);

// Apply stricter rate limiting only to form submission (POST) routes
// Admin GET requests must not be throttled by the form limiter
const postOnlyFormLimiter = (req, res, next) => {
  if (req.method === "POST") return formLimiter(req, res, next);
  return next();
};

app.use("/api/leads", postOnlyFormLimiter, leadsRoutes);
app.use("/api/eligibility", postOnlyFormLimiter, eligibilityRoutes);
app.use("/api/service-leads", postOnlyFormLimiter, serviceLeadsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  // Handle Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
  }
  if (err.message && err.message.includes('Invalid file type')) {
    return res.status(400).json({ message: err.message });
  }

  res.status(500).json({ message: "Internal server error" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
});
