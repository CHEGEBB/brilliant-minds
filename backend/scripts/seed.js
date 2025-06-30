const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Admin = require("../models/Admin")

dotenv.config()

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/brilliantminds")

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: "admin" })
    if (existingAdmin) {
      console.log("Admin user already exists")
      process.exit(0)
    }

    // Create default admin user
    const admin = new Admin({
      username: "admin",
      email: "admin@brilliantminds.co.ke",
      password: "admin123", // This will be hashed automatically
      firstName: "Admin",
      lastName: "User",
      role: "super-admin",
    })

    await admin.save()
    console.log("Default admin user created successfully")
    console.log("Username: admin")
    console.log("Password: admin123")
    console.log("Please change the password after first login")

    process.exit(0)
  } catch (error) {
    console.error("Seed error:", error)
    process.exit(1)
  }
}

seedAdmin()
