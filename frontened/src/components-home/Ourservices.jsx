import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaHome, FaBriefcase, FaFileContract, FaGavel } from 'react-icons/fa';
import hammer from '../assets/Hammer.png';

const Ourservices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  const services = [
    {
      icon: <FaBalanceScale className="text-white text-lg" />,
      title: "Experienced Legal Professional",
      description: "With years of dedicated practice in the field, I bring substantial expertise to every case I handle."
    },
    {
      icon: <FaHandshake className="text-white text-lg" />,
      title: "Family Law Specialist",
      description: "Navigating sensitive family matters with compassion, discretion, and legal expertise to protect your interests."
    },
    {
      icon: <FaHome className="text-white text-lg" />,
      title: "Real Estate Law",
      description: "Comprehensive legal solutions for property transactions, disputes, and development projects."
    },
    {
      icon: <FaBriefcase className="text-white text-lg" />,
      title: "Corporate Legal Services",
      description: "Strategic legal counsel for businesses of all sizes, from startups to established corporations."
    },
    {
      icon: <FaFileContract className="text-white text-lg" />,
      title: "Contract Negotiations",
      description: "Expert drafting, review, and negotiation of contracts to protect your rights and interests."
    },
    {
      icon: <FaGavel className="text-white text-lg" />,
      title: "Litigation Services",
      description: "Powerful advocacy and representation in court to resolve disputes and protect your legal rights."
    }
  ];

  // Number of cards to show per slide
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    
    if (touchEnd - touchStart > 75) {
      // Swipe right
      prevSlide();
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-rotate slides when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const containerPosition = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - containerPosition;
      
      if (offset > -500 && offset < 500) {
        const hammerElement = document.getElementById('hammer-image');
        if (hammerElement) {
          hammerElement.style.transform = `translateY(${offset * 0.05}px) rotate(${offset * 0.02}deg)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  const [slideDirection, setSlideDirection] = useState(1);

  // Update direction when changing slides
  const updateSlideWithDirection = (newIndex) => {
    const direction = newIndex > activeIndex ? 1 : -1;
    setSlideDirection(direction);
    setActiveIndex(newIndex);
  };

  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6 md:px-8 py-8">
      <motion.div 
        ref={containerRef}
        className="bg-[#EDEAD9] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gavel image with animation */}
        <motion.div 
          className="absolute top-10 right-10"
          initial={{ rotate: -10, y: -20, opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            duration: 1,
            delay: 0.5 
          }}
        >
          <motion.img 
            id="hammer-image"
            src={hammer}
            alt="Legal Gavel" 
            className="w-24 h-24 object-contain"
            whileHover={{ 
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        {/* Section header with animation */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-serif text-gray-900 mb-2 relative inline-block">
            Our services
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-[#BC5B44]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <motion.p 
            className="text-[#BC5B44] text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Experience. Trust. Results.
          </motion.p>
        </motion.div>

        {/* Slider container with improved animations */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={slideDirection} mode="wait">
            <motion.div
              key={activeIndex}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row gap-6 md:gap-8"
            >
              {services.slice(
                activeIndex * cardsPerSlide, 
                (activeIndex * cardsPerSlide) + cardsPerSlide
              ).map((service, idx) => (
                <ServiceCard 
                  key={idx + (activeIndex * cardsPerSlide)} 
                  service={service} 
                  index={idx}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Hidden navigation buttons that appear on hover */}
          <motion.div 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-2 opacity-0 pointer-events-none md:pointer-events-auto"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => {
                setSlideDirection(-1);
                prevSlide();
              }}
              className="bg-white rounded-full p-2 shadow-md text-[#BC5B44] hover:bg-[#BC5B44] hover:text-white transition-all duration-300 focus:outline-none z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => {
                setSlideDirection(1);
                nextSlide();
              }}
              className="bg-white rounded-full p-2 shadow-md text-[#BC5B44] hover:bg-[#BC5B44] hover:text-white transition-all duration-300 focus:outline-none z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced dot indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(totalSlides)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => updateSlideWithDirection(index)}
              className={`focus:outline-none transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#BC5B44] w-6 h-2 rounded-full' 
                  : 'bg-[#BC5B44] opacity-40 w-2 h-2 rounded-full'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white rounded-lg p-6 flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-start mb-4">
        <motion.div 
          className="w-8 h-8 bg-[#BC5B44] rounded-full flex items-center justify-center mr-3 flex-shrink-0"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {service.icon}
        </motion.div>
        <h3 className="font-medium text-gray-800">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        {service.description}
      </p>
      
      {/* Animated learn more link that appears on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        <a 
          href="#" 
          className="text-[#BC5B44] text-sm font-medium flex items-center group"
        >
          <span className="group-hover:underline">Learn more</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Ourservices;
