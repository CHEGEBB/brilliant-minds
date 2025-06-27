"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Shield,
  Globe,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Zap,
  Brain,
  DollarSign,
  AlertTriangle,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const GigEconomyPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Gig Economy Integration",
      subtitle: "AI-Powered Work Opportunities",
      description:
        "Connect with verified opportunities worldwide through our AI-powered platform that ensures fair, transparent, and secure freelancing experiences.",
      image: "/images/gig-hero-1.jpg",
      stats: "50K+ Verified Gigs",
      highlight: "Smart Matching",
    },
    {
      title: "Verified Security",
      subtitle: "Scam-Free Work Environment",
      description:
        "Advanced AI verification systems ensure every opportunity is legitimate, protecting freelancers from fraudulent activities and unsafe work conditions.",
      image: "/images/gig-hero-2.jpg",
      stats: "99.8% Scam Prevention",
      highlight: "Verified Security",
    },
    {
      title: "Global Access",
      subtitle: "Worldwide Opportunities",
      description:
        "Access international freelancing opportunities across multiple industries including HR, marketing, development, design, and more.",
      image: "/images/gig-hero-3.jpg",
      stats: "120+ Countries Served",
      highlight: "Global Reach",
    },
  ]

  const gigBenefits = [
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "AI algorithms match freelancers with opportunities that align with their skills and preferences",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Verified Security",
      description: "Comprehensive verification system ensures all opportunities are legitimate and safe",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access to both local digitization projects and international freelancing opportunities",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Personalized recommendations and skill development to advance your freelancing career",
      color: "from-orange-500 to-red-500",
    },
  ]

  const workSolutions = [
    {
      icon: MapPin,
      title: "Local Work Sourcing",
      description: "AI-powered identification of local digitization and transformation opportunities",
      image: "/images/local-work.jpg",
      gradient: "from-blue-600/90 to-cyan-600/90",
      features: [
        "Local government digital initiatives",
        "Small business digitization projects",
        "Community organization tech support",
        "Educational institution modernization",
      ],
      impact: "5,000+ local projects identified",
    },
    {
      icon: Globe,
      title: "International Work Sourcing",
      description: "Verified global opportunities across high-demand freelancing fields",
      image: "/images/international-work.png",
      gradient: "from-green-600/90 to-emerald-600/90",
      features: [
        "HR & Recruitment Services",
        "Marketing & Content Creation",
        "Software Development & QA",
        "Design & Creative Services",
      ],
      impact: "50,000+ international opportunities",
    },
    {
      icon: Brain,
      title: "Personalized Recommendations",
      description: "AI-driven job matching based on skills, experience, and career goals",
      image: "/images/ai-recommendations.jpg",
      gradient: "from-purple-600/90 to-violet-600/90",
      features: [
        "Skill-based job matching",
        "Real-time opportunity alerts",
        "Career growth recommendations",
        "Performance analytics dashboard",
      ],
      impact: "95% match accuracy rate",
    },
  ]

  const scamPrevention = [
    {
      icon: Shield,
      title: "Client Verification",
      description: "Multi-step verification process for all clients and job postings",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Payment Protection",
      description: "Secure escrow system ensures freelancers get paid for completed work",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: AlertTriangle,
      title: "Red Flag Detection",
      description: "AI-powered system identifies and flags potentially fraudulent opportunities",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock assistance for reporting issues and resolving disputes",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const impactMetrics = [
    {
      number: "50K+",
      label: "Verified Gigs",
      description: "Legitimate opportunities secured",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "99.8%",
      label: "Scam Prevention",
      description: "Success rate in fraud detection",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "25K+",
      label: "Active Freelancers",
      description: "Professionals using our platform",
      icon: Users,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "120+",
      label: "Countries Served",
      description: "Global reach and opportunities",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Specialist",
      location: "Austin, Texas",
      image: "/images/gig-testimonial-1.jpg",
      quote:
        "The AI matching system connected me with clients that perfectly matched my skills. I've increased my income by 300% in just 6 months.",
      achievement: "300% income increase",
      rating: 5,
      category: "International Freelancing",
    },
    {
      name: "Marcus Chen",
      role: "Software Developer",
      location: "San Francisco, CA",
      image: "/images/gig-testimonial-2.jpg",
      quote:
        "The scam prevention features gave me confidence to pursue international projects. I've worked with clients from 15 different countries safely.",
      achievement: "15 countries, 0 scams",
      rating: 5,
      category: "Global Development",
    },
    {
      name: "Elena Rodriguez",
      role: "Graphic Designer",
      location: "Barcelona, Spain",
      image: "/images/gig-testimonial-3.jpg",
      quote:
        "Local digitization projects helped me build a strong portfolio while contributing to my community's digital transformation.",
      achievement: "50+ local projects completed",
      rating: 5,
      category: "Local Digitization",
    },
  ]

  const industryCategories = [
    { name: "HR & Recruiting", icon: Users, count: "2,500+ jobs" },
    { name: "Marketing", icon: TrendingUp, count: "8,200+ jobs" },
    { name: "Development", icon: Brain, count: "12,000+ jobs" },
    { name: "Design", icon: Star, count: "6,800+ jobs" },
    { name: "Customer Support", icon: Users, count: "4,100+ jobs" },
    { name: "Finance & Accounting", icon: DollarSign, count: "3,200+ jobs" },
    { name: "Writing & Content", icon: Star, count: "7,500+ jobs" },
    { name: "Data Entry", icon: Target, count: "5,900+ jobs" },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => {
      clearInterval(heroInterval)
    }
  }, [heroContent.length])

  const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Clean and Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-900">
        {/* Background Image - Only on Mobile, Behind Text */}
        <div className="absolute inset-0 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroContent[currentHeroIndex].image || "/placeholder.svg"}
                alt={heroContent[currentHeroIndex].title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-blue-800/80 to-cyan-900/85" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Background Pattern - Desktop Only */}
        <div className="absolute inset-0 opacity-10 hidden md:block">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 sm:py-24 lg:py-16">
            {/* Content Side - Mobile First with Adequate Spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white space-y-6 sm:space-y-8 pt-8 sm:pt-12 md:pt-0 px-2 sm:px-0"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-medium">{heroContent[currentHeroIndex].highlight}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {heroContent[currentHeroIndex].title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold">
                    {heroContent[currentHeroIndex].subtitle}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                    {heroContent[currentHeroIndex].description}
                  </p>

                  <div className="flex items-center space-x-4 sm:space-x-6 py-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                      <span className="text-sm sm:text-lg font-bold">{heroContent[currentHeroIndex].stats}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300"
                    >
                      Join the Platform
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      Explore Opportunities
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Visual Side - Desktop and Tablet Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative h-80 lg:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={heroContent[currentHeroIndex].image || "/placeholder.svg"}
                      alt={heroContent[currentHeroIndex].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-500 ${
                index === currentHeroIndex ? "bg-white w-8 sm:w-12" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Gig Economy Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              AI-Powered Equitable Work Opportunities
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Our advanced AI technology creates a fair marketplace where talent meets opportunity, ensuring every
              freelancer gains access to legitimate, well-paying gigs that match their skills and aspirations.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {gigBenefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(benefit.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Work Solutions */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Comprehensive Work Solutions
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From local digitization projects to international freelancing opportunities, we connect you with the right
              work at the right time
            </p>
          </AnimatedSection>

          <div className="space-y-12 sm:space-y-16">
            {workSolutions.map((solution, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-4 sm:space-y-6 px-4 sm:px-0 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`inline-flex items-center bg-gradient-to-r ${solution.gradient} text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4`}
                    >
                      {React.createElement(solution.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2" })}
                      <span className="text-xs sm:text-sm font-semibold">{solution.title}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{solution.description}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center bg-green-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
                      <span className="text-xs sm:text-sm font-semibold text-green-600">{solution.impact}</span>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} className="relative">
                      <div className="relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          quality={85}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20`} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Popular Industry Categories
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore opportunities across high-demand industries with verified clients and competitive rates
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {React.createElement(category.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{category.count}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Prevention */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced Scam Prevention
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Protect yourself from fraudulent opportunities with our comprehensive verification system and AI-powered
              scam detection
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {scamPrevention.map((feature, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xl border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(feature.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Gig Economy Impact
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real numbers that demonstrate how we&apos;re transforming the freelancing landscape
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactMetrics.map((metric, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-xl border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(metric.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{metric.label}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{metric.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Success Stories</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hear from freelancers who have transformed their careers with BrilliantMinds gig economy platform
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{story.name}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{story.role}</p>
                      <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  <p className="text-gray-700 italic mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-green-600">{story.achievement}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Transform Your Career?</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Join thousands of professionals who have found meaningful work through our AI-powered gig economy platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Join the Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Opportunities
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GigEconomyPage
