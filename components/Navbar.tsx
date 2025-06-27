"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, Search, X, Home, Users, Lightbulb, HandHeart, TrendingUp, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const solutionsItems = [
    { title: "Digital Inclusion", href: "/solutions/digital-inclusion", icon: Lightbulb },
    { title: "E-Learning", href: "/solutions/e-learning", icon: Users },
    { title: "Gig Economy", href: "/solutions/gig-economy", icon: TrendingUp },
    { title: "Skill Development", href: "/solutions/skill-development", icon: HandHeart },
  ]

  const navItems = [
    { title: "Home", href: "/", hasDropdown: false, icon: Home },
    { title: "About", href: "/about", hasDropdown: false, icon: Users },
    { title: "Solutions", href: "/solutions", hasDropdown: true, icon: Lightbulb },
    { title: "Get-Involved", href: "/get-involved", hasDropdown: false, icon: HandHeart },
    { title: "Impact", href: "/impact", hasDropdown: false, icon: TrendingUp },
    { title: "Contact", href: "/contact", hasDropdown: false, icon: Mail },
  ]

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20 py-2 shadow-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image
                src="/assets/logo.png"
                alt="Brilliant Minds Logo"
                width={180}
                height={40}
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                        isActiveRoute(item.href)
                          ? "text-white"
                          : isScrolled
                            ? "text-white hover:text-cyan-400"
                            : "text-white hover:text-cyan-400"
                      } hover:bg-white/10`}
                      onMouseEnter={() => {
                        setIsSolutionsOpen(true)
                        setHoveredItem(item.title)
                      }}
                      onMouseLeave={() => {
                        setIsSolutionsOpen(false)
                        setHoveredItem(null)
                      }}
                    >
                      <item.icon size={18} className="mr-2" />
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`ml-2 transition-transform duration-300 ${
                          isSolutionsOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />

                      {/* Animated underline */}
                      {(isActiveRoute(item.href) || hoveredItem === item.title) && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                      isActiveRoute(item.href)
                        ? "text-white"
                        : isScrolled
                          ? "text-white hover:text-cyan-400"
                          : "text-white hover:text-cyan-400"
                    } hover:bg-white/10`}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <item.icon size={18} className="mr-2" />
                    {item.title}

                    {/* Animated underline */}
                    {(isActiveRoute(item.href) || hoveredItem === item.title) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )}

                {/* Solutions Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 ring-1 ring-black/5 focus:outline-none overflow-hidden"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="py-2">
                          {solutionsItems.map((solution) => (
                            <Link
                              key={solution.title}
                              href={solution.href}
                              className="flex items-center px-4 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group"
                            >
                              <solution.icon
                                size={16}
                                className="mr-3 text-cyan-400 group-hover:text-white transition-colors"
                              />
                              <div>
                                <div className="font-medium">{solution.title}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Enhanced Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2.5 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <Search size={18} className="group-hover:text-cyan-400 transition-colors" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-1">
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex items-center py-3 px-3 rounded-lg transition-all duration-300 ${
                            isActiveRoute(item.href)
                              ? "text-white"
                              : "text-white hover:text-cyan-400 hover:bg-white/10"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon size={18} className="mr-3" />
                          {item.title}
                        </Link>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                          onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              isSolutionsOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {isSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-1"
                          >
                            {solutionsItems.map((solution) => (
                              <Link
                                key={solution.title}
                                href={solution.href}
                                className="flex items-center py-2 px-3 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <solution.icon size={16} className="mr-3" />
                                {solution.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center py-3 px-3 rounded-lg transition-all duration-300 ${
                        isActiveRoute(item.href)
                          ? "text-white"
                          : "text-white hover:text-cyan-400 hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={18} className="mr-3" />
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-transparent border-2 border-white/30 text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Search size={18} className="mr-2" />
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar