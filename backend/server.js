const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/brilliantminds", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Import routes
const contactRoutes = require("./routes/contact")
const donationRoutes = require("./routes/donations")
const newsRoutes = require("./routes/news")
const adminRoutes = require("./routes/admin")

// Use routes
app.use("/api/contact", contactRoutes)
app.use("/api/donations", donationRoutes)
app.use("/api/news", newsRoutes)
app.use("/api/admin", adminRoutes)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "BrilliantMinds API is running",
    timestamp: new Date().toISOString(),
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : "Internal server error",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`)
})

module.exports = app
