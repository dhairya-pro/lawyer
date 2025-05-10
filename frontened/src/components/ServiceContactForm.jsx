import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ServiceContactForm = ({ title = "Let's Talk", subtitle = "Need help with a legal case? Contact us for expert legal guidance and support." }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        caseDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                caseDetails: ''
            });
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#C85E4D] to-[#1E3A8A] text-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Contact Info */}
                        <div className="md:w-2/5 bg-[#1E3A8A] p-12 text-white">
                            <h2 className="text-3xl font-bold mb-8">{title}</h2>
                            <p className="mb-8">{subtitle}</p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-[#E6D8B8] rounded-full flex items-center justify-center mr-4">
                                        <FaPhoneAlt className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p>+91-8128257961</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-[#E6D8B8] rounded-full flex items-center justify-center mr-4">
                                        <FaEnvelope className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p>thakorejimit5619@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-[#E6D8B8] rounded-full flex items-center justify-center mr-4">
                                        <FaWhatsapp className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">WhatsApp</h3>
                                        <p>Click to chat directly</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <p className="text-gray-200">✅ Trusted | ✅ Experienced | ✅ Legal Specialist</p>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="md:w-3/5 p-12">
                            <h2 className="text-3xl font-bold mb-8">Request a Consultation</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C85E4D]" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C85E4D]" 
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C85E4D]" 
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Case Details</label>
                                    <textarea 
                                        rows="4" 
                                        name="caseDetails"
                                        value={formData.caseDetails}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C85E4D]"
                                    ></textarea>
                                </div>
                                {submitStatus && (
                                    <div className={`mb-4 p-3 rounded-lg ${
                                        submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full bg-[#C85E4D] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#1E3A8A] transition-colors ${
                                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContactForm; 