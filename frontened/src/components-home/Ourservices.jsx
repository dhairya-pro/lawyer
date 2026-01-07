import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaHome,
  FaGavel,
  FaRegFileAlt,
  FaMoneyCheckAlt,
  FaUserShield,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

// ✅ Update these once (number / email / routes)
const PHONE_E164 = "+918128257961";
const WHATSAPP_NUMBER = "918128257961"; // wa.me without +

const Ourservices = () => {
  const services = [
    {
      title: "Divorce & Family Matters",
      desc: "Divorce, maintenance, custody, and family disputes.",
      help: "Common help: mutual consent, notices",
      icon: <FaHeart className="text-white text-base" />,
      href: "/service#family",
    },
    {
      title: "Civil & Property Disputes",
      desc: "Partition, injunctions, possession, and title checks.",
      help: "Common help: documentation review",
      icon: <FaHome className="text-white text-base" />,
      href: "/service#civil",
    },
    {
      title: "Criminal Defence",
      desc: "Guidance from FIR to hearings and court representation.",
      help: "Common help: case strategy, court",
      icon: <FaUserShield className="text-white text-base" />,
      href: "/service#criminal",
    },
    {
      title: "Bail & Anticipatory Bail",
      desc: "Urgent support for bail applications and next steps.",
      help: "Common help: bail, anticipatory bail",
      icon: <FaGavel className="text-white text-base" />,
      href: "/service#bail",
    },
    {
      title: "Cheque Bounce (NI Act 138)",
      desc: "Notices, replies, filing, and recovery support.",
      help: "Common help: legal notice & filing",
      icon: <FaMoneyCheckAlt className="text-white text-base" />,
      href: "/service#ni-act",
    },
    {
      title: "Agreements & Legal Drafting",
      desc: "Drafting/review for business and personal deals.",
      help: "Common help: MOUs, affidavits",
      icon: <FaRegFileAlt className="text-white text-base" />,
      href: "/service#drafting",
    },
  ];

  return (
    <section
  id="practice-areas"
  className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10"
>
     <motion.div
        className="bg-[#EDEAD9] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#BC5B44] text-xs font-semibold tracking-widest">
            PRACTICE AREAS
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2">
            How can we help?
          </h2>

          <div className="flex justify-center mt-3 gap-2">
            <span className="h-1 w-20 rounded-full bg-[#BC5B44]" />
            <span className="h-1 w-10 rounded-full bg-[#b14a35]" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Choose a category below, or contact directly for quick guidance.
          </p>

          {/* Quick actions (top right on desktop, centered on mobile) */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-end gap-3">
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#BC5B44] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#b14a35] transition"
            >
              <FaPhoneAlt className="text-white" />
              Call
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#BC5B44] border border-[#BC5B44] hover:bg-[#fff8f7] transition"
            >
              <FaWhatsapp className="text-[#BC5B44]" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition border border-gray-200"
            >
              {/* Left accent strip */}
              <div className="relative">
                <span className="absolute -left-5 top-0 bottom-0 w-1.5 rounded-full bg-[#BC5B44]" />
              </div>

              <div className="flex items-start gap-4">
                {/* Icon bubble */}
                <div className="w-10 h-10 bg-[#BC5B44] rounded-full flex items-center justify-center shrink-0">
                  {s.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">{s.help}</p>

                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#fff8f7] px-3 py-1.5 text-sm font-semibold text-[#BC5B44] border border-[#f0e8e6]">
                    Explore <span className="group-hover:translate-x-0.5 transition">→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Helper line */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Not sure which category fits? WhatsApp your issue briefly and get next steps.
        </p>
      </motion.div>
    </section>
  );
};

export default Ourservices;
