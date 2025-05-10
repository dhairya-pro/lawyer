import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaBalanceScale, FaUserCog } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// CSS for animations
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 0.4; }
      100% { transform: scale(1); opacity: 0.8; }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .scroll-indicator {
      animation: bounce 2s infinite;
    }

    .reveal-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .reveal-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .spin-slow {
      animation: spin 20s linear infinite;
    }
  `}</style>
);

const ClientsBenefits = () => {
  const benefitCards = [
    {
      icon: <FaUserTie className="text-white text-2xl" />,
      title: "Expert lawyers",
      description: "Our team consists of highly qualified attorneys with specialized expertise in various legal domains."
    },
    {
      icon: <FaBalanceScale className="text-white text-2xl" />,
      title: "Strong Representation",
      description: "We advocate fiercely for your interests with proven strategies and unwavering dedication."
    },
    {
      icon: <FaUserCog className="text-white text-2xl" />,
      title: "Personalized service",
      description: "Every case receives tailored attention addressing your unique legal needs and circumstances."
    }
  ];

  // Section title animation
  const [titleRef, titleInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  const titleControls = useAnimation();

  // Scroll indicator state
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }

    // Hide scroll indicator after scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titleInView, titleControls]);

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          revealElements[i].classList.add('visible');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section className="py-16 px-4 bg-white relative">
      <GlobalStyles />
      
      {/* Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#BC5B44] z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs mb-2">Scroll for more</span>
            <svg 
              className="w-6 h-6 scroll-indicator" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 relative inline-block">
            Client Benefits
            <motion.span 
              className="absolute bottom-0 left-1/2 h-1 bg-[#BC5B44] rounded"
              initial={{ width: "0%", x: "-50%" }}
              animate={titleControls}
              variants={{
                hidden: { width: "0%", x: "-50%" },
                visible: { 
                  width: "70%", 
                  x: "-50%", 
                  transition: { duration: 0.5, delay: 0.2 } 
                }
              }}
            />
          </h2>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCards.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

      

        {/* Divider */}
        <div className="my-16 reveal-on-scroll">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-200 w-1/3"></div>
            <div className="mx-4">
              <svg className="w-6 h-6 text-[#BC5B44]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="h-px bg-gray-200 w-1/3"></div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="reveal-on-scroll">
          <TestimonialCard />
        </div>

        {/* Highlight section */}
        <div className="my-16 py-6 px-4 bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#BC5B44] rounded shadow-sm reveal-on-scroll">
          <div className="flex items-center">
            <div className="mr-4 text-[#BC5B44]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">
              <span className="font-medium">Why choose us?</span> Our approach combines legal expertise with personalized attention, ensuring that every client receives the highest quality representation.
            </p>
          </div>
        </div>

        {/* Statistics with scroll-triggered counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center reveal-on-scroll">
          <ScrollCounter title="Cases Won" endValue={500} suffix="+" />
          <ScrollCounter title="Happy Clients" endValue={1200} suffix="+" />
          <ScrollCounter title="Years Experience" endValue={25} suffix="+" />
          <ScrollCounter title="Expert Lawyers" endValue={30} suffix="+" />
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center reveal-on-scroll">
          <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-4">Ready to get started?</h3>
          <button className="bg-[#BC5B44] hover:bg-[#a84e3a] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1, 
          transition: { 
            duration: 0.5,
            delay: index * 0.1
          } 
        }
      }}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-center reveal-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Icon with effect */}
      <div 
        className="w-20 h-20 bg-[#BC5B44] rounded flex items-center justify-center mb-6 shadow-lg relative"
        style={{ 
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isHovered 
            ? '0 10px 25px -5px rgba(188, 91, 68, 0.3), 0 10px 10px -5px rgba(188, 91, 68, 0.2)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        {benefit.icon}
        {isHovered && (
          <div 
            className="absolute inset-0 rounded bg-[#BC5B44] opacity-60"
            style={{ 
              animation: 'pulse 2s infinite',
              zIndex: -1 
            }}
          />
        )}
      </div>
      
      {/* Title with underline animation */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2 relative inline-block">
          {benefit.title}
          {inView && (
            <motion.div 
              className="h-0.5 bg-[#BC5B44] absolute bottom-0 left-0"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
            />
          )}
        </h3>
        <AnimatePresence>
          {isHovered && (
            <motion.p 
              className="text-sm text-gray-600 max-w-xs mx-auto mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {benefit.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Testimonial Component
const TestimonialCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.4 } 
        }
      }}
      initial="hidden"
      animate={controls}
      className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-[#BC5B44] rounded-full flex items-center justify-center mr-4 text-white">
          <span className="text-xl font-bold">"</span>
        </div>
        <p className="italic text-gray-700 text-sm">
          Our firm's commitment to excellence is reflected in the success stories of our clients. 
          We don't just provide legal services; we deliver peace of mind.
        </p>
      </div>
      <div className="text-right">
        <button 
          className="text-[#BC5B44] text-sm font-medium flex items-center ml-auto group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Read Success Stories
          </span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

// Scroll Counter Component
// Updated Scroll Counter Component
const ScrollCounter = ({ title, endValue, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use callback ref to access the DOM element directly
  const setRef = useCallback(node => {
    if (node !== null) {
      countRef.current = node;
      
      // Set up Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !hasAnimated) {
            animateCount();
            setHasAnimated(true);
          } else if (!entry.isIntersecting) {
            // Reset when out of view
            setHasAnimated(false);
            setCount(0);
          }
        },
        { threshold: 0.1 }
      );
      
      if (countRef.current) {
        observer.observe(countRef.current);
      }
      
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setCount(Math.floor(endValue * progress));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  };
  
  return (
    <div 
      ref={setRef}
      className="p-4 transition-transform duration-200 hover:-translate-y-1"
    >
      <h3 className="text-3xl font-bold text-[#BC5B44] mb-1">
        {count}{suffix}
      </h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default ClientsBenefits;
