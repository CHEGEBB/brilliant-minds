"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Wifi,
  Smartphone,
  MapPin,
  Building,
  Users,
  Globe,
  CheckCircle,
  Lightbulb,
  HandHeart,
  Network,
  Signal,
  Zap,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const DigitalInclusionPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroContent = [
    {
      title: "Digital Inclusion",
      subtitle: "Bridging the Digital Divide",
      description:
        "Providing devices, internet connectivity, and access to co-working spaces for marginalized communities to enable digital participation.",
      image: "/images/digital-hero-1.jpg",
      stats: "2.5M+ Lives Connected",
    },
    {
      title: "Smart Connectivity",
      subtitle: "AI-Powered Network Solutions",
      description:
        "Using artificial intelligence to identify connectivity gaps and optimize network infrastructure for underserved communities.",
      image: "/images/digital-hero-2.jpg",
      stats: "95% Coverage Improvement",
    },
    {
      title: "Community Hubs",
      subtitle: "Spaces for Digital Growth",
      description:
        "Establishing co-working spaces equipped with high-speed internet and modern devices for community access and collaboration.",
      image: "/images/digital-hero-3.jpg",
      stats: "1,450+ Spaces Established",
    },
  ]

  const inclusionBenefits = [
    {
      icon: Smartphone,
      title: "Device Donation",
      description: "Partnering with organizations to supply digital devices to those who need them most",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "Collaborating with telecom providers to extend affordable and reliable connectivity",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Network,
      title: "AI Mapping Solutions",
      description: "Real-time analysis of regions with low connectivity and tailored support proposals",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Building,
      title: "Co-Working Spaces",
      description: "Directory of spaces equipped with internet and devices for community access",
      color: "from-orange-500 to-red-500",
    },
  ]

  const keyFeatures = [
    {
      icon: Smartphone,
      title: "Device Donation Program",
      description: "Comprehensive device refurbishment and distribution network",
      image: "/images/device-donation.jpg",
      gradient: "from-blue-600/90 to-cyan-600/90",
      features: [
        "Laptop & Computer Donations",
        "Mobile Device Distribution",
        "Tablet Programs",
        "Accessibility Equipment",
      ],
      impact: "12,650+ devices distributed globally",
    },
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "Affordable and reliable internet access for underserved communities",
      image: "/images/connectivity.jpg",
      gradient: "from-green-600/90 to-emerald-600/90",
      features: ["Telecom Partnerships", "Community Wi-Fi", "Satellite Internet", "Mobile Hotspots"],
      impact: "95% connectivity improvement",
    },
    {
      icon: Network,
      title: "AI Mapping Solutions",
      description: "Real-time analysis and optimization of digital infrastructure",
      image: "/images/ai-mapping.jpg",
      gradient: "from-purple-600/90 to-violet-600/90",
      features: ["Coverage Analysis", "Infrastructure Planning", "Community Needs Assessment", "Resource Optimization"],
      impact: "Real-time network optimization",
    },
    {
      icon: Building,
      title: "Co-Working Spaces",
      description: "Modern workspaces with technology access and community support",
      image: "/images/coworking-spaces.jpg",
      gradient: "from-orange-600/90 to-red-600/90",
      features: ["High-Speed Internet", "Modern Equipment", "Training Programs", "Community Events"],
      impact: "1,450+ spaces established",
    },
  ]

  const impactMetrics = [
    {
      number: "2.5M+",
      label: "Lives Connected",
      description: "Individuals gained digital access",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "12,650+",
      label: "Devices Distributed",
      description: "Refurbished technology provided",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "1,450+",
      label: "Tech Hubs Created",
      description: "Community spaces established",
      icon: Building,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "95%",
      label: "Coverage Improvement",
      description: "Network optimization achieved",
      icon: Signal,
      color: "from-orange-500 to-red-500",
    },
  ]

  const successStories = [
    {
      name: "John Doe",
      location: "Nairobi, Kenya",
      story: "Received a refurbished laptop and internet access through our program",
      impact: "Started online tutoring business, increased income by 400%",
      image: "/images/success-story-1.jpg",
      quote: "Digital inclusion changed my life. Now I can support my family and help other students learn.",
      program: "Device Donation",
    },
    {
      name: "Community Center Lagos",
      location: "Lagos, Nigeria",
      story: "Transformed into a digital hub serving 500+ community members monthly",
      impact: "85% of users gained new digital skills within 6 months",
      image: "/images/success-story-2.jpg",
      quote: "Our community center became the heart of digital transformation in our neighborhood.",
      program: "Co-Working Space",
    },
    {
      name: "Rural School Network",
      location: "Kenya",
      story: "Connected 25 rural schools through our AI mapping and connectivity solutions",
      impact: "Student engagement increased by 300%, graduation rates improved by 45%",
      image: "/images/success-story-3.jpg",
      quote: "Technology brought the world to our classrooms. Our students now dream bigger.",
      program: "Connectivity Solutions",
    },
  ]

  const partnershipOptions = [
    {
      icon: HandHeart,
      title: "Device Partnership",
      description: "Partner with us to refurbish and distribute technology",
      benefits: ["Corporate CSR Impact", "Tax Benefits", "Brand Recognition", "Employee Engagement"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Connectivity Partnership",
      description: "Collaborate to extend internet access to underserved areas",
      benefits: ["Market Expansion", "Infrastructure Sharing", "Government Relations", "Social Impact"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Partnership",
      description: "Co-develop AI solutions for digital inclusion challenges",
      benefits: ["Technology Development", "Research Collaboration", "IP Sharing", "Market Leadership"],
      color: "from-purple-500 to-violet-500",
    },
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

      {/* Hero Section with Mobile-First Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900">
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-800/75 to-blue-900/80" />
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
                    <span className="text-xs sm:text-sm font-medium">Digital Innovation</span>
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
                      Partner with Us
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      Donate a Device
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
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl"
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-cyan-900/20" />
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

      {/* Digital Inclusion Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Bridging the Digital Divide
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              In today&apos;s digital world, access to technology is no longer a luxury—it&apos;s a necessity. Our
              Digital Inclusion initiative focuses on providing device access, connectivity, and technical support to
              marginalized communities.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {inclusionBenefits.map((benefit, index) => (
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

      {/* Key Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Digital Inclusion Solutions
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions designed to eliminate digital barriers and create opportunities for all
            </p>
          </AnimatedSection>

          <div className="space-y-12 sm:space-y-16">
            {keyFeatures.map((feature, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-4 sm:space-y-6 px-4 sm:px-0 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`inline-flex items-center bg-gradient-to-r ${feature.gradient} text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4`}
                    >
                      {React.createElement(feature.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 mr-2" })}
                      <span className="text-xs sm:text-sm font-semibold">{feature.title}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center bg-green-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
                      <span className="text-xs sm:text-sm font-semibold text-green-600">{feature.impact}</span>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} className="relative">
                      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          quality={85}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Digital Inclusion Impact
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real metrics that demonstrate the tangible difference we&apos;re making in bridging the digital divide
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
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our digital inclusion programs have transformed communities across the country. From rural villages to
              urban neighborhoods, we&apos;re making a difference.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1">
                      <span className="text-xs font-semibold text-gray-700">{story.program}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm">{story.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4 text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-600">Story:</span>
                        <p className="text-xs sm:text-sm text-gray-700">{story.story}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-600">Impact:</span>
                        <p className="text-xs sm:text-sm font-semibold text-green-600">{story.impact}</p>
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Join Our Digital Inclusion Initiative
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto px-4">
              Together, we can bridge the digital divide and create opportunities for all communities
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {partnershipOptions.map((option, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 text-center"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(option.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{option.title}</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">{option.description}</p>
                  <div className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-200 text-xs sm:text-sm">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-cyan-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Become a Partner
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Donate a Device
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white/30 transition-all duration-300"
              >
                Find a Co-Working Space
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DigitalInclusionPage
