'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import "@/sass/Navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsItems = [
    { title: 'Digital Inclusion', href: '/solutions/digital-inclusion' },
    { title: 'E-Learning', href: '/solutions/e-learning' },
    { title: 'Gig Economy', href: '/solutions/gig-economy' },
    { title: 'Skill Development', href: '/solutions/skill-development' },
  ];

  const navItems = [
    { title: 'Home', href: '/', hasDropdown: false },
    { title: 'Solutions', href: '/solutions', hasDropdown: true },
    { title: 'Impact', href: '/impact', hasDropdown: false },
    { title: 'About', href: '/about', hasDropdown: false },
    { title: 'Contact', href: '/contact', hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Brilliant Minds Logo"
              width={180}
              height={40}
              className=""
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center group ${
                      isScrolled ? 'text-white' : 'text-white'
                    } hover:text-blue-400 transition-colors`}
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        isSolutionsOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`${
                      isScrolled ? 'text-white' : 'text-white'
                    } hover:text-blue-400 transition-colors`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Solutions Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="py-1">
                          {solutionsItems.map((solution) => (
                            <Link
                              key={solution.title}
                              href={solution.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {solution.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-2">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white hover:text-blue-400 transition-colors"
                        onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isSolutionsOpen ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {solutionsItems.map((solution) => (
                              <Link
                                key={solution.title}
                                href={solution.href}
                                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
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
                      className="block text-white hover:text-blue-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;