"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Heart,
  Users,
  Handshake,
  DollarSign,
  Smartphone,
  Award,
  Target,
  Globe,
  Building,
  UserPlus,
  Gift,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Zap,
  Shield,
  BadgeIcon as Certificate,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const GetInvolvedPage = () => {
  const [currentImpactIndex, setCurrentImpactIndex] = useState(0)
  const [currentVolunteerIndex, setCurrentVolunteerIndex] = useState(0)
  const [donationAmount, setDonationAmount] = useState(50)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const involvementWays = [
    {
      icon: Heart,
      title: "Donate",
      subtitle: "Fund Digital Transformation",
      description:
        "Your contributions make our work possible. Choose the way you'd like to support communities worldwide.",
      color: "from-red-500 to-pink-500",
      bgImage:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "$2.5M+ Raised",
      features: ["Financial Donations", "Device Donations", "Recurring Support", "Corporate Matching"],
    },
    {
      icon: Users,
      title: "Volunteer",
      subtitle: "Share Your Skills",
      description: "Join our global community of volunteers and contribute your expertise to meaningful projects.",
      color: "from-blue-500 to-cyan-500",
      bgImage:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "5,000+ Volunteers",
      features: ["Skill-Based Volunteering", "Remote Opportunities", "Local Chapters", "Leadership Roles"],
    },
    {
      icon: Handshake,
      title: "Partner",
      subtitle: "Strategic Collaboration",
      description: "Partner with BrilliantMinds to create meaningful impact through strategic collaboration.",
      color: "from-purple-500 to-indigo-500",
      bgImage:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: "200+ Partners",
      features: ["Corporate Partnerships", "NGO Collaboration", "Government Relations", "Academic Alliances"],
    },
  ]

  const donationImpacts = [
    {
      amount: 25,
      impact: "Provides internet access for 1 student for 1 month",
      icon: Globe,
      color: "text-blue-500",
    },
    {
      amount: 50,
      impact: "Funds a complete digital literacy workshop",
      icon: Users,
      color: "text-green-500",
    },
    {
      amount: 100,
      impact: "Supplies a refurbished laptop to a student",
      icon: Smartphone,
      color: "text-purple-500",
    },
    {
      amount: 250,
      impact: "Establishes a community tech hub for 1 month",
      icon: Building,
      color: "text-orange-500",
    },
    {
      amount: 500,
      impact: "Trains 10 community members in digital skills",
      icon: Award,
      color: "text-red-500",
    },
    {
      amount: 1000,
      impact: "Launches a complete digital inclusion program",
      icon: Target,
      color: "text-indigo-500",
    },
  ]

  const volunteerOpportunities = [
    {
      title: "Digital Mentor",
      description: "Guide individuals through their digital transformation journey",
      commitment: "2-4 hours/week",
      location: "Remote",
      skills: ["Communication", "Patience", "Basic Tech"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "50+ mentees supported",
    },
    {
      title: "Content Creator",
      description: "Develop educational materials and resources for our platforms",
      commitment: "5-10 hours/week",
      location: "Remote",
      skills: ["Writing", "Design", "Video Editing"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "100+ resources created",
    },
    {
      title: "Community Facilitator",
      description: "Lead workshops and training sessions in local communities",
      commitment: "Weekend events",
      location: "On-site",
      skills: ["Public Speaking", "Leadership", "Cultural Sensitivity"],
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "25+ workshops led",
    },
    {
      title: "Tech Support Specialist",
      description: "Provide technical assistance and troubleshooting support",
      commitment: "Flexible hours",
      location: "Remote/Hybrid",
      skills: ["Technical Expertise", "Problem Solving", "Customer Service"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "500+ issues resolved",
    },
  ]

  const corporatePrograms = [
    {
      icon: Gift,
      title: "Sponsored Programs",
      description: "Fund specific initiatives that align with your company's values and mission",
      features: [
        "Custom program development",
        "Brand visibility and recognition",
        "Employee engagement opportunities",
        "Impact reporting and metrics",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: UserPlus,
      title: "Employee Engagement",
      description: "Engage your workforce in meaningful volunteer opportunities and skill-sharing",
      features: [
        "Team building through service",
        "Skills-based volunteering programs",
        "Corporate volunteer days",
        "Professional development through giving",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Strategic Partnerships",
      description: "Long-term collaborations that create sustainable impact and business value",
      features: [
        "Joint program development",
        "Technology and resource sharing",
        "Market expansion opportunities",
        "Thought leadership positioning",
      ],
      color: "from-purple-500 to-violet-500",
    },
  ]

  const successStories = [
    {
      name: "Sarah Martinez",
      role: "Corporate Partner Lead",
      company: "TechCorp Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "Our partnership with BrilliantMinds has transformed how we approach corporate social responsibility. We've seen incredible engagement from our employees and measurable impact in communities.",
      impact: "Funded 50+ digital literacy programs",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Volunteer Coordinator",
      company: "Independent Volunteer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote:
        "Volunteering with BrilliantMinds has been incredibly rewarding. I've been able to use my tech skills to directly help people in my community gain digital literacy.",
      impact: "Trained 200+ community members",
      rating: 5,
    },
  ]

  useEffect(() => {
    const impactInterval = setInterval(() => {
      setCurrentImpactIndex((prev) => (prev + 1) % donationImpacts.length)
    }, 3000)

    const volunteerInterval = setInterval(() => {
      setCurrentVolunteerIndex((prev) => (prev + 1) % volunteerOpportunities.length)
    }, 4000)

    return () => {
      clearInterval(impactInterval)
      clearInterval(volunteerInterval)
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
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  // Unique floating animation for this page
  const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="/assets/bg2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/80" />
        </div>

        {/* Floating Elements */}
        <motion.div style={{ y: heroParallax }} className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingCard delay={0}>
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </FloatingCard>
          <FloatingCard delay={1}>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </FloatingCard>
          <FloatingCard delay={2}>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Handshake className="w-12 h-12 text-white" />
            </div>
          </FloatingCard>
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Get Involved with{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                BrilliantMinds
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Join our mission to empower the next generation through technology and education. Together, we can create
              lasting change in communities worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#ways-to-help"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Making Impact
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#learn-more"
                className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg hover:bg-white/30 transition-all duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-2 h-4 bg-white/70 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Ways to Get Involved */}
      <section id="ways-to-help" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ways to Get Involved</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how you can contribute to our mission through various opportunities tailored to your interests
              and abilities.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {involvementWays.map((way, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="relative h-112 overflow-hidden shadow-2xl group cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${way.bgImage})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${way.color} opacity-85`} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-6">
                        {React.createElement(way.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{way.title}</h3>
                      <p className="text-lg text-white/90 mb-4">{way.subtitle}</p>
                      <p className="text-white/80 mb-6">{way.description}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white font-bold text-lg">{way.stats}</span>
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                      </div>
                      <div className="space-y-2">
                        {way.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-white/90 text-sm">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6" />
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Join forces with BrilliantMinds to create meaningful impact through strategic partnerships. Our
                    collaborative approach ensures mutual benefit and sustainable change.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Target,
                      title: "Strategic Alignment",
                      description: "We align with your goals while maximizing community impact",
                    },
                    {
                      icon: Shield,
                      title: "Resource Sharing",
                      description: "Combine resources and expertise to amplify our collective impact",
                    },
                    {
                      icon: Zap,
                      title: "Brand Association",
                      description: "Associate your brand with meaningful social impact and innovation",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {React.createElement(item.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Become a Partner
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Partnership meeting"
                    width={800}
                    height={300}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30" />
                </motion.div>

                {/* Floating stats */}
                <FloatingCard delay={0}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                  >
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Active Partners</p>
                    </div>
                  </motion.div>
                </FloatingCard>

                <FloatingCard delay={1}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                  >
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">$5M+</p>
                      <p className="text-sm text-gray-600">Partnership Value</p>
                    </div>
                  </motion.div>
                </FloatingCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Donation Portal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Donation Portal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contributions make our work possible. Choose the way you'd like to support communities worldwide.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Financial Donations */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 border border-pink-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Financial Donations</h3>
                    <p className="text-gray-600">Direct funding for our programs and initiatives</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="25"
                        max="1000"
                        step="25"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                        className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-2xl font-bold text-pink-600">${donationAmount}</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImpactIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl p-6 border border-pink-200"
                    >
                      <div className="flex items-center mb-3">
                        {React.createElement(donationImpacts[currentImpactIndex].icon, {
                          className: `w-6 h-6 ${donationImpacts[currentImpactIndex].color}`,
                        })}
                        <span className="ml-2 font-bold text-gray-900">
                          ${donationImpacts[currentImpactIndex].amount} Impact
                        </span>
                      </div>
                      <p className="text-gray-700">{donationImpacts[currentImpactIndex].impact}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="grid grid-cols-3 gap-3">
                    {[25, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount)}
                        className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                          donationAmount === amount
                            ? "bg-pink-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Donate Now
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>

            {/* Device Donations */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Device Donations</h3>
                    <p className="text-gray-600">Donate devices to bridge the digital divide</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Smartphone,
                      title: "Laptops & Computers",
                      description: "Working computers for students and professionals",
                      count: "500+ needed",
                    },
                    {
                      icon: Smartphone,
                      title: "Tablets & Mobile Devices",
                      description: "Portable devices for mobile learning",
                      count: "300+ needed",
                    },
                    {
                      icon: Globe,
                      title: "Networking Equipment",
                      description: "Routers and modems for connectivity",
                      count: "100+ needed",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          {React.createElement(item.icon, { className: "w-5 h-5 text-blue-600" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">{item.count}</span>
                    </motion.div>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Donate Devices
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join our global community of volunteers and contribute your expertise to meaningful projects that create
              lasting impact.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Featured Volunteer Opportunity */}
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVolunteerIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 overflow-hidden shadow-2xl"
                >
                  <Image
                    src={volunteerOpportunities[currentVolunteerIndex].image || "/placeholder.svg"}
                    alt={volunteerOpportunities[currentVolunteerIndex].title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-900/80 to-teal-900/80" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {volunteerOpportunities[currentVolunteerIndex].title}
                    </h3>
                    <p className="text-gray-200 mb-4">{volunteerOpportunities[currentVolunteerIndex].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center text-white text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{volunteerOpportunities[currentVolunteerIndex].commitment}</span>
                        </div>
                        <div className="flex items-center text-white text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{volunteerOpportunities[currentVolunteerIndex].location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-300 font-semibold">
                          {volunteerOpportunities[currentVolunteerIndex].impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Volunteer Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Volunteer Benefits</h3>
                <p className="text-xl text-gray-700 mb-8">
                  Make a difference while developing your skills and expanding your network.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Skill Development",
                    description: "Enhance your professional skills through meaningful work",
                  },
                  {
                    icon: Users,
                    title: "Global Network",
                    description: "Connect with like-minded professionals worldwide",
                  },
                  {
                    icon: Heart,
                    title: "Personal Fulfillment",
                    description: "Experience the joy of making a real difference",
                  },
                  {
                    icon: Certificate,
                    title: "Recognition",
                    description: "Receive certificates and recommendations for your contributions",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Apply to Volunteer
              </motion.button>
            </div>
          </div>

          {/* Volunteer Navigation */}
          <div className="flex justify-center space-x-4">
            {volunteerOpportunities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVolunteerIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVolunteerIndex ? "bg-green-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Collaboration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Corporate Collaboration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Partner with BrilliantMinds to align your corporate social responsibility goals with meaningful community
              impact.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {corporatePrograms.map((program, index) => (
              <AnimatedSection key={index}>
                <FloatingCard delay={index * 0.5}>
                  <motion.div
                    whileHover={{ y: -10, rotateX: 5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6`}
                    >
                      {React.createElement(program.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </FloatingCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-full hover:shadow-lg transition-all duration-300"
            >
              Explore Partnership Options
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our partners and volunteers about their experience making a difference with BrilliantMinds.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
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
                      <p className="text-sm text-blue-600 font-semibold">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6">"{story.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-people-working-together-in-a-startup-4640-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of individuals and organizations who are already creating positive change in communities
              worldwide. Your contribution, no matter the size, makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GetInvolvedPage
