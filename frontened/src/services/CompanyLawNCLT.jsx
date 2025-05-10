import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaBalanceScale, FaGavel, FaMapMarkedAlt, FaChartLine, FaQuestionCircle, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaGlobe, FaHandshake, FaRegPaperPlane } from 'react-icons/fa';
import ServiceContactForm from '../components/ServiceContactForm';
const CompanyLawNCLT = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [expandedFaq, setExpandedFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const practiceAreas = [
        {
            title: "NCLT Matters",
            items: [
                "Insolvency proceedings",
                "Corporate restructuring",
                "Mergers and acquisitions",
                "Corporate disputes"
            ]
        },
        {
            title: "Company Law",
            items: [
                "Corporate governance",
                "Board meetings",
                "Shareholder rights",
                "Company compliance"
            ]
        },
        {
            title: "Corporate Litigation",
            items: [
                "Corporate disputes",
                "Boardroom conflicts",
                "Shareholder disputes",
                "Corporate fraud"
            ]
        },
        {
            title: "Business Advisory",
            items: [
                "Legal structuring",
                "Risk management",
                "Compliance advisory",
                "Business contracts"
            ]
        }
    ];

    const reasonsToChoose = [
        "Expert NCLT Team",
        "Corporate Law Specialists",
        "Quick Resolution",
        "Pan-Gujarat Coverage",
        "Business Understanding",
        "Proven Track Record"
    ];

    const locations = [
        "Ahmedabad", "Gandhinagar", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Bharuch", "Anand", "Mehsana", "Patan", "Nadiad"
    ];

    const processSteps = [
        "Initial assessment & documentation review",
        "Legal strategy development",
        "Court representation & proceedings",
        "Resolution & implementation"
    ];

    const faqs = [
        {
            question: "What types of NCLT cases do you handle?",
            answer: "We handle various NCLT matters including insolvency proceedings, corporate restructuring, mergers and acquisitions, and corporate disputes."
        },
        {
            question: "How long does an NCLT case typically take?",
            answer: "The duration varies based on case complexity, but we work efficiently to ensure timely resolution while maintaining quality representation."
        },
        {
            question: "Do you provide preventive legal services for companies?",
            answer: "Yes, we offer comprehensive preventive services including corporate governance advisory, compliance audits, and risk management strategies."
        }
    ];

    return (
        <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section with Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center" 
                    style={{ 
                        backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80')",
                        transform: `translateY(${scrollY * 0.5}px)`,
                        filter: 'brightness(0.4)'
                    }}
                ></div>
                
                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-2 px-6 mb-6 bg-[#C85E4D] text-white rounded-full">
                            <span className="flex items-center">
                                <FaBuilding className="mr-2" /> Company Law & NCLT
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                            Company Law <br/>
                            <span className="text-[#C85E4D]">NCLT & Corporate Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12">
                            Expert legal solutions for corporate matters, NCLT proceedings, and business disputes across Gujarat
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#C85E4D] text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center" 
                                onClick={() => window.location.href = 'tel:+918128257961'}
                            >
                                <FaPhoneAlt className="mr-2" /> Call Now
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center"
                                onClick={() => window.location.href = 'https://wa.me/918128257961'}
                            >
                                <FaWhatsapp className="mr-2 text-green-600" /> Chat on WhatsApp
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">
                        <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </section>

            {/* Introduction with animated background */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#E6D8B8] rounded-full opacity-10" 
                         style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.05}px)` }}></div>
                    <div className="absolute top-40 right-20 w-80 h-80 bg-[#F5F5F0] rounded-full opacity-10"
                         style={{ transform: `translate(${scrollY * 0.15}px, ${-scrollY * 0.05}px)` }}></div>
                    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#C85E4D] rounded-full opacity-10"
                         style={{ transform: `translate(${-scrollY * 0.05}px, ${-scrollY * 0.1}px)` }}></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold mb-8 text-gray-800">
                            Corporate challenges? <span className="text-[#C85E4D]">Get expert legal solutions.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            From NCLT proceedings to corporate governance, we provide comprehensive legal solutions for all your business needs.
                        </p>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#C85E4D]"
                            >
                                <div className="w-16 h-16 bg-[#E6D8B8] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaBuilding className="text-[#C85E4D] text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">NCLT Matters</h3>
                                <p className="text-gray-600">Expert handling of insolvency and restructuring.</p>
                            </motion.div>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E3A8A]"
                            >
                                <div className="w-16 h-16 bg-[#F5F5F0] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaGavel className="text-[#1E3A8A] text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Company Law</h3>
                                <p className="text-gray-600">Comprehensive corporate legal support.</p>
                            </motion.div>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E3A8A]"
                            >
                                <div className="w-16 h-16 bg-[#E6D8B8] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaBalanceScale className="text-[#C85E4D] text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Business Advisory</h3>
                                <p className="text-gray-600">Strategic legal guidance for businesses.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Practice Areas with Tab Interface */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <div className="inline-block p-2 px-6 mb-4 bg-[#E6D8B8] text-gray-800 rounded-full">
                            <span className="flex items-center justify-center">
                                <FaBuilding className="mr-2" /> Our Services
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Company Law Services</h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center mb-12">
                        {practiceAreas.map((area, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 m-2 rounded-full font-medium transition-all ${
                                    activeTab === index 
                                        ? 'bg-[#C85E4D] text-white shadow-lg' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {area.title}
                            </motion.button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-[#E6D8B8] to-[#F5F5F0] p-8 rounded-3xl shadow-lg max-w-4xl mx-auto"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-[#1E3A8A] text-center">{practiceAreas[activeTab].title}</h3>
                            <ul className="space-y-6">
                                {practiceAreas[activeTab].items.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start transition-transform duration-300 transform hover:translate-x-1"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center mt-1">
                                            <span className="text-white text-lg">✓</span>
                                        </div>
                                        <div className="ml-4">
                                            <span className="text-lg font-semibold text-gray-800">{item}</span>
                                            <p className="text-gray-600 mt-1">Expert legal support for corporate matters.</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-[#F5F5F0]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-[#1E3A8A]">Why Choose Our Company Law Team?</h2>
                        <p className="mt-4 text-lg text-gray-600">Your business deserves expert legal protection.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasonsToChoose.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-[#C85E4D] rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1E3A8A] ml-4">{reason}</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We are committed to protecting your business interests.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Served with Interactive Map */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <div className="inline-block p-2 px-6 mb-4 bg-[#C85E4D] text-white rounded-full">
                            <span className="flex items-center justify-center">
                                <FaMapMarkedAlt className="mr-2" /> Coverage
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Locations Served – All Across Gujarat</h2>
                        <p className="mt-4 text-lg text-gray-600">We serve clients in all major cities and districts.</p>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* Map Visualization */}
                        <div className="lg:w-1/2 relative h-96 lg:h-auto">
                            <div className="absolute inset-0 bg-cover bg-center opacity-90 h-full"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')" }}>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800">NRI & Outstation Clients</h3>
                                    <p className="text-gray-700 mb-4">Remote legal consultation available for corporate matters in Gujarat.</p>
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex items-center">
                                            <FaGlobe className="text-[#C85E4D] mr-2" />
                                            <span className="text-gray-700">Global Consultation</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaHandshake className="text-[#C85E4D] mr-2" />
                                            <span className="text-gray-700">Trustworthy Partnerships</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaRegPaperPlane className="text-[#C85E4D] mr-2" />
                                            <span className="text-gray-700">Swift Document Handling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Locations List */}
                        <div className="lg:w-1/2 p-8">
                            <h3 className="text-xl font-bold mb-6 text-gray-800">Districts Covered:</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {locations.map((location, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-[#E6D8B8] p-4 rounded-lg shadow-md flex items-center justify-center"
                                    >
                                        <span className="text-gray-800 font-semibold">{location}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section with Timeline */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <div className="inline-block p-2 px-6 mb-4 bg-[#C85E4D] text-white rounded-full">
                            <span className="flex items-center justify-center">
                                <FaChartLine className="mr-2" /> Our Approach
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Process – What to Expect?</h2>
                    </motion.div>
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[#C85E4D] transform md:translate-x-px"></div>
                        {/* Timeline Items */}
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row mb-16 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline Circle */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full transform -translate-x-1/2 flex items-center justify-center">
                                    <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                }`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg">
                                        <h3 className="text-xl font-bold mb-2 text-[#C85E4D]">Step {index + 1}</h3>
                                        <p className="text-gray-700">{step}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs with Accordion */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <div className="inline-block p-2 px-6 mb-4 bg-[#C85E4D] text-white rounded-full">
                            <span className="flex items-center justify-center">
                                <FaQuestionCircle className="mr-2" /> Common Questions
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions (FAQs)</h2>
                    </motion.div>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-6"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className={`w-full p-6 flex justify-between items-center text-left rounded-xl shadow-md ${
                                        expandedFaq === index ? 'bg-[#C85E4D] text-white' : 'bg-gray-50 text-gray-800'
                                    }`}
                                >
                                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                                    <span className="text-2xl">
                                        {expandedFaq === index ? '−' : '+'}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 bg-white border-2 border-t-0 border-[#C85E4D] rounded-b-xl">
                                                <p className="text-gray-700">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

               {/* Contact Section */}
               <ServiceContactForm 
                title="Let's Talk"
                subtitle="Need help with a bail or anticipatory bail case? Contact us for expert legal guidance and support."
            />
        </div>
    );
};

export default CompanyLawNCLT; 