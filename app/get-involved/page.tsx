"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
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

  const involvementWays = [
    {
      icon: Heart,
      title: "Donate",
      subtitle: "Fund Digital Transformation",
      description:
        "Your contributions make our work possible. Choose the way you'd like to support communities worldwide.",
      color: "from-red-500 to-pink-500",
      bgImage: "/images/about-mission.jpg",
      stats: "$2.5M+ Raised",
      features: ["Financial Donations", "Device Donations", "Recurring Support", "Corporate Matching"],
    },
    {
      icon: Users,
      title: "Volunteer",
      subtitle: "Share Your Skills",
      description: "Join our global community of volunteers and contribute your expertise to meaningful projects.",
      color: "from-blue-500 to-cyan-500",
      bgImage: "/images/gig-testimonial-1.jpg",
      stats: "5,000+ Volunteers",
      features: ["Skill-Based Volunteering", "Remote Opportunities", "Local Chapters", "Leadership Roles"],
    },
    {
      icon: Handshake,
      title: "Partner",
      subtitle: "Strategic Collaboration",
      description: "Partner with BrilliantMinds to create meaningful impact through strategic collaboration.",
      color: "from-purple-500 to-indigo-500",
      bgImage: "/images/coworking-spaces.jpg",
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
      image: "/images/content-sessions.jpg",
      impact: "50+ mentees supported",
    },
    {
      title: "Content Creator",
      description: "Develop educational materials and resources for our platforms",
      commitment: "5-10 hours/week",
      location: "Remote",
      skills: ["Writing", "Design", "Video Editing"],
      image: "/images/elearning-testimonial-2.jpg",
      impact: "100+ resources created",
    },
    {
      title: "Community Facilitator",
      description: "Lead workshops and training sessions in local communities",
      commitment: "Weekend events",
      location: "On-site",
      skills: ["Public Speaking", "Leadership", "Cultural Sensitivity"],
      image: "/images/skill-hero-3.jpg",
      impact: "25+ workshops led",
    },
    {
      title: "Tech Support Specialist",
      description: "Provide technical assistance and troubleshooting support",
      commitment: "Flexible hours",
      location: "Remote/Hybrid",
      skills: ["Technical Expertise", "Problem Solving", "Customer Service"],
      image: "/images/ai-mapping.jpg",
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
      image: "/images/elearning-testimonial-3.jpg",
      quote:
        "Our partnership with BrilliantMinds has transformed how we approach corporate social responsibility. We've seen incredible engagement from our employees and measurable impact in communities.",
      impact: "Funded 50+ digital literacy programs",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Volunteer Coordinator",
      company: "Independent Volunteer",
      image: "/images/gig-testimonial-1.jpg",
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

    // Clear interval if donationImpacts is empty
    if (donationImpacts.length === 0) {
      clearInterval(impactInterval)
    }

    const volunteerInterval = setInterval(() => {
      setCurrentVolunteerIndex((prev) => (prev + 1) % volunteerOpportunities.length)
    }, 4000)

    // Clear interval if volunteerOpportunities is empty
    if (volunteerOpportunities.length === 0) {
      clearInterval(volunteerInterval)
    }

    return () => {
      clearInterval(impactInterval)
      clearInterval(volunteerInterval)
    }
  }, [donationImpacts.length, volunteerOpportunities.length])

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-pink-900">
        {/* Background Image - Only on Mobile, Behind Text */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/get-involved-hero.jpg"
            alt="Get Involved with BrilliantMinds"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-800/80 to-pink-900/85" />
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
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium">Get Involved</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Join Our Mission to{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Empower Communities
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold">Make a Real Difference</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Join our mission to empower the next generation through technology and education. Together, we can
                  create lasting change in communities worldwide.
                </p>

                <div className="flex items-center space-x-4 sm:space-x-6 py-2">
                  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                    <span className="text-sm sm:text-lg font-bold">5,000+ Volunteers</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300"
                  >
                    Start Making Impact
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Visual Side - Desktop and Tablet Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden md:block"
            >
              <div className="relative h-80 lg:h-[400px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/get-involved-hero.jpg"
                    alt="Get Involved with BrilliantMinds"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ways to Get Involved
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Discover how you can contribute to our mission through various opportunities tailored to your interests
              and abilities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {involvementWays.map((way, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-80 sm:h-96 lg:h-112 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                >
                  <Image
                    src={way.bgImage || "/placeholder.svg"}
                    alt={way.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${way.color} opacity-85`} />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-4 sm:mb-6">
                        {React.createElement(way.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{way.title}</h3>
                      <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4">{way.subtitle}</p>
                      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">{way.description}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-white font-bold text-base sm:text-lg">{way.stats}</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-2 transition-transform" />
                      </div>
                      <div className="space-y-2">
                        {way.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-white/90 text-xs sm:text-sm">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Partnership Opportunities
                  </h2>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 sm:mb-8" />
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    Join forces with BrilliantMinds to create meaningful impact through strategic partnerships. Our
                    collaborative approach ensures mutual benefit and sustainable change.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
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
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-start space-x-3 sm:space-x-4"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        {React.createElement(item.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Become a Partner
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/coworking-spaces.jpg"
                    alt="Partnership meeting"
                    width={800}
                    height={300}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30" />
                </motion.div>

                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600">200+</p>
                    <p className="text-xs sm:text-sm text-gray-600">Active Partners</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-purple-600">$5M+</p>
                    <p className="text-xs sm:text-sm text-gray-600">Partnership Value</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Donation Portal */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Donation Portal</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Your contributions make our work possible. Choose the way you&apos;d like to support communities
              worldwide.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Financial Donations */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-pink-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Financial Donations</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Direct funding for our programs and initiatives
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount</label>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <input
                        type="range"
                        min="25"
                        max="1000"
                        step="25"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(Number(e.target.value))}
                        className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-xl sm:text-2xl font-bold text-pink-600">${donationAmount}</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={donationImpacts[currentImpactIndex].amount}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl p-4 sm:p-6 border border-pink-200"
                    >
                      <div className="flex items-center mb-2 sm:mb-3">
                        {React.createElement(donationImpacts[currentImpactIndex].icon, {
                          className: `w-5 h-5 sm:w-6 sm:h-6 ${donationImpacts[currentImpactIndex].color}`,
                        })}
                        <span className="ml-2 font-bold text-gray-900 text-sm sm:text-base">
                          ${donationImpacts[currentImpactIndex].amount} Impact
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base">{donationImpacts[currentImpactIndex].impact}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[25, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount)}
                        className={`py-2 px-3 sm:px-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
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
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Donate Now
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>

            {/* Device Donations */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Device Donations</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Donate devices to bridge the digital divide</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
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
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                          {React.createElement(item.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-600" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-blue-600">{item.count}</span>
                    </motion.div>
                  ))}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Volunteer Opportunities
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Join our global community of volunteers and contribute your expertise to meaningful projects
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Featured Opportunity */}
            <AnimatedSection>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVolunteerIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-48 sm:h-64">
                      <Image
                        src={volunteerOpportunities[currentVolunteerIndex].image || "/placeholder.svg"}
                        alt={volunteerOpportunities[currentVolunteerIndex].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">
                          {volunteerOpportunities[currentVolunteerIndex].title}
                        </h3>
                        <p className="text-purple-200 text-sm sm:text-base">
                          {volunteerOpportunities[currentVolunteerIndex].commitment}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        {volunteerOpportunities[currentVolunteerIndex].description}
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500" />
                          <span className="text-xs sm:text-sm">
                            {volunteerOpportunities[currentVolunteerIndex].location}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500" />
                          <span className="text-xs sm:text-sm">
                            {volunteerOpportunities[currentVolunteerIndex].commitment}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Certificate className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500" />
                          <span className="text-xs sm:text-sm">
                            {volunteerOpportunities[currentVolunteerIndex].impact}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {volunteerOpportunities[currentVolunteerIndex].skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Opportunity Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentVolunteerIndex(index)}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                    currentVolunteerIndex === index ? "ring-4 ring-purple-500 shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <div className="relative h-24 sm:h-32">
                    <Image
                      src={opportunity.image || "/placeholder.svg"}
                      alt={opportunity.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                      <h4 className="font-bold text-xs sm:text-sm">{opportunity.title}</h4>
                      <p className="text-xs text-gray-200">{opportunity.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatedSection className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Join Our Volunteer Community
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Corporate Programs
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Partner with BrilliantMinds to create meaningful impact through strategic corporate social responsibility
              programs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {corporatePrograms.map((program, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 h-full"
                >
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(program.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">{program.description}</p>
                  <div className="space-y-2 sm:space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 text-xs sm:text-sm">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Success Stories</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Hear from partners and volunteers who have made a difference through BrilliantMinds
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        fill
                        sizes="64px"
                        className="rounded-full object-cover"
                        quality={85}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">{story.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{story.role}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{story.company}</p>
                    </div>
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
                    <span className="text-xs sm:text-sm font-semibold text-green-600">{story.impact}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Join thousands of individuals and organizations who are creating positive change through BrilliantMinds.
              Your contribution, no matter the size, makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white text-purple-600 font-bold text-sm sm:text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Start Your Impact Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More About Our Work
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
