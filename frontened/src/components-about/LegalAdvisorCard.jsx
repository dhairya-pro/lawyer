import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import profile from '../assets/profile.png'

const LegalAdvisorHero = () => {
  const canvasRef = useRef(null);
  
  // Background animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Legal symbols for animation
    const symbols = [
      { icon: '§', size: 14 },
      { icon: '⚖', size: 18 },
      { icon: '¶', size: 14 },
      { icon: '†', size: 16 }
    ];
    
    // Create particles
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: 0.05 + Math.random() * 0.1,
        direction: Math.random() * Math.PI * 2
      });
    }
    
    // Animation render function
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Boundary check and redirect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.direction = Math.PI - particle.direction;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.direction = -particle.direction;
        }
        
        // Draw symbol
        ctx.font = `${particle.symbol.size}px serif`;
        ctx.fillStyle = `rgba(194, 93, 69, ${particle.opacity})`;
        ctx.fillText(particle.symbol.icon, particle.x, particle.y);
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background canvas animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#c25d45] opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#c25d45] opacity-5"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gray-200 opacity-10"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-10 md:gap-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left side content */}
        <motion.div 
          className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex items-baseline mb-1">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900">Meet, </h2>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#c25d45] ml-2">Jimit Thakor</h2>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mt-2 mb-3">
            Your trusted Legal advisor
          </h3>
          
          <p className="text-base text-gray-700 italic mt-2 mb-5">
            "Committed to Justice. Dedicated to You"
          </p>
          
          {/* Added explanation text */}
          <motion.p 
            className="text-base text-gray-700 mb-5 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            With over 15 years of experience in corporate and family law, I provide personalized 
            legal solutions tailored to your unique situation. My practice focuses on achieving 
            the best possible outcomes while ensuring you understand every step of the process.
          </motion.p>
          
          {/* Key services with icons */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center bg-white/50 backdrop-blur-sm p-2 rounded-lg shadow-sm">
              <FaBalanceScale className="text-[#c25d45] mr-2 text-lg" />
              <span className="text-sm font-medium">Legal Representation</span>
            </div>
            <div className="flex items-center bg-white/50 backdrop-blur-sm p-2 rounded-lg shadow-sm">
              <FaHandshake className="text-[#c25d45] mr-2 text-lg" />
              <span className="text-sm font-medium">Mediation Services</span>
            </div>
            <div className="flex items-center bg-white/50 backdrop-blur-sm p-2 rounded-lg shadow-sm">
              <FaShieldAlt className="text-[#c25d45] mr-2 text-lg" />
              <span className="text-sm font-medium">Legal Protection</span>
            </div>
          </motion.div>
          
          {/* Credentials badge */}
          <motion.div 
            className="flex items-center mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-full py-1.5 px-4 flex items-center shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2.5"></span>
              <span className="text-xs font-medium text-gray-700">Licensed Professional • Bar Certified</span>
            </div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.button 
              className="bg-[#c25d45] hover:bg-[#b14a35] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Free Consultation
            </motion.button>
            
            <motion.button 
              className="border border-[#c25d45] text-[#c25d45] hover:bg-[#fff8f7] text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                window.location.href = '/service';
              }}
            >
              View Services
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative w-full md:w-1/2 flex justify-center md:justify-end z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        >
          <div className="relative flex items-center justify-center w-48 h-64 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-[370px] lg:h-[370px]">
            {/* Background Circle */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{ zIndex: 1 }}
            >
              <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-96 lg:w-[340px] lg:h-[340px] rounded-full bg-[#c25d45]" />
            </motion.div>
            {/* Profile Image (fully visible, not cropped) */}
            <motion.div 
              className="relative flex items-center justify-center z-10 bottom-10 xs:bottom-12 sm:bottom-14 md:bottom-16 left-0 xs:left-2 sm:left-4"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img  
                src={profile}
                alt="Legal Advisor"
                className="w-40 h-56 xs:w-48 xs:h-64 sm:w-56 sm:h-72 md:w-80 md:h-96 lg:w-[300px] lg:h-[440px] object-contain object-center"
                style={{ background: 'transparent' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LegalAdvisorHero;
