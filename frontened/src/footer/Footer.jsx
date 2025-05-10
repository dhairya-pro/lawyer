import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowRight, 
  ChevronUp 
} from 'lucide-react';

// Create a motion version of the React Router Link
const MotionLink = motion(Link);

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
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
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Social media links
  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: '/facebook' },
    { icon: <Twitter size={20} />, name: 'Twitter', url: '/twitter' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: '/instagram' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: '/linkedin' },
    { icon: <Youtube size={20} />, name: 'YouTube', url: '/youtube' }
  ];
  
  // Quick links
  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Service', url: '/service' },
    { name: 'Career', url: '/career' },
    { name: 'Contact Us', url: '/contact' }
  ];

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 mt-12">
      <footer className="bg-[#0B1926] text-white pt-16 relative overflow-hidden rounded-tl-3xl rounded-tr-3xl">
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#BC5B44] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JT</span>
                </div>
                <h3 className="text-2xl font-bold">Jimit Thakore</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                We provide expert legal representation with a commitment to excellence, integrity, and client satisfaction in all areas of law.
              </p>
              
              <motion.div 
                className="pt-4"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <MotionLink 
                  to="/contact" 
                  className="inline-flex items-center space-x-2 text-[#BC5B44] font-medium hover:text-white transition-colors duration-300"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={16} />
                </MotionLink>
              </motion.div>
            </motion.div>
            
            {/* Social Media and Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Connect With Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <MotionLink
                    key={index}
                    to={social.url}
                    className="flex items-center space-x-3 text-gray-400 hover:text-[#BC5B44] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      {social.icon}
                    </div>
                    <span>{social.name}</span>
                  </MotionLink>
                ))}
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MotionLink 
                        to={link.url} 
                        className="text-gray-400 hover:text-[#BC5B44] transition-colors duration-300 flex items-center"
                      >
                        <ArrowRight size={14} className="mr-2" />
                        {link.name}
                      </MotionLink>
                    </motion.li>
                  ))}
                </ul>
              </div> 
            </motion.div>
            
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#BC5B44] mt-1" />
                  <div>
                    <p className="text-gray-400">C-112, Supath-2 Complex, Nr.Juna Wadaj Bus Stand, Ashram Road, Ahmedabad, Gujarat, India - 380013</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#BC5B44]" />
                  <div>
                    <a href="tel:+918128257961" className="text-gray-400">+91 8128257961</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#BC5B44]" />
                  <a href="mailto:thakorejimit5619@gmail.com" className="text-gray-400">thakorejimit5619@gmail.com</a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#BC5B44] mt-1" />
                  <div>
                    <p className="text-gray-400">Mon to Sat: 6:30AM - 10:30PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="tel:+918128257961" 
                  className="inline-flex items-center space-x-2 bg-[#BC5B44] hover:bg-[#a04b37] text-white px-4 py-2 rounded transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </motion.div>
            
            {/* Location Map */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Our Location</h3>
              
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9055019766498!2d72.5728!3d23.0367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c27f6c5555%3A0x373aa5d0e5d8e0e5!2sAshram%20Rd%2C%20Wadaj%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1616461693548!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Office Location"
                  className="transition-all duration-500 rounded-lg"
                />
                
                <motion.div 
                  className="absolute inset-0 hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                  whileHover={{ opacity: 0 }}
                />
              </div>
              
              <motion.div 
                className="pt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="https://goo.gl/maps/JeZpHhgzGvS2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#BC5B44] transition-colors duration-300"
                >
                  <MapPin size={16} />
                  <span>Get Directions</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Law Firm. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <MotionLink to="/privacy" className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300">
                Privacy Policy
              </MotionLink>
              <MotionLink to="/terms" className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300">
                Terms of Service
              </MotionLink>
              <MotionLink to="/disclaimer" className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300">
                Legal Disclaimer
              </MotionLink>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-14 w-12 h-12 bg-[#BC5B44] hover:bg-[#a04b37] text-white rounded-full flex items-center justify-center shadow-lg z-50"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      </footer>
    </div>
  );
};

export default Footer;
