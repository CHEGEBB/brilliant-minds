"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Wifi,
  BookOpen,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Target,
  Shield,
  Brain,
  MapPin,
  Clock,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const SolutionsPage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ]

  const solutions = [
    {
      id: "digital-inclusion",
      icon: Wifi,
      title: "Digital Inclusion",
      subtitle: "Bridging the Digital Divide",
      description:
        "Providing devices, internet connectivity, and access to co-working spaces for marginalized communities to enable digital participation.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/90 to-cyan-900/90",
      features: [
        {
          icon: Smartphone,
          title: "Device Donation",
          description: "Partnering with organizations to supply digital devices",
        },
        {
          icon: Wifi,
          title: "Internet Connectivity",
          description: "Collaborating with telecom providers for affordable connectivity",
        },
        {
          icon: Brain,
          title: "AI Mapping Solutions",
          description: "Real-time analysis of regions with low connectivity",
        },
        {
          icon: MapPin,
          title: "Co-Working Spaces",
          description: "Directory of spaces equipped with internet and devices",
        },
      ],
      stats: { number: "2.5M+", label: "People Connected" },
      ctas: [
        { text: "Partner with Us", href: "/solutions/digital-inclusion/partner" },
        { text: "Donate a Device", href: "/solutions/digital-inclusion/donate" },
      ],
    },
    {
      id: "e-learning",
      icon: BookOpen,
      title: "E-Learning Revolution",
      subtitle: "Transforming Education",
      description:
        "Developing innovative microlearning platforms for fun and engaging education that makes quality learning accessible to everyone.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-900/90 to-emerald-900/90",
      features: [
        {
          icon: Clock,
          title: "Short Content Sessions",
          description: "Bite-sized lessons for effective learning",
        },
        {
          icon: Play,
          title: "Interactive Features",
          description: "Quizzes, videos, and progress tracking",
        },
        {
          icon: BookOpen,
          title: "Content Areas",
          description: "Academic topics, professional skills, and freelancing basics",
        },
        {
          icon: Award,
          title: "Certifications",
          description: "Industry-recognized certificates upon completion",
        },
      ],
      stats: { number: "150K+", label: "Skills Certified" },
      ctas: [
        { text: "Try a Demo", href: "/solutions/e-learning/demo" },
        { text: "Explore Content", href: "/solutions/e-learning/content" },
      ],
    },
    {
      id: "gig-economy",
      icon: Briefcase,
      title: "Gig Economy Integration",
      subtitle: "Verified Work Opportunities",
      description:
        "AI-powered platforms to provide equitable and verified work opportunities for freelancers with scam prevention and skill matching.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-900/90 to-violet-900/90",
      features: [
        {
          icon: MapPin,
          title: "Local Work Sourcing",
          description: "AI solutions to identify local digitization opportunities",
        },
        {
          icon: Globe,
          title: "International Work",
          description: "Verified gigs in high-demand fields worldwide",
        },
        {
          icon: Target,
          title: "Job Recommendations",
          description: "Personalized matches based on skills and preferences",
        },
        {
          icon: Shield,
          title: "Scam Prevention",
          description: "Automated checks to ensure safe work environments",
        },
      ],
      stats: { number: "95%", label: "Success Rate" },
      ctas: [
        { text: "Join Platform", href: "/solutions/gig-economy/join" },
        { text: "Explore Opportunities", href: "/solutions/gig-economy/opportunities" },
      ],
    },
    {
      id: "skill-development",
      icon: TrendingUp,
      title: "Skill Development",
      subtitle: "Market-Relevant Training",
      description:
        "Self-paced, tailored sessions designed to equip freelancers with market-relevant skills through courses and webinars.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900/90 to-red-900/90",
      features: [
        {
          icon: BookOpen,
          title: "Course Offerings",
          description: "Freelancing essentials, digital tools, and soft skills",
        },
        {
          icon: Users,
          title: "Live Webinars",
          description: "Interactive sessions with industry leaders",
        },
        {
          icon: Globe,
          title: "Global Exposure",
          description: "Insights and trends from international freelancers",
        },
        {
          icon: Award,
          title: "Certifications",
          description: "Industry-recognized credentials for career advancement",
        },
      ],
      stats: { number: "50+", label: "Countries Served" },
      ctas: [
        { text: "Sign Up for Course", href: "/solutions/skill-development/courses" },
        { text: "View Webinars", href: "/solutions/skill-development/webinars" },
      ],
    },
  ]

  const impactCards = [
    {
      title: "Real-World Transformation",
      description: "AI enables communities to improve their efficiency, profitability and sustainability outcomes.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-blue-600/90 to-purple-600/90",
    },
    {
      title: "Digital Innovation Hub",
      description: "Creating comprehensive digital solutions that address real community challenges.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-green-600/90 to-teal-600/90",
    },
    {
      title: "Enterprise-Grade Solutions",
      description: "Scalable platforms designed to grow with communities and organizations.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-purple-600/90 to-pink-600/90",
    },
    {
      title: "Smart Community Solutions",
      description: "IoT and AI solutions for building smarter, more connected communities.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-orange-600/90 to-red-600/90",
    },
    {
      title: "Global Business Services",
      description: "Comprehensive consulting and implementation services worldwide.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-indigo-600/90 to-blue-600/90",
    },
    {
      title: "Future-Ready Infrastructure",
      description: "Building tomorrow's digital infrastructure for sustainable growth.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      gradient: "from-teal-600/90 to-cyan-600/90",
    },
  ]

  const successStories = [
    {
      title: "Rural School Transformation",
      description:
        "A remote village school gained access to high-speed internet and digital devices, increasing student engagement by 300%.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "300% increase in engagement",
      location: "Rural Kenya",
    },
    {
      title: "From Student to Developer",
      description:
        "Our e-learning platform helped Maria transition from unemployment to becoming a senior software developer in 8 months.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "Career transformation",
      location: "São Paulo, Brazil",
    },
    {
      title: "Community Tech Hub",
      description:
        "A local community center became a thriving tech hub, providing digital services to over 5,000 residents monthly.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      impact: "5,000+ monthly users",
      location: "Detroit, USA",
    },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000) // Changed from 5000 to 3000 for faster cycling

    const solutionInterval = setInterval(() => {
      setCurrentSolutionIndex((prev) => (prev + 1) % solutions.length)
    }, 6000)

    const featureInterval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % impactCards.length)
    }, 4000)

    return () => {
      clearInterval(heroInterval)
      clearInterval(solutionInterval)
      clearInterval(featureInterval)
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Quick Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Quick Animated Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImages[currentHeroIndex]})` }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transforming communities through digital empowerment, education, and economic opportunities. Comprehensive
              solutions designed to create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#solutions"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Solutions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#impact"
                className="px-10 py-5 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                View Impact
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Digital Transformation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A holistic approach to digital inclusion that addresses the key challenges facing underserved communities
              through innovative technology solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection key={solution.id}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white  shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={800}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                    
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{solution.description.substring(0, 100)}...</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span
                          className={`font-bold text-2xl bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                        >
                          {solution.stats.number}
                        </span>
                        <p className="text-gray-500 text-xs">{solution.stats.label}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Solutions Showcase */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Dynamic Content */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSolutionIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${solutions[currentSolutionIndex].color} flex items-center justify-center`}
                    >
                      {React.createElement(solutions[currentSolutionIndex].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{solutions[currentSolutionIndex].title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{solutions[currentSolutionIndex].subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed">{solutions[currentSolutionIndex].description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {solutions[currentSolutionIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          {React.createElement(feature.icon, { className: "w-4 h-4 text-blue-600" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-gray-600 text-xs">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {solutions[currentSolutionIndex].ctas.map((cta, idx) => (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cta.href}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          idx === 0
                            ? `bg-gradient-to-r ${solutions[currentSolutionIndex].color} text-white hover:shadow-lg`
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {cta.text}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Image */}
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSolutionIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={solutions[currentSolutionIndex].image || "/placeholder.svg"}
                    alt={solutions[currentSolutionIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${solutions[currentSolutionIndex].bgGradient}`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        {React.createElement(solutions[currentSolutionIndex].icon, { className: "w-6 h-6" })}
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{solutions[currentSolutionIndex].stats.number}</p>
                        <p className="text-sm text-gray-200">{solutions[currentSolutionIndex].stats.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Solution Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSolutionIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSolutionIndex ? "bg-blue-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Cards Grid */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Impact Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how our comprehensive solutions create measurable impact across communities worldwide
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactCards.map((card, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-200 mb-4">{card.description}</p>
                    <div className="flex items-center text-white font-semibold">
                      <span className="text-sm">Find Out More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations happening in communities around the world through our solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="relative h-48">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-700">{story.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                      >
                        Read Full Story →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Transform your community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Transform Your Community?</h2>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with BrilliantMinds to bring digital empowerment, education, and economic opportunities to your
              community. Let's create lasting change together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Start Your Transformation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SolutionsPage
