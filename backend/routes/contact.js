const express = require("express")
const Contact = require("../models/Contact")
const { body, validationResult } = require("express-validator")
const rateLimit = require("express-rate-limit")

const router = express.Router()

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 requests per windowMs
  message: {
    success: false,
    message: "Too many contact form submissions, please try again later.",
  },
})

// Validation rules
const contactValidation = [
  body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("purpose").isIn(["Partnership", "General", "Support", "Business"]).withMessage("Please select a valid purpose"),
  body("message").trim().isLength({ min: 10, max: 1000 }).withMessage("Message must be between 10 and 1000 characters"),
]

// Submit contact form
router.post("/submit", contactLimiter, contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    const { name, email, purpose, message } = req.body

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      purpose,
      message,
    })

    await contact.save()

    // Send success response
    res.status(201).json({
      success: true,
      message: "Thank you for contacting us! We will get back to you within 24 hours.",
      data: {
        id: contact._id,
        submittedAt: contact.createdAt,
      },
    })

    // Here you could add email notification logic
    console.log(`New contact form submission from ${email}`)
  } catch (error) {
    console.error("Contact form submission error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form. Please try again later.",
    })
  }
})

// Get all contacts (admin only - you'll need to add auth middleware)
router.get("/all", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const status = req.query.status
    const skip = (page - 1) * limit

    const query = {}
    if (status) {
      query.status = status
    }

    const contacts = await Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit)

    const total = await Contact.countDocuments(query)

    res.json({
      success: true,
      data: {
        contacts,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    })
  } catch (error) {
    console.error("Get contacts error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve contacts",
    })
  }
})

module.exports = router
