"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Heart,
  Lightbulb,
  Users,
  Globe,
  Award,
  Zap,
  Handshake,
  ArrowRight,
  Quote,
  Star,
  MapPin,
  TrendingUp,
  BookOpen,
  Briefcase,
  Wifi,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const AboutPage = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentTeamMember, setCurrentTeamMember] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creative thinking and novel approaches to solve complex challenges facing underserved communities.",
      color: "from-yellow-400 to-orange-500",
      bgImage: "/images/about-mission.jpg",
      stats: "50+ Innovative Solutions",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "We believe in the power of partnership and work closely with communities to create solutions that truly meet their needs.",
      color: "from-blue-400 to-purple-500",
      bgImage: "/images/about-team-1.jpg",
      stats: "200+ Active Partners",
    },
    {
      icon: Zap,
      title: "Empowerment",
      description:
        "We focus on building capacity and empowering individuals to create lasting impact and self-sufficiency.",
      color: "from-green-400 to-teal-500",
      bgImage: "/images/about-team-2.jpg",
      stats: "2.5M+ Lives Empowered",
    },
    {
      icon: Heart,
      title: "Equity",
      description:
        "We are committed to fair access and opportunity, ensuring our solutions address systemic barriers and promote inclusion.",
      color: "from-pink-400 to-red-500",
      bgImage: "/images/about-team-3.jpg",
      stats: "95% Equity Score",
    },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in social impact technology. Former Google executive passionate about digital equity.",
      image: "/images/about-team-1.jpg",
      expertise: ["Strategic Leadership", "Social Impact", "Technology Innovation"],
      achievements: "Led 3 successful social enterprises",
      location: "San Francisco, CA",
    },
    {
      name: "Jane Doe",
      role: "Chief Technology Officer",
      bio: "AI and machine learning expert dedicated to creating accessible technology solutions for underserved communities.",
      image: "/images/about-team-2.jpg",
      expertise: ["AI/ML", "Software Architecture", "Digital Accessibility"],
      achievements: "Published 25+ research papers",
      location: "Austin, TX",
    },
    {
      name: "David Smith",
      role: "Head of Community Impact",
      bio: "Community organizer and social entrepreneur with deep experience in grassroots development and digital inclusion.",
      image: "/images/about-team-3.jpg",
      expertise: ["Community Development", "Program Management", "Partnership Building"],
      achievements: "Impacted 500K+ individuals",
      location: "New York, NY",
    },
    {
      name: "Maria Rodriguez",
      role: "Director of Education",
      bio: "Former educator and curriculum designer focused on creating inclusive learning experiences for diverse populations.",
      image: "/images/about-team-4.jpg",
      expertise: ["Educational Design", "Curriculum Development", "Learning Analytics"],
      achievements: "Designed 100+ courses",
      location: "Mexico City, MX",
    },
  ]

  const impactMetrics = [
    { number: "25+", label: "Communities Served", icon: Users },
    { number: "10,000+", label: "People Empowered", icon: TrendingUp },
    { number: "45+", label: "Technology Centers", icon: Globe },
    { number: "18", label: "Countries Reached", icon: MapPin },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Foundation Established",
      description: "BrilliantMinds was founded with a mission to bridge the digital divide",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "First Digital Inclusion Program",
      description: "Launched our flagship program serving 1,000 individuals in underserved communities",
      icon: Wifi,
    },
    {
      year: "2021",
      title: "E-Learning Platform Launch",
      description: "Introduced innovative microlearning platform with 50+ courses",
      icon: BookOpen,
    },
    {
      year: "2022",
      title: "Gig Economy Integration",
      description: "Launched AI-powered platform connecting freelancers with verified opportunities",
      icon: Briefcase,
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 18 countries, impacting over 2.5M lives",
      icon: Globe,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % coreValues.length)
    }, 4000)

    const teamInterval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(teamInterval)
    }
  }, [coreValues.length, teamMembers.length])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About BrilliantMinds"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 sm:py-24 lg:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white space-y-6 sm:space-y-8 pt-8 sm:pt-12 md:pt-0"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
                >
                  <span className="text-xs sm:text-sm font-medium">About BrilliantMinds</span>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Transforming Communities Through{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Technology
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold">
                  Creating Opportunities for Underserved Populations
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  We empower marginalized communities by bridging the digital divide and fostering equitable
                  opportunities through innovation, collaboration, and sustainable solutions.
                </p>

                <div className="flex items-center space-x-4 sm:space-x-6 py-2">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full px-4 py-2 sm:px-6 sm:py-3">
                    <span className="text-sm sm:text-lg font-bold">2.5M+ Lives Impacted</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full hover:shadow-2xl transition-all duration-300"
                  >
                    Join Our Mission
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-sm sm:text-base rounded-full hover:bg-white/30 transition-all duration-300"
                  >
                    Meet Our Team
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-80 lg:h-[400px] xl:h-[500px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-hero.jpg"
                    alt="About BrilliantMinds"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute top-6 -right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">2.5M+</p>
                      <p className="text-xs sm:text-sm text-gray-600">Lives Impacted</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">18</p>
                      <p className="text-xs sm:text-sm text-gray-600">Countries</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 sm:mb-8" />
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    To empower marginalized communities by bridging the digital divide and fostering equitable
                    opportunities through innovation, collaboration, and sustainable solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg text-gray-700 italic mb-3 sm:mb-4">
                    &quot;We work tirelessly to create sustainable solutions that address real needs, build capacity
                    within communities, and create pathways to opportunity that might otherwise remain closed.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm sm:text-base">BM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">BrilliantMinds Team</p>
                      <p className="text-xs sm:text-sm text-gray-600">Collective Vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-mission.jpg"
                    alt="Team collaboration"
                    width={800}
                    height={600}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">2.5M+</p>
                      <p className="text-xs sm:text-sm text-gray-600">Lives Impacted</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Vision Section */}
          <AnimatedSection className="mt-16 sm:mt-20">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                What We Aspire To
              </h3>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12 px-4">
                A world where access to technology, education, and dignified work is universal and impactful for every
                individual and community.
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: Globe,
                    title: "Universal Access",
                    description: "Technology and education available to everyone, everywhere",
                  },
                  {
                    icon: Users,
                    title: "Community Empowerment",
                    description: "Local communities leading their own digital transformation",
                  },
                  {
                    icon: TrendingUp,
                    title: "Sustainable Impact",
                    description: "Long-term solutions that create lasting positive change",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">What We Stand For</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Our core values define how we work and guide our decisions as we pursue our mission of digital equity.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Dynamic Value Display */}
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentValueIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={coreValues[currentValueIndex].bgImage || "/placeholder.svg"}
                    alt={coreValues[currentValueIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${coreValues[currentValueIndex].color} opacity-80`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        {React.createElement(coreValues[currentValueIndex].icon, {
                          className: "w-8 h-8 sm:w-10 sm:h-10",
                        })}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        {coreValues[currentValueIndex].title}
                      </h3>
                      <p className="text-base sm:text-lg mb-4 sm:mb-6 max-w-md mx-auto">
                        {coreValues[currentValueIndex].description}
                      </p>
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="text-xs sm:text-sm font-semibold">{coreValues[currentValueIndex].stats}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentValueIndex(index)}
                  className={`p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-lg border ${
                    currentValueIndex === index
                      ? "bg-white/20 border-white/30 shadow-lg"
                      : "bg-white/10 border-white/20 hover:bg-white/15"
                  }`}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mr-3 sm:mr-4`}
                    >
                      {React.createElement(value.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">{value.title}</h4>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {value.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center text-blue-300 text-xs sm:text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet The Brilliant Minds
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our diverse team brings together expertise in technology, community development, education, and social
              impact.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Featured Team Member */}
            <AnimatedSection>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTeamMember}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-64 sm:h-80">
                      <Image
                        src={teamMembers[currentTeamMember].image || "/placeholder.svg"}
                        alt={teamMembers[currentTeamMember].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">{teamMembers[currentTeamMember].name}</h3>
                        <p className="text-blue-200 text-sm sm:text-base">{teamMembers[currentTeamMember].role}</p>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        {teamMembers[currentTeamMember].bio}
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500" />
                          <span className="text-xs sm:text-sm">{teamMembers[currentTeamMember].location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-500" />
                          <span className="text-xs sm:text-sm">{teamMembers[currentTeamMember].achievements}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {teamMembers[currentTeamMember].expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
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

            {/* Team Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentTeamMember(index)}
                  className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                    currentTeamMember === index ? "ring-4 ring-blue-500 shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <div className="relative h-32 sm:h-48">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white">
                      <h4 className="font-bold text-xs sm:text-sm">{member.name}</h4>
                      <p className="text-xs text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/about-team-1.jpg"
                  autoPlay={isVideoPlaying}
                >
                  <source src="/assets/team.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleVideo}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                    )}
                  </motion.button>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Meet Our Team</h3>
                  <p className="text-gray-200 text-sm sm:text-base">
                    Discover the passionate individuals driving our mission forward
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Journey</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From humble beginnings to global impact - the milestones that shaped our mission.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600" />

            {milestones.map((milestone, index) => (
              <AnimatedSection key={index}>
                <div className={`flex items-center mb-8 sm:mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-6 sm:pr-8 text-right" : "pl-6 sm:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ${index % 2 === 0 ? "ml-auto mr-3 sm:mr-4" : "mr-auto ml-3 sm:ml-4"}`}
                        >
                          {React.createElement(milestone.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                        </div>
                        <div className={index % 2 === 0 ? "text-right" : ""}>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{milestone.title}</h3>
                          <p className="text-blue-600 font-semibold text-sm sm:text-base">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white border-4 border-blue-500 rounded-full" />
                  </div>

                  <div className="w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-team-1.jpg" alt="Impact background" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Making A Difference</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Real numbers that demonstrate the positive change we&apos;re creating in communities worldwide.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactMetrics.map((metric, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {React.createElement(metric.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{metric.number}</h3>
                  <p className="text-gray-200 font-medium text-sm sm:text-base">{metric.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join Us In Making a Difference
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              Together, we can bridge digital divides and create opportunities for underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-purple-900 font-bold text-sm sm:text-base rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold text-sm sm:text-base rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Support Our Mission
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
