import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  ArrowRight,
  ChevronUp,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ REAL WhatsApp icon

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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ UPDATED: Correct address (used in text + map)
  const addressText =
    '66, Samasta Brahma Kshatriya Society, Narayan Nagar Road, Ranna Park, Near Chandranagar Cross Road, Paldi, Ahmedabad, Gujarat 380007, India';

  // ✅ UPDATED: Map embed based on address (no wrong pinned area)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    addressText
  )}&output=embed`;

  // ✅ UPDATED: Directions based on address
  const directionsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    addressText
  )}`;

  // ✅ UPDATED: Social media links (only Facebook, LinkedIn, WhatsApp)
  // Replace /facebook and /linkedin with real external URLs if you have them.
  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', url: '/facebook', external: false },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: '/linkedin', external: false },
    {
      icon: <FaWhatsapp size={20} />,
      name: 'WhatsApp',
      url: 'https://wa.me/918128257961',
      external: true,
    },
  ];

  // Quick links
  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Service', url: '/service' },
    { name: 'Career', url: '/career' },
    { name: 'Contact Us', url: '/contact' },
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
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#BC5B44] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JT</span>
                </div>
                <h3 className="text-2xl font-bold">Jimit Thakore</h3>
              </div>

              {/* ✅ optimized shorter copy */}
              <p className="text-gray-400 leading-relaxed">
                Professional legal guidance focused on clarity, practical next steps, and respectful communication.
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

            {/* Connect + Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">
                Connect With Us
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  if (social.external) {
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-400 hover:text-[#BC5B44] transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                          {social.icon}
                        </div>
                        <span>{social.name}</span>
                      </motion.a>
                    );
                  }

                  return (
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
                  );
                })}
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
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

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#BC5B44] mt-1" />
                  <div>
                    <p className="text-gray-400 leading-relaxed">
                      66, Samasta Brahma Kshatriya Society,
                      <br />
                      Narayan Nagar Road, Ranna Park,
                      <br />
                      Near Chandranagar Cross Road, Paldi,
                      <br />
                      Ahmedabad, Gujarat 380007, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#BC5B44]" />
                  <a href="tel:+918128257961" className="text-gray-400 hover:text-white transition">
                    +91 8128257961
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#BC5B44]" />
                  <a
                    href="mailto:thakorejimit5619@gmail.com"
                    className="text-gray-400 hover:text-white transition break-all"
                  >
                    thakorejimit5619@gmail.com
                  </a>
                </div>

                {/* ✅ UPDATED timings */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#BC5B44] mt-1" />
                  <div>
                    <p className="text-gray-400">Mon to Sat: 9:30 AM - 10:00 PM</p>
                    <p className="text-gray-400">Sunday: 10:30 AM - 4:30 PM</p>
                  </div>
                </div>
              </div>

              {/* ✅ Call + WhatsApp buttons */}
              <motion.div className="pt-4 flex flex-wrap gap-3">
                <motion.a
                  href="tel:+918128257961"
                  className="inline-flex items-center space-x-2 bg-[#BC5B44] hover:bg-[#a04b37] text-white px-4 py-2 rounded transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/918128257961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border border-[#BC5B44] text-[#BC5B44] hover:bg-white/5 px-4 py-2 rounded transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-2">Our Location</h3>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                  className="transition-all duration-500 rounded-lg"
                />
              </div>

              <motion.div className="pt-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={directionsUrl}
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
              © {new Date().getFullYear()} Jimit Thakore. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <MotionLink
                to="/privacy-policy"
                className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </MotionLink>
              <MotionLink
                to="/terms"
                className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300"
              >
                Terms of Service
              </MotionLink>
              <MotionLink
                to="/disclaimer"
                className="text-gray-500 hover:text-[#BC5B44] text-sm transition-colors duration-300"
              >
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
