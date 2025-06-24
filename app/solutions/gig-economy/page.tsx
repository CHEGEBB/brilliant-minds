"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
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

const GigEconomyPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  const heroContent = [
    {
      title: "Gig Economy Integration",
      subtitle: "AI-Powered Work Opportunities",
      description:
        "Connect with verified opportunities worldwide through our AI-powered platform that ensures fair, transparent, and secure freelancing experiences.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "50K+ Verified Gigs",
      highlight: "Smart Matching",
      icon: Briefcase,
    },
    {
      title: "Verified Security",
      subtitle: "Scam-Free Work Environment",
      description:
        "Advanced AI verification systems ensure every opportunity is legitimate, protecting freelancers from fraudulent activities and unsafe work conditions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "99.8% Scam Prevention",
      highlight: "Verified Security",
      icon: Shield,
    },
    {
      title: "Global Access",
      subtitle: "Worldwide Opportunities",
      description:
        "Access international freelancing opportunities across multiple industries including HR, marketing, development, design, and more.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "120+ Countries Served",
      highlight: "Global Reach",
      icon: Globe,
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
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
  }, [])

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Unique Hero Section with Horizontal Scrolling */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-900">
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
            {/* Visual Side - Positioned First on Large Screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroIndex}
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={heroContent[currentHeroIndex].image || "/placeholder.svg"}
                      alt={heroContent[currentHeroIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Gig Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3 z-50">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Gig Secured!</p>
                      <p className="text-xs text-gray-600">Web Development Project</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Payment Secured</p>
                      <p className="text-xs text-gray-600">Escrow Protection Active</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side - Positioned Second */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white space-y-8 order-1 lg:order-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-4">
                    {React.createElement(heroContent[currentHeroIndex].icon, {
                      className: "w-5 h-5 mr-2 text-cyan-400",
                    })}
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
                      Join the Platform
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      Explore Opportunities
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Navigation - Smaller dots like e-learning */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentHeroIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Gig Economy Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Equitable Work Opportunities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology creates a fair marketplace where talent meets opportunity, ensuring every
              freelancer gains access to legitimate, well-paying gigs that match their skills and aspirations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gigBenefits.map((benefit, index) => (
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

      {/* Work Solutions */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Work Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local digitization projects to international freelancing opportunities, we connect you with the right
              work at the right time
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {workSolutions.map((solution, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 0 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`inline-flex items-center bg-gradient-to-r ${solution.gradient} text-white rounded-full px-4 py-2 mb-4`}
                    >
                      {React.createElement(solution.icon, { className: "w-5 h-5 mr-2" })}
                      <span className="text-sm font-semibold">{solution.title}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{solution.description}</p>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2">
                      <Zap className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-semibold text-green-600">{solution.impact}</span>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 0 ? "lg:col-start-1" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} className="relative">
                      <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          className="w-full h-full object-cover"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Popular Industry Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities across high-demand industries with verified clients and competitive rates
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {React.createElement(category.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Prevention */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Advanced Scam Prevention</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect yourself from fraudulent opportunities with our comprehensive verification system and AI-powered
              scam detection
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scamPrevention.map((feature, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {React.createElement(feature.icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Gig Economy Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers that demonstrate how we're transforming the freelancing landscape
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from freelancers who have transformed their careers with BrilliantMinds gig economy platform
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
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                      <p className="text-gray-600">{story.role}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{story.quote}"</p>
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
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of professionals who have found meaningful work through our AI-powered gig economy platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Join the Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
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
