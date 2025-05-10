import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const TermsOfService = () => {
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

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-[#0B1926] mb-8 text-center">
            Terms of Service
          </h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <p className="mb-4">
                These Terms of Service ("Terms") govern your access to and use of the website provided by Advocate Jimit Ankur Thakore ("we," "us," "our"). By accessing or using our website, you agree to comply with and be bound by these Terms. Please review them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Acceptance of Terms</h2>
              <p>
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you disagree with any part of these Terms, please refrain from using this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Use of Website</h2>
              <p>
                You agree to use this website solely for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">No Attorney-Client Relationship</h2>
              <p>
                The information provided on this website is strictly for informational purposes and does not constitute legal advice. Accessing this website or communicating via email or other forms of communication does not create an attorney-client relationship between you and Advocate Jimit Ankur Thakore.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Intellectual Property Rights</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and digital downloads, is the property of Advocate Jimit Ankur Thakore and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or otherwise exploit any content without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Disclaimer of Liability</h2>
              <p>
                The content provided on this website is for general informational purposes only and may not reflect current legal developments. Advocate Jimit Ankur Thakore disclaims all liability for any errors or omissions in the content and is not liable for any loss or damage arising from reliance on the information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Links to Third-Party Websites</h2>
              <p>
                This website may contain links to third-party websites that we do not control. We are not responsible for the content, accuracy, or privacy practices of any linked external websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Modification of Terms</h2>
              <p>
                We reserve the right to revise or update these Terms at any time without prior notice. All changes will be effective immediately upon posting. Your continued use of the website signifies acceptance of these revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0B1926] mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, and any disputes arising hereunder shall be subject to the jurisdiction of courts in Ahmedabad, Gujarat.
              </p>
            </section>

            <section className="border-t pt-6">
              <p className="text-center font-medium">
                By accessing and using this website, you affirm your acceptance of these Terms of Service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 