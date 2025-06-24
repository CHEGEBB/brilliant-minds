"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  BookOpen,
  Users,
  Globe,
  Calendar,
  Award,
  TrendingUp,
  Video,
  MessageCircle,
  Star,
  Clock,
  Target,
  CheckCircle,
  PlayCircle,
  UserCheck,
  Briefcase,
  Code,
  Lightbulb,
  Network,
  ArrowRight,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const SkillDevelopmentPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroParallax = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Master Market-Relevant Skills",
      subtitle: "Self-Paced Learning Excellence",
      description:
        "Comprehensive skill development programs designed to equip freelancers and professionals with cutting-edge capabilities for the digital economy.",
      stats: "15,000+ Skills Mastered",
      icon: BookOpen,
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Interactive Learning Experience",
      subtitle: "Live Webinars & Workshops",
      description:
        "Connect with industry leaders through interactive sessions, gaining practical insights and networking opportunities from global experts.",
      stats: "500+ Expert Sessions",
      icon: Video,
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Global Learning Community",
      subtitle: "Worldwide Knowledge Exchange",
      description:
        "Join a diverse community of learners from 80+ countries, sharing experiences and building professional networks across continents.",
      stats: "80+ Countries Connected",
      icon: Globe,
    },
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Certified Skill Pathways",
      subtitle: "Industry-Recognized Credentials",
      description:
        "Earn certificates that matter in today's job market, with pathways designed by industry professionals and validated by employers.",
      stats: "95% Employment Rate",
      icon: Award,
    },
  ]

  const learningBenefits = [
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description: "AI-driven curriculum tailored to your career goals and skill level",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with 24/7 access to all course materials",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: UserCheck,
      title: "Expert Mentorship",
      description: "One-on-one guidance from industry professionals and successful freelancers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn recognized credentials that boost your professional credibility",
      color: "from-orange-500 to-red-500",
    },
  ]

  const courseCategories = [
    {
      icon: Briefcase,
      title: "Freelancing Essentials",
      description: "Master the fundamentals of successful freelancing",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-emerald-600/90 to-teal-600/90",
      courses: 12,
      duration: "40 hours",
      level: "Beginner to Advanced",
      skills: ["Client Communication", "Project Management", "Pricing Strategies", "Portfolio Building"],
      rating: 4.9,
      students: "8,500+",
    },
    {
      icon: Code,
      title: "Digital Tools Mastery",
      description: "Advanced proficiency in essential digital tools and platforms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-blue-600/90 to-indigo-600/90",
      courses: 18,
      duration: "60 hours",
      level: "Intermediate",
      skills: ["Design Software", "Development Tools", "Analytics Platforms", "Automation Tools"],
      rating: 4.8,
      students: "12,300+",
    },
    {
      icon: Users,
      title: "Professional Soft Skills",
      description: "Essential interpersonal and leadership capabilities",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-purple-600/90 to-pink-600/90",
      courses: 15,
      duration: "35 hours",
      level: "All Levels",
      skills: ["Communication", "Leadership", "Problem Solving", "Time Management"],
      rating: 4.9,
      students: "9,800+",
    },
  ]

  const webinarFeatures = [
    {
      icon: MessageCircle,
      title: "Live Q&A Sessions",
      description: "Direct interaction with industry experts and get your questions answered in real-time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Stay updated with the latest trends, technologies, and opportunities in your field",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with like-minded professionals and expand your professional network",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Lightbulb,
      title: "Practical Case Studies",
      description: "Learn from real-world examples and apply knowledge to your own projects",
      color: "from-orange-500 to-red-500",
    },
  ]

  const globalTestimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The digital tools mastery course transformed my design workflow. I increased my project efficiency by 300% and landed my dream remote job.",
      rating: 5,
      course: "Digital Tools Mastery",
      flag: "🇸🇬",
    },
    {
      name: "Carlos Rodriguez",
      location: "Mexico City, Mexico",
      role: "Full-Stack Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The freelancing essentials program gave me the confidence and skills I needed to start my own development consultancy. Revenue grew 400% in 6 months.",
      rating: 5,
      course: "Freelancing Essentials",
      flag: "🇲🇽",
    },
    {
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      role: "Digital Marketing Specialist",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote:
        "The soft skills training helped me become a better team leader. I was promoted to senior manager within 8 months of completing the course.",
      rating: 5,
      course: "Professional Soft Skills",
      flag: "🇳🇬",
    },
  ]

  const upcomingEvents = [
    {
      date: "15",
      month: "Jan",
      title: "Mastering Client Communication",
      description: "Learn effective strategies for client relationship management",
      time: "2:00 PM - 4:00 PM EST",
      instructor: "Sarah Johnson",
      category: "Communication",
      color: "from-blue-500 to-blue-600",
      attendees: 245,
    },
    {
      date: "22",
      month: "Jan",
      title: "Digital Marketing Essentials",
      description: "Comprehensive guide to modern digital marketing strategies",
      time: "10:00 AM - 12:00 PM EST",
      instructor: "Mike Chen",
      category: "Marketing",
      color: "from-green-500 to-green-600",
      attendees: 189,
    },
    {
      date: "28",
      month: "Jan",
      title: "Pricing Your Freelance Services",
      description: "Learn how to price your services competitively while ensuring profitability",
      time: "3:00 PM - 5:00 PM EST",
      instructor: "Lisa Rodriguez",
      category: "Business",
      color: "from-yellow-500 to-orange-500",
      attendees: 156,
    },
    {
      date: "05",
      month: "Feb",
      title: "Portfolio Development Workshop",
      description: "Create a compelling portfolio that showcases your skills and attracts clients",
      time: "1:00 PM - 4:00 PM EST",
      instructor: "David Kim",
      category: "Portfolio",
      color: "from-purple-500 to-purple-600",
      attendees: 203,
    },
  ]

  const impactMetrics = [
    {
      number: "25,000+",
      label: "Students Trained",
      description: "Professionals skilled globally",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "500+",
      label: "Expert Instructors",
      description: "Industry professionals teaching",
      icon: UserCheck,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "Students finding work post-training",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "80+",
      label: "Countries Reached",
      description: "Global learning community",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(heroInterval)
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

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
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

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: heroParallax }} className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroSlides[currentHeroIndex].image})` }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/65 to-blue-600/75" />
        </motion.div>

        {/* Floating Learning Notifications */}
        <div className="absolute top-40 z-50 inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={0}>
            <div className="absolute top-20 right-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Certificate Earned!</p>
                  <p className="text-xs text-gray-600">Digital Marketing Mastery</p>
                </div>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={2}>
            <div className="absolute bottom-32 left-16 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Live Webinar Starting</p>
                  <p className="text-xs text-gray-600">245 participants joined</p>
                </div>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement delay={4}>
            <div className="absolute top-136 right-80 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Skill Level Up!</p>
                  <p className="text-xs text-gray-600">Advanced JavaScript</p>
                </div>
              </div>
            </div>
          </FloatingElement>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
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
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      {React.createElement(heroSlides[currentHeroIndex].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        {heroSlides[currentHeroIndex].title}
                      </h1>
                      <p className="text-2xl text-emerald-300 font-semibold">{heroSlides[currentHeroIndex].subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                    {heroSlides[currentHeroIndex].description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-3">
                      <span className="text-lg font-bold">{heroSlides[currentHeroIndex].stats}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300"
                    >
                      Start Learning Today
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      View Course Catalog
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Visual Side - Course Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">Course Dashboard</h3>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-semibold">Current Progress</span>
                            <span className="text-emerald-300">75%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span className="text-white text-sm">Freelancing Basics</span>
                            </div>
                            <span className="text-emerald-300 text-sm">Completed</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <PlayCircle className="w-5 h-5 text-blue-400" />
                              <span className="text-white text-sm">Client Communication</span>
                            </div>
                            <span className="text-blue-300 text-sm">In Progress</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <Clock className="w-5 h-5 text-gray-400" />
                              <span className="text-white text-sm">Portfolio Building</span>
                            </div>
                            <span className="text-gray-300 text-sm">Upcoming</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">Next Live Session</p>
                          <p className="text-emerald-300 text-sm">Advanced Pricing Strategies</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-sm">Tomorrow</p>
                          <p className="text-emerald-300 text-sm">2:00 PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Small Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Skill Development</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach to skill development combines personalized learning paths, expert mentorship,
              and industry-recognized certifications to accelerate your professional growth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningBenefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {React.createElement(benefit.icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Course Offerings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of skill development courses designed to help you thrive in the digital
              economy
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {courseCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        {React.createElement(category.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-emerald-600 font-semibold">
                          {category.courses} Courses • {category.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">{category.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-700 font-semibold">{category.rating}</span>
                      </div>
                      <div className="text-gray-600">
                        <Users className="w-5 h-5 inline mr-2" />
                        {category.students} students
                      </div>
                      <div className="text-gray-600">
                        <Award className="w-5 h-5 inline mr-2" />
                        {category.level}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      Explore {category.title}
                      <ArrowRight className="w-5 h-5 inline ml-2" />
                    </motion.button>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4">
                          <h4 className="text-white font-bold text-lg mb-2">{category.title}</h4>
                          <div className="flex items-center justify-between text-white/90 text-sm">
                            <span>{category.courses} Courses</span>
                            <span>{category.duration}</span>
                            <span>{category.students} Students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Webinars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Interactive Webinars"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/30" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">LIVE</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">Advanced Freelancing Strategies</p>
                      <p className="text-sm text-gray-600">245 participants • 1h 30m remaining</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Video className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Interactive Learning Webinars</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mb-8" />
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join our live interactive sessions led by industry leaders and experts. These webinars provide
                    valuable insights, practical tips, and the opportunity to connect with professionals worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {webinarFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
                >
                  View Upcoming Webinars
                  <Calendar className="w-5 h-5 inline ml-2" />
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Global Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals around the world who have transformed their careers through our skill development
              programs
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {globalTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-700">{testimonial.course}</span>
                    </div>
                    <div className="absolute top-4 left-4 text-2xl">{testimonial.flag}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-emerald-600 font-semibold">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Upcoming Learning Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our upcoming sessions, workshops, and skill development sessions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{event.date}</div>
                      <div className="text-lg font-semibold opacity-90">{event.month}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {event.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <UserCheck className="w-4 h-4 mr-2" />
                        <span>{event.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Register Now
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Learning Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics that demonstrate the effectiveness of our skill development programs
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Enhance Your Skills?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8" />
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-12">
              Join thousands of professionals who have transformed their careers through our comprehensive skill
              development programs. Start your learning journey today and unlock your potential in the digital economy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
              >
                Sign Up for a Course
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-emerald-900 transition-all duration-300"
              >
                View Upcoming Webinars
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SkillDevelopmentPage
