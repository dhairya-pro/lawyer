import React, { useState } from 'react';
import { Card } from './ui/Card.jsx';
import { Input } from './ui/Input.jsx';
import { Textarea } from './ui/Textarea.jsx';
import { Button } from './ui/Button.jsx';
import { Phone, Mail, MapPin, Clock, Scale, Send, Gavel, FileText, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState({ loading: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '' });

        // Simulating API call
        setTimeout(() => {
            setStatus({ loading: false, message: 'Your consultation request has been sent successfully!' });
            setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
        }, 1500);
    };

    return (
        <div className="bg-[#F8F9FA] w-full overflow-hidden">
            {/* Fixed spacer for navbar */}
            <div className="h-28 sm:h-24 md:h-20"></div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center items-center mb-4 sm:mb-6 space-x-4">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Scale className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#BC5B44]" />
                        </motion.div>
                        <motion.div
                            whileHover={{ rotate: -15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Gavel className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#9c4a38]" />
                        </motion.div>
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#BC5B44]" />
                        </motion.div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#333] mb-3 sm:mb-4 tracking-tight px-2">
                        Legal Consultation
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#555] max-w-2xl mx-auto leading-relaxed px-2">
                        Schedule a consultation with our experienced attorneys to discuss your legal matters. We're committed to providing expert legal advice tailored to your specific needs.
                    </p>
                </motion.div>

                {/* Cards Container - Strictly controlled layout */}
                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Contact Info Card */}
                    <motion.div
                        className="w-full lg:w-1/3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg border border-gray-100 h-full">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#333] mb-4 sm:mb-6">Contact Information</h2>
                            <div className="space-y-4 sm:space-y-5">
                                {[
                                    { icon: Phone, label: 'Phone', value: '+91 99250 02031' },
                                    { icon: Phone, label: 'Alternative', value: '+91 79 4800 1468' },
                                    { icon: Mail, label: 'Email', value: 'advocatepmmodi@gmail.com' },
                                    { icon: MapPin, label: 'Office Location', values: ['C-112, Supath-2 Complex', 'Nr.Juna Wadaj Bus Stand', 'Ashram Road, Ahmedabad', 'Gujarat, India - 380013'] },
                                    { icon: Clock, label: 'Office Hours', values: ['Mon to Sat: 6:30AM - 10:30PM', 'Sunday: Closed'] }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <motion.div
                                            className="p-2 sm:p-2.5 bg-[#f8eeeb] rounded-full shadow-sm flex-shrink-0"
                                            whileHover={{ scale: 1.1, backgroundColor: "#f5e0db" }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#BC5B44]" />
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm sm:text-base text-[#333]">{item.label}</p>
                                            {item.value && <p className="text-xs sm:text-sm text-[#555] break-words">{item.value}</p>}
                                            {item.values && item.values.map((val, idx) => (
                                                <p key={idx} className="text-xs sm:text-sm text-[#555] break-words">{val}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 sm:mt-8 hidden sm:block">
                                <p className="text-center text-xs sm:text-sm text-[#555] italic">
                                    "Justice is the constant and perpetual will to allot to every man his due."
                                </p>
                                <p className="text-center text-xs text-[#777] mt-1">— Justinian I</p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg border border-gray-100 h-full">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#333] mb-3 sm:mb-4">Request a Consultation</h2>
                            <p className="text-xs sm:text-sm md:text-base text-[#555] mb-4 sm:mb-6">
                                Please provide your contact information and a brief description of your legal matter. Our team will get back to you within 1-2 business days.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { label: 'First Name', name: 'firstname', icon: FileText },
                                        { label: 'Last Name', name: 'lastname', icon: FileText }
                                    ].map((field, index) => (
                                        <div key={index}>
                                            <label className="block text-xs sm:text-sm font-medium text-[#333] mb-1 sm:mb-2">{field.label}</label>
                                            <div className="relative">
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                    <field.icon className="w-4 h-4 text-[#BC5B44]" />
                                                </div>
                                                <Input
                                                    type="text"
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white border border-gray-300 focus:border-[#BC5B44] transition rounded-md pl-9 h-10 text-sm"
                                                    placeholder={field.label}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {[
                                    { label: 'Email Address', name: 'email', type: 'email', icon: Mail },
                                    { label: 'Phone Number', name: 'phone', type: 'tel', icon: Phone }
                                ].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-xs sm:text-sm font-medium text-[#333] mb-1 sm:mb-2">{field.label}</label>
                                        <div className="relative">
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                <field.icon className="w-4 h-4 text-[#BC5B44]" />
                                            </div>
                                            <Input
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white border border-gray-300 focus:border-[#BC5B44] transition rounded-md pl-9 h-10 text-sm"
                                                placeholder={field.label}
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-[#333] mb-1 sm:mb-2">Case Description</label>
                                    <div className="relative">
                                        <div className="absolute right-3 top-3 pointer-events-none">
                                            <FileText className="w-4 h-4 text-[#BC5B44]" />
                                        </div>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full h-24 sm:h-32 bg-white border border-gray-300 focus:border-[#BC5B44] transition rounded-md pl-9 py-2 pr-3 resize-none text-sm"
                                            placeholder="Please provide details about your legal matter..."
                                        />
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#BC5B44] hover:bg-[#9c4a38] text-white py-2.5 sm:py-3 rounded-md shadow-md flex items-center justify-center space-x-2 text-sm sm:text-base font-medium transition-all duration-300"
                                        disabled={status.loading}
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{status.loading ? 'Submitting...' : 'Submit Case'}</span>
                                    </Button>
                                </motion.div>

                                {status.message && (
                                    <motion.p
                                        className={`text-center mt-3 text-xs sm:text-sm ${status.message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {status.message}
                                    </motion.p>
                                )}

                                <p className="text-xs text-center text-[#777] mt-2">
                                    Your information is kept confidential in accordance with attorney-client privilege.
                                </p>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
