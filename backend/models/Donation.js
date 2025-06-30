const mongoose = require("mongoose")

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: [true, "Donor name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    donorEmail: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
    },
    donorPhone: {
      type: String,
      trim: true,
      match: [/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
    },
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
      min: [1, "Minimum donation amount is $1"],
      max: [100000, "Maximum donation amount is $100,000"],
    },
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "KES", "EUR", "GBP"],
    },
    donationType: {
      type: String,
      required: [true, "Donation type is required"],
      enum: ["one-time", "monthly", "yearly"],
      default: "one-time",
    },
    purpose: {
      type: String,
      enum: ["general", "education", "technology", "community", "emergency"],
      default: "general",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "paypal", "bank-transfer", "mobile-money"],
      required: [true, "Payment method is required"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    transactionId: {
      type: String,
      unique: true,
      sparse: true,
    },
    paymentReference: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    receiptSent: {
      type: Boolean,
      default: false,
    },
    receiptSentAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

// Generate transaction ID before saving
donationSchema.pre("save", function (next) {
  if (!this.transactionId) {
    this.transactionId = "TXN-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  }
  next()
})

// Index for better query performance
donationSchema.index({ donorEmail: 1 })
donationSchema.index({ paymentStatus: 1 })
donationSchema.index({ createdAt: -1 })
donationSchema.index({ transactionId: 1 })

module.exports = mongoose.model("Donation", donationSchema)
