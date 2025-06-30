const express = require("express")
const News = require("../models/News")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// Get all published news
router.get("/", async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const category = req.query.category
    const featured = req.query.featured
    const skip = (page - 1) * limit

    const query = { status: "published" }

    if (category) {
      query.category = category
    }

    if (featured === "true") {
      query.featured = true
    }

    const news = await News.find(query)
      .populate("author", "firstName lastName")
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content") // Exclude full content for list view

    const total = await News.countDocuments(query)

    res.json({
      success: true,
      data: {
        news,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
        },
      },
    })
  } catch (error) {
    console.error("Get news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news",
    })
  }
})

// Get single news article by slug
router.get("/:slug", async (req, res) => {
  try {
    const news = await News.findOne({
      slug: req.params.slug,
      status: "published",
    }).populate("author", "firstName lastName")

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News article not found",
      })
    }

    // Increment views
    news.views += 1
    await news.save()

    res.json({
      success: true,
      data: news,
    })
  } catch (error) {
    console.error("Get news by slug error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve news article",
    })
  }
})

// Get featured news
router.get("/featured/articles", async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit) || 5

    const featuredNews = await News.find({
      status: "published",
      featured: true,
    })
      .populate("author", "firstName lastName")
      .sort({ publishedAt: -1 })
      .limit(limit)
      .select("-content")

    res.json({
      success: true,
      data: featuredNews,
    })
  } catch (error) {
    console.error("Get featured news error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve featured news",
    })
  }
})

module.exports = router
