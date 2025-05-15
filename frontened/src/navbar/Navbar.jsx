import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO.png'
import { FaHome, FaUserTie, FaGavel, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { 
  Gavel, 
  Building2, 
  FileCheck, 
  Scale, 
  Users, 
  HeartCrack, 
  ShieldCheck, 
  Scroll, 
  Briefcase, 
  Coins, 
  Brain, 
  Home, 
  Landmark, 
  Building, 
  Globe, 
  FileText
} from "lucide-react"

// Legal services data
const legalServices = [
  { 
    id: 1,
    title: "Criminal Defense", 
    path: "/criminal-defense",
    icon: Gavel
  },
  { 
    id: 2,
    title: "Corporate & Business Law", 
    path: "/corporate-business-law",
    icon: Building2
  },
  { 
    id: 3,
    title: "Cheque Bounce Cases", 
    path: "/cheque-bounce",
    icon: FileCheck
  },
  { 
    id: 4,
    title: "High Court Representation", 
    path: "/high-court-representation",
    icon: Scale
  },
  { 
    id: 5,
    title: "Family Law", 
    path: "/family-law",
    icon: Users
  },
  { 
    id: 6,
    title: "Divorce & Separation", 
    path: "/divorce-separation",
    icon: HeartCrack
  },
  { 
    id: 7,
    title: "Bail & Anticipatory Bail", 
    path: "/bail",
    icon: ShieldCheck
  },
  { 
    id: 8,
    title: "Court Marriage & Registration", 
    path: "/court-marriage",
    icon: Scroll
  },
  { 
    id: 9,
    title: "Employment & Labour Law", 
    path: "/employment-law",
    icon: Briefcase
  },
  { 
    id: 10,
    title: "Debt Recovery", 
    path: "/debt-recovery",
    icon: Coins
  },
  { 
    id: 11,
    title: "Intellectual Property Rights", 
    path: "/ip-rights",
    icon: Brain
  },
  { 
    id: 12,
    title: "Property & Land Disputes", 
    path: "/property-disputes",
    icon: Home
  },
  { 
    id: 13,
    title: "Civil Litigation", 
    path: "/civil-litigation",
    icon: Landmark
  },
  { 
    id: 14,
    title: "Company Law & NCLT Cases",
    path: "/company-law-nclt",
    icon: Building
  },
  { 
    id: 15,
    title: "Cyber Law",
    path: "/cyber-law",
    icon: Globe
  },
  { 
    id: 16,
    title: "Legal Advisory", 
    path: "/legal-advisory",
    icon: FileText
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownOpen && !event.target.closest('.service-dropdown')) {
        setServiceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [serviceDropdownOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <motion.header 
      className="fixed top-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 70, 
        damping: 20,
        mass: 1
      }}
    >
      {/* Top black header - now static */}
      <div className="bg-[#0B1926] text-white px-4 py-2 flex justify-between items-center">
        <motion.div 
          className="font-bold cursor-pointer"
          whileHover={{ 
            color: "#BC5B44",
            scale: 1.03,
            x: 3,
            textShadow: "0 0 8px rgba(188, 91, 68, 0.3)" 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }}
        >
          Jimit Thakore
        </motion.div>
        <div className="flex items-center space-x-4">
          <motion.a 
            href="mailto:lawyermodi@gmail.com" 
            className="flex items-center text-sm md:text-base group"
            whileHover={{ 
              color: "#BC5B44", 
              x: 3,
              scale: 1.05
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 17 
            }}
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
            <span className="hidden sm:inline group-hover:underline">thakorejimit5619@gmail.com</span>
          </motion.a>
          <motion.a 
            href="tel:+911234567895" 
            className="flex items-center text-sm md:text-base group"
            whileHover={{ 
              color: "#BC5B44",
              x: 3,
              scale: 1.05
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 17 
            }}
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 mr-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              whileHover={{ rotate: -10, scale: 1.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </motion.svg>
            <span className="hidden sm:inline group-hover:underline">+91-8128257961</span>
          </motion.a>
        </div>
      </div>
      
      {/* Main navigation bar - now with constant shadow */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <motion.div 
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 17 
          }}
        >
          <Link to="/" className="flex items-center">
            <motion.img 
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
            />
          </Link>
        </motion.div>
        
        {/* Desktop Navigation with enhanced hover effects */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive('/')}> <FaHome className="inline mr-2 mb-1" /> Home </NavLink>
          <NavLink to="/about" isActive={isActive('/about')}> <FaUserTie className="inline mr-2 mb-1" /> About </NavLink>
          
          {/* Service Dropdown */}
          <div className="relative service-dropdown">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 15 
              }}
            >
              <div className="flex items-center">
                <Link 
                  to="/service"
                  className={`relative px-2 py-1 group flex items-center ${
                    isActive('/service') ? 'text-[#BC5B44]' : 'text-black'
                  }`}
                >
                  <FaGavel className="inline mr-2 mb-1" />
                  <span>Services</span>
                </Link>
                <button 
                  onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                  className="p-1 hover:text-[#BC5B44] transition-colors duration-200"
                >
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
            </motion.div>

            <AnimatePresence>
              {serviceDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-[280px] sm:w-[320px] bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <Link
                      to="/service"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#BC5B44] hover:text-white transition-colors duration-200 border-b border-gray-100"
                      onClick={() => setServiceDropdownOpen(false)}
                    >
                      <FaGavel className="h-5 w-5 mr-3" />
                      <span className="text-sm font-medium">All Services</span>
                    </Link>
                    {legalServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#BC5B44] hover:text-white transition-colors duration-200"
                          onClick={() => setServiceDropdownOpen(false)}
                        >
                          <Icon className="h-5 w-5 mr-3" />
                          <span className="text-sm">{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/career" isActive={isActive('/career')}> <FaGraduationCap className="inline mr-2 mb-1" /> Career </NavLink>
          <NavLink to="/contact" isActive={isActive('/contact')}>
            <FaEnvelope className="inline mr-2 mb-1" /> Contact
          </NavLink>
        </div>
        
        {/* Mobile Navigation Button with enhanced hover */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMobileMenu} 
            className="focus:outline-none p-2 rounded-full"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(0,0,0,0.05)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <svg 
                className="w-6 h-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                  animate={mobileMenuOpen ? {
                    d: ["M4 6h16M4 12h16M4 18h16", "M6 6L18 18M12 12h0M6 18L18 6"],
                    pathLength: [1, 0.8, 1]
                  } : {
                    d: ["M6 6L18 18M12 12h0M6 18L18 6", "M4 6h16M4 12h16M4 18h16"],
                    pathLength: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut" 
                  }}
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu with improved animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white overflow-hidden shadow-lg"
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 0.3 },
              y: { duration: 0.3 }
            }}
          >
            <motion.div
              variants={{
                open: { 
                  transition: { 
                    staggerChildren: 0.07,
                    delayChildren: 0.1
                  } 
                },
                closed: { 
                  transition: { 
                    staggerChildren: 0.05, 
                    staggerDirection: -1 
                  } 
                }
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="py-2"
            >
              <MobileNavLink to="/about" isActive={isActive('/about')}> <FaUserTie className="inline mr-2 mb-1" /> About </MobileNavLink>
              
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/service"
                    className={`w-full text-left py-3 px-4 text-sm transition-all duration-300 flex items-center ${
                      isActive('/service') 
                        ? 'bg-blue-50 text-[#BC5B44] border-l-4 border-[#BC5B44] pl-6' 
                        : 'hover:bg-gray-50 hover:text-[#BC5B44] hover:border-l-4 hover:border-[#BC5B44] hover:pl-6'
                    }`}
                  >
                    <FaGavel className="inline mr-2 mb-1" /> Services
                  </Link>
                  <button 
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="p-3 hover:text-[#BC5B44] transition-colors duration-200"
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                </div>

                <AnimatePresence>
                  {serviceDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <Link
                        to="/service"
                        className="block py-2 px-8 text-sm text-gray-700 hover:bg-[#BC5B44] hover:text-white transition-colors duration-200 border-b border-gray-200"
                        onClick={() => {
                          setServiceDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <FaGavel className="h-4 w-4 mr-2" />
                          <span className="font-medium">All Services</span>
                        </div>
                      </Link>
                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {legalServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.id}
                              to={service.path}
                              className="block py-2 px-8 text-sm text-gray-700 hover:bg-[#BC5B44] hover:text-white transition-colors duration-200"
                              onClick={() => {
                                setServiceDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              <div className="flex items-center">
                                <Icon className="h-4 w-4 mr-2" />
                                <span>{service.title}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileNavLink to="/career" isActive={isActive('/career')}> <FaGraduationCap className="inline mr-2 mb-1" /> Career </MobileNavLink>
              <MobileNavLink to="/contact" isActive={isActive('/contact')}> <FaEnvelope className="inline mr-2 mb-1" /> Contact </MobileNavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #BC5B44 #f3f4f6;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #BC5B44;
          border-radius: 3px;
        }
        @media (max-width: 640px) {
          .service-dropdown {
            position: static;
          }
        }
      `}</style>
    </motion.header>
  );
};


const NavLink = ({ to, children, isActive }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 15 
      }}
    >
      <Link 
        to={to} 
        className={`relative px-2 py-1 group ${isActive ? 'text-[#BC5B44]' : 'text-black'}`}
      >
        <span className="relative z-10">
          {children}
        </span>
        <span 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#BC5B44] transition-transform duration-300"
          style={{
            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        ></span>
      </Link>
    </motion.div>
  );
};

// Mobile Navigation Link Component with enhanced hover effects
const MobileNavLink = ({ to, children, isActive }) => {
  return (
    <motion.div
      variants={{
        open: { 
          opacity: 1, 
          y: 0,
          transition: {
            y: { 
              type: "spring", 
              stiffness: 400, 
              damping: 20 
            },
            opacity: { duration: 0.2 }
          }
        },
        closed: { 
          opacity: 0, 
          y: -15,
          transition: {
            y: { duration: 0.2 },
            opacity: { duration: 0.15 }
          }
        }
      }}
    >
      <Link 
        to={to} 
        className={`block py-3 px-4 text-sm transition-all duration-300 ${
          isActive 
            ? 'bg-blue-50 text-[#BC5B44] border-l-4 border-[#BC5B44] pl-6' 
            : 'hover:bg-gray-50 hover:text-[#BC5B44] hover:border-l-4 hover:border-[#BC5B44] hover:pl-6'
        }`}
      >
        <motion.div
          whileHover={{ 
            x: 5,
            textShadow: "0 0 1px rgba(188,91,68,0.2)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 17 
          }}
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Navbar;
