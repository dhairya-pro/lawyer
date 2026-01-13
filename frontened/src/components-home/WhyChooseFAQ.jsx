import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegClock,
  FaIdCard,
  FaComments,
  FaHandshake,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const WhatToExpectSection = () => {
  const why = [
    {
      title: "8+ Years Experience",
      desc: "Practical strategy and steady guidance.",
      icon: <FaRegClock />,
    },
    {
      title: "Bar Council Registered",
      desc: "Professional and ethical practice.",
      icon: <FaIdCard />,
    },
    {
      title: "Clear Communication",
      desc: "Timely updates at each step.",
      icon: <FaComments />,
    },
    {
      title: "Client-First Approach",
      desc: "Personal attention to your matter.",
      icon: <FaHandshake />,
    },
  ];

  const faqs = [
    {
      q: "How soon can I speak with an advocate?",
      a: "Call or WhatsApp is the fastest way to start. After understanding the matter, the next legal steps are explained clearly.",
    },
    {
      q: "What documents should be kept ready?",
      a: "Keep a short summary, key dates, notices/messages, and supporting documents (agreements, property papers, FIR/court papers).",
    },
    {
      q: "Do you provide online consultation?",
      a: "Yes. Online consultation is available for most matters. For urgent issues like bail, sharing details quickly helps decide next steps.",
    },
    {
      q: "How are fees decided?",
      a: "Fees depend on the matter type, urgency, documentation effort, and court involvement. A clear estimate is shared after basic review.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl border border-gray-200 shadow-sm overflow-hidden bg-[#F7EFEA]"
      >
        {/* Header */}
        <div className="text-center px-6 sm:px-10 md:px-12 pt-10 md:pt-12">
          <p className="text-[#BC5B44] text-xs font-semibold tracking-widest uppercase">
            Trust & Guidance
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-bold text-gray-900 mt-2">
            What to Expect
          </h2>

          <div className="w-24 h-1 bg-[#BC5B44] mx-auto rounded-full mt-3" />

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto pb-8">
            How I work, what you can expect, and answers to common questions.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 md:px-12 pb-10 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: Why Clients Choose Us */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Clients Choose Us
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {why.map((w, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#BC5B44]/10 flex items-center justify-center text-xl text-[#BC5B44]">
                        {w.icon}
                      </div>
                      <p className="font-semibold text-gray-900">{w.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: FAQs & consultation details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                FAQs & consultation details
              </h3>

              <div className="space-y-3">
                {faqs.map((f, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 overflow-hidden bg-white/70 backdrop-blur"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-white/90 transition"
                      >
                        <span className="font-semibold text-gray-900">
                          {f.q}
                        </span>
                        <span className="ml-3 text-[#BC5B44]">
                          {isOpen ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-5 pb-4"
                          >
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatToExpectSection;
