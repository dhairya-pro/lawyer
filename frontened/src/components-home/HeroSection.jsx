import React from 'react';
import { motion } from 'framer-motion';
import justice1 from '../assets/justice-final.png';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden py-10 sm:py-8 md:py-12 px-4 md:px-8">
     
     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <span
    className="text-[15vw] sm:text-[18vw] md:text-[20vw] font-serif font-semibold select-none mt-[5%] sm:mt-[10%] md:mt-[15%] tracking-[0.15em] uppercase"
    style={{
      background: 'linear-gradient(to bottom, #d2d2d2 20%, #ffffff 80%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 4px 15px rgba(0,0,0,0.05)',
      letterSpacing: '0.01em',
      fontVariationSettings: '"wght" 300',
    }}
  >
    LAWYER
  </span>
</div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B1926] leading-tight"
          >
            Expert Legal Solutions for<br />
            Your Peace of Mind
          </motion.h1>
        </div>

        
        <div className="flex items-center justify-center relative">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-0 text-left z-20 sm:hidden"
          >
            <p className="text-xs text-[#0B1926] font-medium">
              we tip the<br />
              scale in your<br />
              favour.
            </p>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 hidden sm:block sm:bottom-80 md:bottom-80 lg:bottom-80 lg:left-10 text-left z-20"
          >
            <p className="text-sm md:text-base text-[#0B1926] font-medium">
              we tip the<br />
              scale in your<br />
              favour.
            </p>
          </motion.div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 sm:mt-0"
          >
            <img
              src={justice1}
              alt="Lady Justice"
              className="h-[67vh] w-44 sm:w-56 md:w-72 lg:w-96 object-contain mx-auto"
            />
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 bottom-0 flex items-center z-20 sm:hidden"
          >
            <div className="text-right mr-1" onClick={() => window.location.href = 'tel:+918128257961'}>
              <p className="text-xs text-[#0B1926] font-medium" >
                First 15 min free<br />
                Consultation
              </p>
            </div>
            <span className="text-lg font-bold">&gt;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 hidden sm:flex sm:top-36 md:top-32 lg:top-24 items-center z-20"
          >
            <div className="text-right mr-2">
              <a 
                href="tel:+918128257961"
                className="text-sm md:text-base text-[#0B1926] font-medium block cursor-pointer hover:underline"
              >
                First 15 min free<br />
                Consultation
              </a>
            </div>
            <span className="text-xl font-bold">&gt;</span>
          </motion.div>

          <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
  className="absolute right-2 sm:right-6 md:right-10 bottom-4 sm:bottom-10 md:bottom-20 z-20 hidden sm:block"
>
  <div className="relative w-16 sm:w-20 md:w-28 h-16 sm:h-20">
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      style={{
        animation: 'spin 20s linear infinite'
      }}
    >
      <defs>
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
      </defs>
      <text className="text-xs sm:text-sm md:text-base">
        <textPath href="#circlePath" className="fill-[#0B1926]">
          • Trusted Legal Guidance •
        </textPath>
      </text>
    </svg>
  </div>
</motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
