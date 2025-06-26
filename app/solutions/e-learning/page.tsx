"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { BookOpen, Play, Award, Clock, Target, CheckCircle, Star, TrendingUp, Brain, Globe } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const ELearningPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [, setCurrentPlatformIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  const heroContent = [
    {
      title: "E-Learning Revolution",
      subtitle: "Transform Your Learning Experience",
      description:
        "Innovative microlearning platform that makes education accessible, engaging, and effective for learners worldwide.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "150K+ Skills Certified",
      highlight: "Bite-sized Learning",
    },
    {
      title: "Interactive Education",
      subtitle: "Engaging Learning for Everyone",
      description:
        "Interactive features including quizzes, videos, and progress tracking that make learning fun and memorable.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "95% Completion Rate",
      highlight: "Interactive Content",
    },
    {
      title: "Global Learning Community",
      subtitle: "Learn from Anywhere, Anytime",
      description:
        "Join a worldwide community of learners with courses covering academic topics, professional skills, and freelancing basics.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "50+ Countries Served",
      highlight: "Global Access",
    },
  ]

  const platformFeatures = [
    {
      title: "Content Sessions",
      description: "Bite-sized learning modules designed for maximum retention and engagement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Optimized for mobile learning on the go",
        "5-15 minute focused sessions",
        "Adaptive learning paths",
        "Perfect for busy learning schedules",
      ],
      gradient: "from-blue-600/90 to-cyan-600/90",
      device: "tablet",
    },
    {
      title: "Interactive Features",
      description: "Engaging elements that make learning fun and effective with real-time feedback",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Interactive videos with embedded questions",
        "Gamified learning experiences",
        "Real-time progress tracking",
        "Peer collaboration tools",
      ],
      gradient: "from-green-600/90 to-emerald-600/90",
      device: "mobile",
    },
    {
      title: "Content Areas",
      description: "Comprehensive course catalog covering academic subjects, professional skills, and freelancing",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: [
        "Academic subjects for all levels",
        "Professional development courses",
        "Freelancing and entrepreneurship",
        "Industry-specific certifications",
      ],
      gradient: "from-purple-600/90 to-violet-600/90",
      device: "desktop",
    },
  ]

  const learningBenefits = [
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Flexible scheduling that adapts to your lifestyle and learning preferences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Enhanced Retention",
      description: "Scientifically-proven microlearning techniques for better knowledge retention",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Achievement Based",
      description: "Earn certificates and badges as you progress through your learning journey",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const impactMetrics = [
    {
      number: "150K+",
      label: "Skills Certified",
      description: "Learners who completed courses",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "95%",
      label: "Completion Rate",
      description: "Course completion success rate",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "500+",
      label: "Courses Available",
      description: "Diverse learning opportunities",
      icon: BookOpen,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "50+",
      label: "Countries Served",
      description: "Global learning community",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  const successStories = [
    {
      name: "Jessica Williams",
      role: "Marketing Professional",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The bite-sized lessons fit perfectly into my busy schedule. I was able to complete a digital marketing certification while working full-time.",
      achievement: "Completed 5 courses in 3 months",
      rating: 5,
    },
    {
      name: "David Johnson",
      role: "Software Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The interactive coding challenges and real-world projects helped me transition from a different field into tech successfully.",
      achievement: "Career change in 6 months",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf48d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The freelancing courses taught me not just design skills, but also how to run a successful business. My income doubled!",
      achievement: "200% income increase",
      rating: 5,
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    const platformInterval = setInterval(() => {
      setCurrentPlatformIndex((prev) => (prev + 1) % platformFeatures.length)
    }, 4000)

    return () => {
      clearInterval(heroInterval)
      clearInterval(platformInterval)
    }
  }, [heroContent.length, platformFeatures.length])

  const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const DeviceFrame = ({ device, children }: { device: string; children: React.ReactNode }) => {
    const deviceClasses = {
      desktop: "w-full max-w-4xl mx-auto",
      tablet: "w-full max-w-md mx-auto",
      mobile: "w-full max-w-xs mx-auto",
    }

    return (
      <div className={deviceClasses[device as keyof typeof deviceClasses]}>
        {device === "desktop" && (
          <div className="bg-gray-800 rounded-t-lg p-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
          </div>
        )}
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-2xl ${
            device === "desktop" ? "rounded-t-none" : ""
          } ${device === "tablet" ? "border-8 border-gray-800" : ""} ${
            device === "mobile" ? "border-4 border-gray-800 rounded-3xl" : ""
          }`}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Unique Hero Section with Split Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <motion.div style={{ y: heroParallax }} className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-4">
                    <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                    <span className="text-sm font-semibold">{heroContent[currentHeroIndex].highlight}</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    {heroContent[currentHeroIndex].title}
                  </h1>
                  <p className="text-2xl text-cyan-300 font-semibold">{heroContent[currentHeroIndex].subtitle}</p>
                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                    {heroContent[currentHeroIndex].description}
                  </p>

                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-6 py-3">
                      <span className="text-lg font-bold">{heroContent[currentHeroIndex].stats}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300"
                    >
                      Try a Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      Explore Content
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={heroContent[currentHeroIndex].image || "/placeholder.svg"}
                      alt={heroContent[currentHeroIndex].title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-cyan-900/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Learning Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Course Completed!</p>
                      <p className="text-xs text-gray-600">Digital Marketing Basics</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Progress: 85%</p>
                      <p className="text-xs text-gray-600">Web Development Track</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Navigation */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentHeroIndex ? "bg-white w-12" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Microlearning Platform for Fun Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our innovative approach to education makes learning enjoyable and effective. Start your pace with content
              designed for maximum retention.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {learningBenefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {React.createElement(benefit.icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Platform Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make our e-learning platform the perfect choice for modern learners
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {platformFeatures.map((feature, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`inline-flex items-center bg-gradient-to-r ${feature.gradient} text-white rounded-full px-4 py-2 mb-4`}
                    >
                      <span className="text-sm font-semibold">{feature.title}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} className="relative">
                      <DeviceFrame device={feature.device}>
                        <div className="relative h-64 lg:h-80">
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                        </div>
                      </DeviceFrame>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform in Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">See the Platform in Action</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our intuitive learning interface designed for engaging and effective learning
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div whileHover={{ scale: 1.02 }} className="relative max-w-6xl mx-auto">
              <DeviceFrame device="desktop">
                <div className="relative h-96 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Interactive Learning Dashboard</h3>
                    <p className="text-lg opacity-90">Click to see our platform in action</p>
                  </div>
                </div>
              </DeviceFrame>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Learning Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that demonstrate the effectiveness of our e-learning platform
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {React.createElement(metric.icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{metric.label}</h3>
                  <p className="text-gray-600 text-sm">{metric.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from learners who have transformed their careers with BrilliantMinds
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                      <p className="text-gray-600">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">&ldquo;`&ldquo;{story.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-green-600">{story.achievement}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of learners who have discovered the power of microlearning with BrilliantMinds
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Try a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Explore Learning Content
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ELearningPage
