import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Scale, 
  Building, 
  FileText, 
  AlertCircle, 
  Shield, 
  Users, 
  Home, 
  Heart, 
  DollarSign, 
  Map, 
  CheckCircle, 
  PieChart, 
  Briefcase, 
  Landmark, 
  Server, 
  Lock, 
  ShoppingBag
} from 'lucide-react';


const LegalServicesJourney = () => {
  const [activeService, setActiveService] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const timelineRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate timeline when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      id: 1,
      year: '2005',
      name: "Gujarat High Court Lawyer",
      icon: <Landmark size={24} />,
      description: "Expert representation and advocacy in all matters before the Gujarat High Court.",
      color: "#FFD700"
    },
    {
      id: 2,
      year: '2006',
      name: "Civil Lawyer",
      icon: <FileText size={24} />,
      description: "Comprehensive legal services for civil disputes, contracts, and property matters.",
      color: "#FF9933"
    },
    {
      id: 3,
      year: '2007',
      name: "Corporate Lawyer",
      icon: <Building size={24} />,
      description: "Strategic legal counsel for businesses, from startups to established corporations.",
      color: "#3366CC"
    },
    {
      id: 4,
      year: '2008',
      name: "NI Act 138 Case Lawyer",
      icon: <DollarSign size={24} />,
      description: "Specialized representation in cheque dishonor cases under the Negotiable Instruments Act.",
      color: "#33CC99"
    },
    {
      id: 5,
      year: '2009',
      name: "Criminal Lawyer",
      icon: <Shield size={24} />,
      description: "Strong defense strategies and representation in criminal proceedings.",
      color: "#CC3366"
    },
    {
      id: 6,
      year: '2010',
      name: "Divorce Lawyer",
      icon: <Heart size={24} />,
      description: "Compassionate guidance through divorce proceedings and settlements.",
      color: "#9966FF"
    },
    {
      id: 7,
      year: '2011',
      name: "Cyber Crime Lawyer",
      icon: <Server size={24} />,
      description: "Specialized representation in cases involving digital crimes and internet fraud.",
      color: "#66CCFF"
    },
    {
      id: 8,
      year: '2012',
      name: "NCLT Lawyer",
      icon: <PieChart size={24} />,
      description: "Expert representation before the National Company Law Tribunal in corporate matters.",
      color: "#FF6633"
    },
    {
      id: 9,
      year: '2013',
      name: "Anticipatory Bail Lawyer",
      icon: <Lock size={24} />,
      description: "Urgent legal assistance to prevent arrest through anticipatory bail applications.",
      color: "#33CCCC"
    },
    {
      id: 10,
      year: '2014',
      name: "Family Lawyer",
      icon: <Users size={24} />,
      description: "Comprehensive legal services for all family matters including adoption and inheritance.",
      color: "#CC99FF"
    },
    {
      id: 11,
      year: '2015',
      name: "DRT Lawyer",
      icon: <Briefcase size={24} />,
      description: "Specialized representation before Debt Recovery Tribunals for banks and borrowers.",
      color: "#FFCC33"
    },
    {
      id: 12,
      year: '2016',
      name: "Lawyer in Ahmedabad",
      icon: <Map size={24} />,
      description: "Full-service legal representation across all practice areas in Ahmedabad.",
      color: "#33FF99"
    },
    {
      id: 13,
      year: '2017',
      name: "Cheque Bounce Lawyer",
      icon: <AlertCircle size={24} />,
      description: "Expert handling of cheque dishonor cases with strategic legal approaches.",
      color: "#FF3366"
    },
    {
      id: 14,
      year: '2018',
      name: "Court Marriage Lawyer",
      icon: <FileText size={24} />,
      description: "Smooth facilitation of court marriages with all legal documentation.",
      color: "#9933FF"
    },
    {
      id: 15,
      year: '2019',
      name: "Land Revenue Lawyer",
      icon: <Home size={24} />,
      description: "Specialized handling of land revenue matters and agricultural property disputes.",
      color: "#33FFCC"
    },
    {
      id: 16,
      year: '2020',
      name: "Lawyer in Gandhinagar",
      icon: <Map size={24} />,
      description: "Comprehensive legal services across all practice areas in Gandhinagar.",
      color: "#FF9966"
    },
    {
      id: 17,
      year: '2021',
      name: "Property Dispute Lawyer",
      icon: <Home size={24} />,
      description: "Resolution of complex property disputes through negotiation and litigation.",
      color: "#6633FF"
    },
    {
      id: 18,
      year: '2022',
      name: "Consumer Protection Lawyer",
      icon: <ShoppingBag size={24} />,
      description: "Advocacy for consumer rights and representation in consumer forums.",
      color: "#FF6699"
    },
  ];

  // Timeline animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  // Handle service click or hover
  const handleServiceInteraction = (id) => {
    setActiveService(id);
  };

  const clearActiveService = () => {
    setActiveService(null);
  };

  // Determine if we should use mobile layout
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <div className="bg-gray-50 py-16 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0B1926] mb-4">Our Legal Expertise Timeline</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey of legal excellence and the diverse services we've perfected over the years
          </p>
        </motion.div>
        
        {/* Timeline Component */}
        <div className="relative" ref={timelineRef}>
          {/* Mobile Version */}
          {isMobile && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleServiceInteraction(service.id === activeService ? null : service.id)}
                >
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{ 
                      backgroundColor: service.id === activeService ? service.color : 'white',
                      borderColor: service.color,
                      color: service.id === activeService ? 'white' : service.color
                    }}
                  >
                    {service.icon}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                    <div className="font-bold text-lg mb-1">{service.name}</div>
                    <div className="text-sm text-gray-500 mb-2">Since {service.year}</div>
                    {(activeService === service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600"
                      >
                        {service.description}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Tablet Version */}
          {isTablet && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white p-5 rounded-lg shadow-md relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  onMouseEnter={() => handleServiceInteraction(service.id)}
                  onMouseLeave={clearActiveService}
                >
                  <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: service.color }}></div>
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{ 
                        backgroundColor: service.color,
                        color: 'white'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{service.name}</div>
                      <div className="text-sm text-gray-500">Since {service.year}</div>
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeService === service.id ? 1 : 0.7 }}
                    className="text-gray-600 text-sm"
                  >
                    {service.description}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Desktop Version */}
          {!isMobile && !isTablet && (
            <div className="relative">
              {/* Main Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
                <svg className="h-full w-4" viewBox="0 0 4 100" preserveAspectRatio="none">
                  <motion.path
                    d="M 2,0 L 2,100"
                    stroke="#CBD5E0"
                    strokeWidth="4"
                    fill="none"
                    variants={lineVariants}
                    initial="hidden"
                    animate={controls}
                  />
                </svg>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="relative"
              >
                {services.map((service, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      className={`mb-16 flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Timeline connector */}
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <motion.div 
                          className="w-6 h-6 rounded-full bg-white border-4"
                          style={{ borderColor: service.color }}
                          whileHover={{ scale: 1.2 }}
                        />
                      </div>
                      
                      {/* Content box */}
                      <motion.div
                        className={`w-5/12 bg-white p-6 rounded-lg shadow-md relative ${
                          isEven ? 'mr-auto' : 'ml-auto'
                        }`}
                        style={{
                          boxShadow: activeService === service.id 
                            ? `0 10px 25px -5px ${service.color}33, 0 10px 10px -5px ${service.color}22` 
                            : ''
                        }}
                        onMouseEnter={() => handleServiceInteraction(service.id)}
                        onMouseLeave={clearActiveService}
                      >
                        {/* Year marker */}
                        <div 
                          className="absolute top-6 text-sm font-bold px-3 py-1 rounded"
                          style={{
                            backgroundColor: service.color,
                            color: 'white',
                            [isEven ? 'right' : 'left']: '-40px'
                          }}
                        >
                          {service.year}
                        </div>
                        
                        {/* Service icon */}
                        <div className="flex items-center mb-4">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                            style={{ 
                              backgroundColor: service.color,
                              color: 'white'
                            }}
                          >
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold">{service.name}</h3>
                        </div>
                        
                        {/* Description with animation */}
                        <motion.p 
                          className="text-gray-600"
                          initial={{ opacity: 0.7 }}
                          animate={{ 
                            opacity: activeService === service.id ? 1 : 0.7,
                            scale: activeService === service.id ? 1.02 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.description}
                        </motion.p>
                        
                        {/* Decorative element */}
                        <div 
                          className="absolute h-1 w-16 bottom-0 left-0 right-0 mx-auto rounded-t-full"
                          style={{ backgroundColor: service.color }}
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-[#0B1926] mb-4">Need Legal Assistance?</h3>
          <p className="text-gray-600 mb-6">Our team of expert lawyers is ready to help you navigate any legal challenge</p>
          <motion.button
            className="bg-[#BC5B44] text-white px-8 py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "#a04b37" }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalServicesJourney;