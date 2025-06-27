"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Users, Smartphone, Target, MapPin, Calendar, Building, Zap, Briefcase } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const ImpactPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  const heroImages = [
    "/images/impact-hero-1.jpg",
    "/images/impact-hero-2.jpg",
    "/images/impact-hero-3.jpg",
    "/images/impact-hero-4.jpg",
  ]

  const impactStats = [
    {
      number: "12,650+",
      label: "Devices Distributed",
      description: "Digital devices provided to marginalized communities through our Digital Inclusion program",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      number: "8,750+",
      label: "Students and Professionals Trained",
      description: "Individuals equipped with digital skills through our E-Learning Revolution platform",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      number: "3,280+",
      label: "Verified Gigs Secured",
      description: "Legitimate work opportunities created through our Gig Economy Integration platform",
      icon: Briefcase,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
    },
    {
      number: "1,450+",
      label: "Co-Working Spaces Established",
      description: "Community spaces equipped with internet and devices for digital participation",
      icon: Building,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  const successStories = [
    {
      name: "Amara Okafor",
      type: "Individual Beneficiary",
      location: "Lagos, Nigeria",
      program: "Digital Inclusion",
      story:
        "Received a refurbished laptop through our device donation program and gained internet access at a local co-working space",
      benefit: "Started her own digital marketing consultancy",
      achievement: "300% income increase in 8 months",
      image: "/images/connectivity.jpg",
      quote:
        "BrilliantMinds gave me the tools I needed to transform my life. The laptop and internet access opened doors I never knew existed.",
    },
    {
      name: "Carlos Rodriguez",
      type: "Individual Beneficiary",
      location: "Mexico City, Mexico",
      program: "E-Learning Revolution",
      story: "Completed web development courses through our microlearning platform while working as a street vendor",
      benefit: "Secured full-time employment as a software developer",
      achievement: "Career transformation in 12 months",
      image: "/images/gig-testimonial-2.jpg",
      quote:
        "The bite-sized lessons fit perfectly with my schedule. I could learn between customers and now I'm a certified developer.",
    },
    {
      name: "Priya Sharma",
      type: "Individual Beneficiary",
      location: "Mumbai, India",
      program: "Gig Economy Integration",
      story: "Found verified freelance graphic design opportunities through our AI-powered platform",
      benefit: "Built a sustainable freelance business",
      achievement: "Financial independence as single mother",
      image: "/images/gig-testimonial-3.jpg",
      quote:
        "The platform helped me avoid scams and find legitimate clients. I now support my family of 4 through freelancing.",
    },
    {
      name: "TechForward NGO",
      type: "Organization Beneficiary",
      location: "Nairobi, Kenya",
      program: "Partnership Program",
      story: "Partnered with BrilliantMinds to establish 5 community tech hubs in underserved areas",
      benefit: "Expanded their reach and impact significantly",
      achievement: "Served 2,000+ additional beneficiaries",
      image: "/images/coworking-spaces.jpg",
      quote:
        "Our partnership with BrilliantMinds amplified our impact. Together, we've transformed entire communities.",
    },
  ]

  const communityTransformations = [
    {
      title: "Maasailand Village, Kenya",
      description: "Complete digital transformation of a rural community",
      beforeImage: "/images/digital-hero-1.jpg",
      afterImage: "/images/coworking-spaces.jpg",
      stats: [
        { label: "Internet Access", value: "95%" },
        { label: "Digital Literacy", value: "80%" },
        { label: "Income Increase", value: "250%" },
      ],
      timeframe: "18 months",
    },
    {
      title: "São Paulo Urban School Initiative",
      description: "Modernizing education in underserved urban areas",
      beforeImage: "/images/elearning-hero-1.jpg",
      afterImage: "/images/content-sessions.jpg",
      stats: [
        { label: "Student Engagement", value: "400%" },
        { label: "Graduation Rate", value: "85%" },
        { label: "Tech Skills", value: "90%" },
      ],
      timeframe: "12 months",
    },
  ]

  const globalReach = [
    { region: "Africa", countries: 15, beneficiaries: "2.5M+", color: "text-blue-600" },
    { region: "Asia", countries: 12, beneficiaries: "1.8M+", color: "text-green-600" },
    { region: "Americas", countries: 18, beneficiaries: "1.2M+", color: "text-purple-600" },
    { region: "Europe", countries: 8, beneficiaries: "800K+", color: "text-orange-600" },
  ]

  const futureGoals = [
    {
      icon: Target,
      title: "10M+ Empowered",
      description: "Reach 10 million individuals by 2030 with comprehensive digital empowerment programs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building,
      title: "1,000+ Tech Hubs",
      description: "Establish community technology centers in underserved areas worldwide",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "100% Digital Equity",
      description: "Eliminate the digital divide through innovative solutions and partnerships",
      color: "from-purple-500 to-violet-500",
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => {
      clearInterval(heroInterval)
    }
  }, [heroImages.length])

  const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
  }: { children: React.ReactNode; className?: string; delay?: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const CounterAnimation = ({ value, duration = 2 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))

    useEffect(() => {
      if (isInView && numericValue) {
        let start = 0
        const increment = numericValue / (duration * 60)
        const timer = setInterval(() => {
          start += increment
          if (start >= numericValue) {
            setCount(numericValue)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 1000 / 60)

        return () => clearInterval(timer)
      }
    }, [isInView, numericValue, duration])

    return (
      <span ref={ref}>
        {count.toLocaleString()}
        {value.includes("+") ? "+" : ""}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Clean and Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
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
                src={heroImages[currentHeroIndex] || "/placeholder.svg"}
                alt="Our Impact"
                fill
                sizes="100vw"
                className="object-cover"
                priority
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-800/80 to-indigo-900/85" />
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
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-medium">Our Impact</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Transforming Communities{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Worldwide
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold">
                  Real Difference, Real Numbers
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Transforming communities through technology, education, and empowerment. See the real difference we&apos;re
                  making in lives around the world.
                </p>

                <div className="flex items-center space-x-4 sm:space-x-6 py-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                    <span className="text-sm sm:text-lg font-bold">2.5M+ Lives Impacted</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300"
                  >
                    View Our Numbers
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    Read Success Stories
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
                      src={heroImages[currentHeroIndex] || "/placeholder.svg"}
                      alt="Our Impact"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4">
          {heroImages.map((_, index) => (
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

      {/* Impact Numbers */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Impact Metrics</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Real metrics that demonstrate the tangible difference we&apos;re making in communities worldwide
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${stat.bgColor} rounded-2xl p-6 sm:p-8 text-center border border-gray-100 shadow-lg`}
                >
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(stat.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    <CounterAnimation value={stat.number} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{stat.label}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{stat.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Success Stories</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Testimonials from individuals and organizations that have benefited from BrilliantMinds programs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={85}
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1">
                      <span className="text-xs font-semibold text-gray-700">{story.type}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="text-xs sm:text-sm">{story.location}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-3">{story.program}</div>

                    <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;{story.quote}&rdquo;
                    </p>

                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-600">Story:</span>
                        <p className="text-xs sm:text-sm text-gray-700">{story.story}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600">Benefit:</span>
                        <p className="text-xs sm:text-sm font-semibold text-green-600">{story.benefit}</p>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-purple-600 font-medium">{story.achievement}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Transformations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Community Transformations
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Witness the dramatic positive changes in communities through our comprehensive programs
            </p>
          </AnimatedSection>

          <div className="space-y-16 sm:space-y-20">
            {communityTransformations.map((transformation, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`space-y-6 sm:space-y-8 px-4 sm:px-0 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {transformation.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6">{transformation.description}</p>
                      <div className="flex items-center text-gray-600 mb-6 sm:mb-8">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="text-sm sm:text-base">
                          Transformation completed in {transformation.timeframe}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 sm:gap-6">
                      {transformation.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: idx * 0.1 }}
                          className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100"
                        >
                          <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                          <div className="text-xs sm:text-sm text-gray-700">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 h-64 sm:h-80 lg:h-96">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={transformation.beforeImage || "/placeholder.svg"}
                          alt="Before transformation"
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                        />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                          Before
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={transformation.afterImage || "/placeholder.svg"}
                          alt="After transformation"
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          quality={85}
                        />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                          After
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Global Reach</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Making a difference across continents with localized solutions and global impact
            </p>
          </AnimatedSection>

          {/* World Map Visualization */}
          <AnimatedSection className="mb-12 sm:mb-16">
            <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-6 sm:p-8 backdrop-blur-lg border border-white/10">
              <div className="text-center mb-6 sm:mb-8">
                <Image
                  src="/images/impact-hero-1.jpg"
                  alt="Global network visualization"
                  width={1200}
                  height={800}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl opacity-70"
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-2">53 Countries</h3>
                    <p className="text-lg sm:text-xl text-gray-300">Across 4 Continents</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {globalReach.map((region, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-bold mb-2 ${region.color}`}>{region.beneficiaries}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{region.region}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{region.countries} Countries</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Vision for the Future</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto px-4">
              Ambitious goals that will shape the next decade of digital empowerment and community transformation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {futureGoals.map((goal, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 text-center h-full"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${goal.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                  >
                    {React.createElement(goal.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{goal.title}</h3>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{goal.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Help Us Reach These Goals</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm sm:text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Join Our Mission
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-white text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-white/20 backdrop-blur-lg text-white font-bold text-sm sm:text-lg rounded-full hover:bg-white/30 transition-all duration-300"
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

export default ImpactPage
