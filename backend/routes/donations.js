const express = require("express")
const Donation = require("../models/Donation")
const { body, validationResult } = require("express-validator")
const rateLimit = require("express-rate-limit")

const router = express.Router()

// Rate limiting for donations
const donationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 donation attempts per hour
  message: {
    success: false,
    message: "Too many donation attempts, please try again later.",
  },
})

// Validation rules
const donationValidation = [
  body("donorName")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Donor name must be between 2 and 100 characters"),
  body("donorEmail").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("donorPhone").optional().isMobilePhone().withMessage("Please provide a valid phone number"),
  body("amount").isFloat({ min: 1, max: 100000 }).withMessage("Donation amount must be between $1 and $100,000"),
  body("currency").optional().isIn(["USD", "KES", "EUR", "GBP"]).withMessage("Invalid currency"),
  body("donationType").isIn(["one-time", "monthly", "yearly"]).withMessage("Invalid donation type"),
  body("purpose")
    .optional()
    .isIn(["general", "education", "technology", "community", "emergency"])
    .withMessage("Invalid donation purpose"),
  body("paymentMethod").isIn(["card", "paypal", "bank-transfer", "mobile-money"]).withMessage("Invalid payment method"),
]

// Process donation
router.post("/process", donationLimiter, donationValidation, async (req, res) => {
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

    const {
      donorName,
      donorEmail,
      donorPhone,
      amount,
      currency = "USD",
      donationType,
      purpose = "general",
      paymentMethod,
      message,
      isAnonymous = false,
    } = req.body

    // Create new donation entry
    const donation = new Donation({
      donorName,
      donorEmail,
      donorPhone,
      amount,
      currency,
      donationType,
      purpose,
      paymentMethod,
      message,
      isAnonymous,
      paymentStatus: "pending",
    })

    await donation.save()

    // Here you would integrate with payment processors
    // For now, we'll simulate payment processing
    const paymentSuccess = await simulatePaymentProcessing(donation)

    if (paymentSuccess) {
      donation.paymentStatus = "completed"
      donation.paymentReference = `PAY-${Date.now()}`
      await donation.save()

      res.status(201).json({
        success: true,
        message: "Donation processed successfully! Thank you for your generous contribution.",
        data: {
          transactionId: donation.transactionId,
          amount: donation.amount,
          currency: donation.currency,
          status: donation.paymentStatus,
        },
      })
    } else {
      donation.paymentStatus = "failed"
      await donation.save()

      res.status(400).json({
        success: false,
        message: "Payment processing failed. Please try again or contact support.",
        data: {
          transactionId: donation.transactionId,
        },
      })
    }
  } catch (error) {
    console.error("Donation processing error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to process donation. Please try again later.",
    })
  }
})

// Get donation statistics
router.get("/stats", async (req, res) => {
  try {
    const totalDonations = await Donation.aggregate([
      { $match: { paymentStatus: "completed" } },
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
          count: { $sum: 1 },
          avgDonation: { $avg: "$amount" },
        },
      },
    ])

    const monthlyStats = await Donation.aggregate([
      { $match: { paymentStatus: "completed" } },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          total: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } },
      { $limit: 12 },
    ])

    res.json({
      success: true,
      data: {
        total: totalDonations[0] || { total: 0, count: 0, avgDonation: 0 },
        monthly: monthlyStats,
      },
    })
  } catch (error) {
    console.error("Get donation stats error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve donation statistics",
    })
  }
})

// Simulate payment processing (replace with real payment gateway)
async function simulatePaymentProcessing(donation) {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Simulate 95% success rate
  return Math.random() > 0.05
}

module.exports = router
