import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-[#BC5B44] text-white rounded-full shadow-lg hover:bg-[#a54a33] transition-colors duration-300"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-[#0B1926] mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <p className="mb-4">
                Advocate Jimit Ankur Thakore ("we", "us", "our") is committed to protecting the privacy and confidentiality of the personal information provided by users of this website. This Privacy Policy outlines how your personal information is collected, used, stored, and safeguarded when you visit or interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Information Collection</h2>
              <p>
                We may collect personal information provided voluntarily by visitors, such as names, email addresses, phone numbers, and other details communicated through inquiry forms, email correspondence, or direct interactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Use of Information</h2>
              <p className="mb-4">Your personal information will be used solely for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to inquiries or requests.</li>
                <li>Communicating important updates or information.</li>
                <li>Enhancing website content and user experience.</li>
              </ul>
              <p className="mt-4">
                We do not share, sell, or disclose your personal information to third parties except when required by law or as necessary to fulfill a specific request by you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Despite these measures, please understand that internet-based transmissions are not entirely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can adjust your browser settings to refuse cookies; however, this may impact your ability to access certain website functionalities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">External Links</h2>
              <p>
                Our website may contain links to external websites not operated by us. We are not responsible for the privacy practices or content of external sites. Please review the privacy policies of such third-party sites separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Changes to Privacy Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy periodically. Any changes will be posted directly on this page, and your continued use of our website constitutes acceptance of those changes.
              </p>
            </section>

            <section className="border-t pt-6">
              <p className="text-center font-medium">
                By using our website, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 