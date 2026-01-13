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

// ✅ Update these once
const PHONE_E164 = "+918128257961";
const WHATSAPP_NUMBER = "918128257961"; // wa.me without +

const Ourservices = () => {
  const services = [
    {
      title: "Divorce & Family Matters",
      desc: "Divorce, maintenance, custody, and family disputes.",
      help: "Common help: mutual consent, notices",
      icon: <FaHeart className="text-white text-[14px]" />,
      href: "/service#family",
    },
    {
      title: "Civil & Property Disputes",
      desc: "Partition, injunctions, possession, and title checks.",
      help: "Common help: documentation review",
      icon: <FaHome className="text-white text-[14px]" />,
      href: "/service#civil",
    },
    {
      title: "Criminal Defence",
      desc: "Guidance from FIR to hearings and court representation.",
      help: "Common help: case strategy, court",
      icon: <FaUserShield className="text-white text-[14px]" />,
      href: "/service#criminal",
    },
    {
      title: "Bail & Anticipatory Bail",
      desc: "Urgent support for bail applications and next steps.",
      help: "Common help: bail, anticipatory bail",
      icon: <FaGavel className="text-white text-[14px]" />,
      href: "/service#bail",
    },
    {
      title: "Cheque Bounce (NI Act 138)",
      desc: "Notices, replies, filing, and recovery support.",
      help: "Common help: legal notice & filing",
      icon: <FaMoneyCheckAlt className="text-white text-[14px]" />,
      href: "/service#ni-act",
    },
    {
      title: "Agreements & Legal Drafting",
      desc: "Drafting/review for business and personal deals, MOUs, affidavits.",
      help: "Common help: MOUs, affidavits",
      icon: <FaRegFileAlt className="text-white text-[14px]" />,
      href: "/service#drafting",
    },
  ];

  return (
    <section id="practice-areas" className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-[#F3EDE8] px-6 py-10 sm:px-8 sm:py-12 md:px-12"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-[#BC5B44] text-[11px] font-semibold tracking-[0.28em]">
            PRACTICE AREAS
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#0B1926]">
            How can we help?
          </h2>

          <div className="mt-3 flex justify-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[#BC5B44]" />
            <span className="h-1 w-10 rounded-full bg-[#b14a35]" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-[#0B1926]/70">
            Choose a category below, or contact directly for quick guidance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              whileHover={{ y: -3 }}
              className="group relative rounded-2xl bg-white/80 backdrop-blur border border-white/70 shadow-[0_10px_24px_rgba(11,25,38,0.08)] hover:shadow-[0_14px_34px_rgba(11,25,38,0.12)] transition overflow-hidden"
            >
              {/* soft inner glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-r from-[#BC5B44]/10 to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="h-10 w-10 rounded-full bg-[#BC5B44] flex items-center justify-center shrink-0 shadow-sm">
                    {s.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold text-[#0B1926] leading-snug">
                      {s.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#0B1926]/70 leading-relaxed">
                      {s.desc}
                    </p>

                    <p className="mt-2 text-[12px] text-[#0B1926]/55">
                      {s.help}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF2EF] px-3 py-1.5 text-sm font-semibold text-[#BC5B44] border border-[#F3D7D0]">
                      Explore{" "}
                      <span className="group-hover:translate-x-0.5 transition">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom actions (as per finalized design) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#BC5B44] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#b14a35] transition"
          >
            <FaPhoneAlt className="text-white" />
            Call
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#BC5B44] border border-[#BC5B44] hover:bg-[#fff8f7] transition shadow-sm"
          >
            <FaWhatsapp className="text-[#25D366]" />
            WhatsApp
          </a>
        </div>

        <p className="mt-4 text-center text-sm text-[#0B1926]/65">
          Not sure which category fits? WhatsApp your issue briefly and get next steps.
        </p>
      </motion.div>
    </section>
  );
};

export default Ourservices;
