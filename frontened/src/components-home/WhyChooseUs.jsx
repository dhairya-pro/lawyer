import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('why-choose-us-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const professionals = [
    {
      id: 1,
      title: "Unmatched Legal Expertise",
      description: "With years of dedicated practice in the field, I bring substantial expertise to every case I handle.",
      stats: "98% Success Rate",
      highlight: "25+ Years Experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Client-First Approach",
      description: "Your success is my priority, with personalized attention to every detail of your legal matter.",
      stats: "500+ Satisfied Clients",
      highlight: "24/7 Availability",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Innovative Legal Solutions",
      description: "Complex challenges require innovative approaches backed by proven legal expertise.",
      stats: "$100M+ Recovered",
      highlight: "Cutting-edge Approach",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 4,
      title: "Transparent Communication",
      description: "Clear, timely updates ensure you're always informed about your case progression.",
      stats: "100% Transparency",
      highlight: "Real-time Updates",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    }
  ];

  // Modified card variants using transform instead of separate scale and y properties
  const cardVariants = {
    initial: { 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transform: "scale(1) translateY(0)"
    },
    hover: { 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transform: "scale(1.03) translateY(-5px)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: [1, 1.2, 1.1],
      filter: "drop-shadow(0 0 8px rgba(188, 91, 68, 0.5))",
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // Title animation variants
  const titleVariants = {
    initial: { opacity: 0.9, y: 0 },
    animate: { 
      opacity: 1, 
      y: -2,
      transition: {
        duration: 0.5,
      }
    }
  };

  // Stats content animation variants
  const statsVariants = {
    initial: { opacity: 0, height: 0, y: -10 },
    animate: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <LayoutGroup>
      <div 
        id="why-choose-us-section"
        className="relative overflow-hidden py-20 px-4 bg-white"
        style={{ minHeight: "800px" }} // Fixed minimum height
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDE4Yy0xLjIzIDAtMi4yLTEuOTY4LTIuMi0zLjJWMjAuMmMwLTEuMjMyIDEuOTctMi4yIDMuMi0yLjJoMTd6IiBzdHJva2U9IiNFOEVBRUQiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgZmlsbD0iI0U4RUFFRCIgY3g9IjI3IiBjeT0iMzAiIHI9IjMiLz48L2c+PC9zdmc+')] opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : -30,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-serif font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.9,
                transition: { duration: 0.5, delay: 0.2 }
              }}
            >
              Why choose Us?
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-[#BC5B44] to-red-900 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: isVisible ? "8rem" : 0,
                transition: { duration: 0.8, delay: 0.5 }
              }}
            ></motion.div>
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isVisible ? 1 : 0,
                transition: { duration: 0.5, delay: 0.7 }
              }}
            >
              Experience legal representation that delivers results through expertise, dedication, and personalized attention.
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row relative">
            {/* Left column */}
            <div className="md:w-1/2 space-y-8 md:pr-12 relative">
              {professionals.slice(0, 2).map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    x: isVisible ? 0 : -50,
                    transition: { 
                      duration: 0.7, 
                      delay: 0.2 + (index * 0.15),
                      ease: [0.25, 0.1, 0.25, 1] 
                    }
                  }}
                  className="relative"
                  style={{ height: activeIndex === `left-${index}` ? "auto" : "auto", minHeight: "180px" }}
                >
                  {/* Card container with fixed height to prevent layout shifts */}
                  <div className="relative" style={{ minHeight: "180px" }}>
                    <motion.div 
                      className="relative z-10 p-6 rounded-lg border-l-4 border-[#BC5B44] bg-white overflow-hidden"
                      variants={cardVariants}
                      initial="initial"
                      whileHover="hover"
                      onHoverStart={() => setActiveIndex(`left-${index}`)}
                      onHoverEnd={() => setActiveIndex(null)}
                    >
                      {/* Animated background effect on hover */}
                      <AnimatePresence>
                        {activeIndex === `left-${index}` && (
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-[#BC5B44]/5 to-transparent z-0"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className="flex items-start relative z-10">
                        <div className="flex-shrink-0 mr-5">
                          <motion.div 
                            className="w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-[#BC5B44]/10 text-[#BC5B44]"
                            variants={iconVariants}
                            initial="initial"
                            whileHover="hover"
                            animate={activeIndex === `left-${index}` ? { 
                              scale: [1, 1.1, 1],
                              transition: { duration: 0.5 }
                            } : {}}
                          >
                            {item.icon}
                          </motion.div>
                        </div>
                        
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold text-gray-800 mb-2"
                            variants={titleVariants}
                            initial="initial"
                            animate={activeIndex === `left-${index}` ? "animate" : "initial"}
                          >
                            {item.title}
                          </motion.h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          
                          {/* Stats and highlights that appear on hover */}
                          <div style={{ height: activeIndex === `left-${index}` ? "auto" : "0", overflow: "hidden" }}>
                            <AnimatePresence>
                              {activeIndex === `left-${index}` && (
                                <motion.div 
                                  className="mt-4 pt-4 border-t border-gray-200"
                                  variants={statsVariants}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                >
                                  <div className="flex justify-between">
                                    <motion.div 
                                      className="flex items-center"
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                      <span className="text-[#BC5B44] mr-2">★</span>
                                      <span className="text-gray-700 font-semibold">{item.stats}</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center"
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                      <span className="text-[#BC5B44] mr-2">✓</span>
                                      <span className="text-gray-700 font-semibold">{item.highlight}</span>
                                    </motion.div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Vertical divider with enhanced animation */}
            <motion.div 
              className="hidden md:block w-px bg-gradient-to-b from-red-300 via-[#BC5B44] to-red-300 absolute left-1/2 top-0 bottom-0"
              initial={{ height: "0%", opacity: 0 }}
              animate={{ 
                height: isVisible ? "100%" : "0%", 
                opacity: isVisible ? 1 : 0
              }}
              transition={{ 
                height: { duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 0.8 }
              }}
            >
              {/* Animated pulse effect on the divider */}
              <motion.div 
                className="absolute w-2 h-2 bg-[#BC5B44] rounded-full left-1/2 transform -translate-x-1/2"
                animate={{ 
                  top: ["0%", "100%", "0%"],
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Right column */}
            <div className="md:w-1/2 space-y-8 md:pl-12 mt-8 md:mt-0">
              {professionals.slice(2, 4).map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    x: isVisible ? 0 : 50,
                    transition: { 
                      duration: 0.7, 
                      delay: 0.4 + (index * 0.15),
                      ease: [0.25, 0.1, 0.25, 1] 
                    }
                  }}
                  className="relative"
                  style={{ height: activeIndex === `right-${index}` ? "auto" : "auto", minHeight: "180px" }}
                >
                  {/* Card container with fixed height to prevent layout shifts */}
                  <div className="relative" style={{ minHeight: "180px" }}>
                    <motion.div 
                      className="relative z-10 p-6 rounded-lg border-l-4 border-[#BC5B44] bg-white overflow-hidden"
                      variants={cardVariants}
                      initial="initial"
                      whileHover="hover"
                      onHoverStart={() => setActiveIndex(`right-${index}`)}
                      onHoverEnd={() => setActiveIndex(null)}
                    >
                      {/* Animated background effect on hover */}
                      <AnimatePresence>
                        {activeIndex === `right-${index}` && (
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-[#BC5B44]/5 to-transparent z-0"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.8 }}
                          />
                        )}
                      </AnimatePresence>
                      
                      <div className="flex items-start relative z-10">
                        <div className="flex-shrink-0 mr-5">
                          <motion.div 
                            className="w-12 h-12 flex items-center justify-center p-2 rounded-lg bg-[#BC5B44]/10 text-[#BC5B44]"
                            variants={iconVariants}
                            initial="initial"
                            whileHover="hover"
                            animate={activeIndex === `right-${index}` ? { 
                              scale: [1, 1.1, 1],
                              transition: { duration: 0.5 }
                            } : {}}
                          >
                            {item.icon}
                          </motion.div>
                        </div>
                        
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold text-gray-800 mb-2"
                            variants={titleVariants}
                            initial="initial"
                            animate={activeIndex === `right-${index}` ? "animate" : "initial"}
                          >
                            {item.title}
                          </motion.h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          
                          {/* Stats and highlights that appear on hover */}
                          <div style={{ height: activeIndex === `right-${index}` ? "auto" : "0", overflow: "hidden" }}>
                            <AnimatePresence>
                              {activeIndex === `right-${index}` && (
                                <motion.div 
                                  className="mt-4 pt-4 border-t border-gray-200"
                                  variants={statsVariants}
                                  initial="initial"
                                  animate="animate"
                                  exit="exit"
                                >
                                  <div className="flex justify-between">
                                    <motion.div 
                                      className="flex items-center"
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                      <span className="text-[#BC5B44] mr-2">★</span>
                                      <span className="text-gray-700 font-semibold">{item.stats}</span>
                                    </motion.div>
                                    <motion.div 
                                      className="flex items-center"
                                      initial={{ x: 20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                      <span className="text-[#BC5B44] mr-2">✓</span>
                                      <span className="text-gray-700 font-semibold">{item.highlight}</span>
                                    </motion.div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

export default WhyChooseUs;
