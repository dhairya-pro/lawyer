import React, { useState, useEffect, useRef } from 'react';
import { FaBalanceScale, FaGraduationCap, FaBriefcase, FaUsers, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CareersPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const whyJoinRef = useRef(null);
  const benefitsRef = useRef(null);
  const formSectionRef = useRef(null);
  const benefitRefs = useRef([]);
  
  // Add to benefitRefs array
  const addToBenefitRefs = (el) => {
    if (el && !benefitRefs.current.includes(el)) {
      benefitRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // GSAP animations
    
    // Hero section animation
    gsap.fromTo(
      heroRef.current.querySelectorAll('.hero-animate'),
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );
    
    // Why Join Us section title animation
    gsap.fromTo(
      whyJoinRef.current,
      { 
        opacity: 0,
        y: 30
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: whyJoinRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Benefits cards animation
    benefitRefs.current.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        { 
          opacity: 0,
          y: 50 
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
    
    // Form section animation
    gsap.fromTo(
      formSectionRef.current,
      { 
        opacity: 0,
        y: 100 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Floating animation for decorative elements
    gsap.to('.floating-blob', {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-20 sm:h-24 md:h-20 lg:h-24"></div>
      <div ref={heroRef} className="bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl floating-blob" style={parallaxStyle}></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full top-40 right-20 blur-3xl floating-blob" style={{...parallaxStyle, transform: `translateY(${scrollY * -0.2}px)`}}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-animate">Join Our Legal Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 hero-animate">
            Build your career at a firm that values excellence, integrity, and innovation in the practice of law.
          </p>
          <div className="hero-animate">
            <motion.a 
              href="#internship-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#BC5B44] text-white font-semibold px-6 py-3 rounded-md h transition duration-300 shadow-lg"
            >
              Apply for Internship
            </motion.a>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 ref={whyJoinRef} className="text-3xl font-bold text-[#8C3D2B] mb-12 text-center">
          Why Join Our Firm
        </h2>
        
        <div ref={benefitsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaBalanceScale className="text-4xl" />, title: "Impactful Work", description: "Work on meaningful cases that make a difference in our clients' lives and shape legal precedent." },
            { icon: <FaGraduationCap className="text-4xl" />, title: "Continuous Learning", description: "Access mentorship, ongoing education, and professional development opportunities." },
            { icon: <FaBriefcase className="text-4xl" />, title: "Career Growth", description: "Clear pathways for advancement in a firm that promotes from within and rewards excellence." },
            { icon: <FaUsers className="text-4xl" />, title: "Collaborative Culture", description: "Join a supportive team that values diversity, inclusion, and work-life balance." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              ref={addToBenefitRefs}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white p-8 rounded-lg shadow-md transition duration-300 border border-orange-100"
            >
              <div className="text-[#BC5B44] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8C3D2B]">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internship Application Form */}
      <div id="internship-form" ref={formSectionRef} className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-orange-200">
          <div className="bg-gradient-to-r from-[#8C3D2B] to-[#BC5B44] px-8 py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -right-20 blur-2xl floating-blob"></div>
              <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-0 left-40 blur-2xl floating-blob" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Apply for a Legal Internship</h2>
              <p className="text-orange-100 max-w-2xl">
                We're looking for passionate law students who want to gain real-world experience in a dynamic legal environment.
                Complete the form below to apply for our internship program.
              </p>
            </div>
          </div>
          
          <InternshipForm />
        </div>
      </div>
    </div>
  );
};

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    graduationYear: '',
    practiceArea: '',
    resume: null,
    coverLetter: null,
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
  const formRef = useRef(null);
  const formFieldsRef = useRef([]);
  
  // Add to formFieldsRef array
  const addToFormFieldsRef = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Staggered animation for form fields
    if (!submitted && formRef.current && formFieldsRef.current.length > 0) {
      gsap.fromTo(
        formFieldsRef.current,
        { 
          opacity: 0,
          y: 20 
        },
        { 
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
    
    return () => {
      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [submitted]);
  
  const practiceAreas = [
    'Corporate Law',
    'Litigation',
    'Intellectual Property',
    'Family Law',
    'Criminal Law',
    'Real Estate',
    'Tax Law',
    'Environmental Law',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.practiceArea) newErrors.practiceArea = 'Please select a practice area';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      // Shake animation for fields with errors
      Object.keys(formErrors).forEach(fieldName => {
        const errorField = document.getElementById(fieldName);
        if (errorField) {
          gsap.to(errorField, {
            x: [-10, 10, -8, 8, -5, 5, 0],
            duration: 0.6,
            ease: "power2.inOut"
          });
        }
      });
      
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        university: '',
        graduationYear: '',
        practiceArea: '',
        resume: null,
        coverLetter: null,
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div 
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="p-12 text-center"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-semibold text-[#8C3D2B] mb-3"
          >
            Application Submitted!
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 max-w-md mx-auto"
          >
            Thank you for your interest in our internship program. We'll review your application and get back to you soon.
          </motion.p>
        </motion.div>
      ) : (
        <form 
          ref={formRef}
          key="form"
          onSubmit={handleSubmit} 
          className="p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div ref={addToFormFieldsRef}>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'firstName' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.firstName 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                />
              </motion.div>
              <AnimatePresence>
                {errors.firstName && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            <div ref={addToFormFieldsRef}>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'lastName' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.lastName 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                />
              </motion.div>
              <AnimatePresence>
                {errors.lastName && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div ref={addToFormFieldsRef}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'email' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.email 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                />
              </motion.div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            <div ref={addToFormFieldsRef}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'phone' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.phone 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                />
              </motion.div>
              <AnimatePresence>
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div ref={addToFormFieldsRef}>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">Law School/University*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('university')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'university' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.university 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                />
              </motion.div>
              <AnimatePresence>
                {errors.university && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.university}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            <div ref={addToFormFieldsRef}>
              <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">Expected Graduation Year*</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('graduationYear')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'graduationYear' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : errors.graduationYear 
                        ? 'border-red-500' 
                        : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                >
                  <option value="">Select Year</option>
                  {[...Array(6)].map((_, i) => {
                    const year = new Date().getFullYear() + i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </motion.div>
              <AnimatePresence>
                {errors.graduationYear && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors.graduationYear}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div ref={addToFormFieldsRef} className="mb-6">
            <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-700 mb-1">Preferred Practice Area*</label>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <select
                id="practiceArea"
                name="practiceArea"
                value={formData.practiceArea}
                onChange={handleChange}
                onFocus={() => setFocusedField('practiceArea')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                  focusedField === 'practiceArea' 
                    ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                    : errors.practiceArea 
                      ? 'border-red-500' 
                      : 'border-orange-200 focus:border-[#BC5B44]'
                }`}
              >
                <option value="">Select Practice Area</option>
                {practiceAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </motion.div>
            <AnimatePresence>
              {errors.practiceArea && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {errors.practiceArea}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div ref={addToFormFieldsRef}>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV* (PDF)</label>
              <motion.div 
                whileHover={{ scale: 1.01 }} 
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`relative border rounded-lg overflow-hidden ${errors.resume ? 'border-red-500' : 'border-orange-200'}`}
              >
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="px-4 py-2 text-gray-500 flex items-center justify-between">
                  <span className="truncate max-w-[200px]">{formData.resume ? formData.resume.name : 'Choose file...'}</span>
                  <span className="bg-orange-100 text-[#8C3D2B] px-3 py-1 rounded text-sm font-medium">Browse</span>
                </div>
              </motion.div>
              <AnimatePresence>
                {errors.resume && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 text-sm text-red-600"
                  ></motion.p>
                )}
                </AnimatePresence>
              </div>
              
              <div ref={addToFormFieldsRef}>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (PDF, Optional)</label>
                <motion.div 
                  whileHover={{ scale: 1.01 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative border border-orange-200 rounded-lg overflow-hidden"
                >
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="px-4 py-2 text-gray-500 flex items-center justify-between">
                    <span className="truncate max-w-[200px]">{formData.coverLetter ? formData.coverLetter.name : 'Choose file...'}</span>
                    <span className="bg-orange-100 text-[#8C3D2B] px-3 py-1 rounded text-sm font-medium">Browse</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div ref={addToFormFieldsRef} className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us why you're interested in our firm or any additional information you'd like to share."
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition duration-300 ${
                    focusedField === 'message' 
                      ? 'ring-2 ring-[#BC5B44] border-[#BC5B44]' 
                      : 'border-orange-200 focus:border-[#BC5B44]'
                  }`}
                ></textarea>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#BC5B44] text-white font-semibold rounded-lg shadow-md hover:bg-[#8C3D2B] focus:outline-none focus:ring-2 focus:ring-[#BC5B44] focus:ring-offset-2 transition disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        )}
      </AnimatePresence>
    );
  };
  
  export default CareersPage;