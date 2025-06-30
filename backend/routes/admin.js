const express = require("express")
const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin")
const News = require("../models/News")
const Contact = require("../models/Contact")
const Donation = require("../models/Donation")
const { body, validationResult } = require("express-validator")
const rateLimit = require("express-rate-limit")

const router = express.Router()

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many login attempts, please try again later.",
  },
})

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access token required",
    })
  }

  jwt.verify(token, process.env.JWT_SECRET || "your-secret-key", (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      })
    }
    req.user = user
    next()
  })
}

// Admin login
router.post(
  "/login",
  loginLimiter,
  [
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const { username, password } = req.body

      // Find admin by username or email
      const admin = await Admin.findOne({
        $or: [{ username }, { email: username }],
        isActive: true,
      })

      if (!admin || !(await admin.comparePassword(password))) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        })
      }

      // Update last login
      admin.lastLogin = new Date()
      await admin.save()

      // Generate JWT token
      const token = jwt.sign(
        {
          id: admin._id,
          username: admin.username,
          role: admin.role,
        },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" },
      )

      res.json({
        success: true,
        message: "Login successful",
        data: {
          token,
          admin: {
            id: admin._id,
            username: admin.username,
            email: admin.email,
            firstName: admin.firstName,
            lastName: admin.lastName,
            role: admin.role,
            lastLogin: admin.lastLogin,
          },
        },
      })
    } catch (error) {
      console.error("Admin login error:", error)
      res.status(500).json({
        success: false,
        message: "Login failed",
      })
    }
  },
)

// Create news article
router.post(
  "/news",
  authenticateToken,
  [
    body("title").trim().isLength({ min: 5, max: 200 }).withMessage("Title must be between 5 and 200 characters"),
    body("excerpt").trim().isLength({ min: 10, max: 300 }).withMessage("Excerpt must be between 10 and 300 characters"),
    body("content").trim().isLength({ min: 50 }).withMessage("Content must be at least 50 characters"),
    body("category")
      .isIn(["announcement", "partnership", "achievement", "event", "technology", "community"])
      .withMessage("Invalid category"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const {
        title,
        excerpt,
        content,
        featuredImage,
        category,
        tags,
        status = "draft",
        featured = false,
        seoTitle,
        seoDescription,
      } = req.body

      const news = new News({
        title,
        excerpt,
        content,
        featuredImage,
        category,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        author: req.user.id,
        status,
        featured,
        seoTitle,
        seoDescription,
      })

      await news.save()
      await news.populate("author", "firstName lastName")

      res.status(201).json({
        success: true,
        message: "News article created successfully",
        data: news,
      })
    } catch (error) {
      console.error("Create news error:", error)
      res.status(500).json({
        success: false,
        message: "Failed to create news article",
      })
    }
  },
)

// Get admin dashboard stats
router.get("/dashboard/stats", authenticateToken, async (req, res) => {
  try {
    const [totalContacts, newContacts, totalDonations, totalNews, publishedNews] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: "new" }),
      Donation.countDocuments({ paymentStatus: "completed" }),
      News.countDocuments(),
      News.countDocuments({ status: "published" }),
    ])

    const donationStats = await Donation.aggregate([
      { $match: { paymentStatus: "completed" } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          avgDonation: { $avg: "$amount" },
        },
      },
    ])

    res.json({
      success: true,
      data: {
        contacts: {
          total: totalContacts,
          new: newContacts,
        },
        donations: {
          total: totalDonations,
          totalAmount: donationStats[0]?.totalAmount || 0,
          avgDonation: donationStats[0]?.avgDonation || 0,
        },
        news: {
          total: totalNews,
          published: publishedNews,
          draft: totalNews - publishedNews,
        },
      },
    })
  } catch (error) {
    console.error("Get dashboard stats error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve dashboard statistics",
    })
  }
})

module.exports = router
