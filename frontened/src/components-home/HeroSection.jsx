import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle, // WhatsApp-like icon (lucide)
  BadgeCheck,
  Clock,
  Video,
  ArrowRight
} from 'lucide-react';

import profile from '../assets/profile.png'; // ✅ Use your portrait cutout here

const HeroSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    // ✅ Use a warm page background so sections blend better
    <section ref={ref} className="relative w-full bg-[#F7F5F2] overflow-hidden px-4 md:px-8 pt-8 pb-0">
      {/* ✅ Hero Card (white) */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* Soft background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#BC5B44]/10 blur-2xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#0B1926]/5 blur-2xl" />
        </div>

        {/* ✅ Background big text (more subtle + no hard gradient) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="text-[16vw] sm:text-[18vw] md:text-[20vw] font-serif font-semibold select-none tracking-[0.10em] uppercase"
            style={{
              color: 'rgba(11,25,38,0.04)',
              letterSpacing: '0.08em',
              fontVariationSettings: '"wght" 300',
            }}
          >
            LAWYER
          </motion.span>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 sm:px-10 py-10 sm:py-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            {/* ✅ Must content (no reduction) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1926] leading-tight">
              Advocate <span className="text-[#BC5B44]">Jimit Thakore</span>
            </h1>

            <h2 className="mt-3 text-base sm:text-lg text-[#0B1926]/80 font-medium">
              Civil &amp; Property Disputes, Criminal Defence, Family Law
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#0B1926]/70 leading-relaxed max-w-xl">
              Clear guidance, strong representation, and timely updates—so each step stays simple and transparent.
            </p>

            {/* Trust chips (compact, space-saving) */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BC5B44]/10 text-[#BC5B44] text-xs sm:text-sm">
                <Clock size={16} />
                8+ Years Experience
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1926]/5 text-[#0B1926] text-xs sm:text-sm">
                <BadgeCheck size={16} />
                Bar Council Registered
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1926]/5 text-[#0B1926] text-xs sm:text-sm">
                <Video size={16} />
                In-person &amp; Online
              </span>
            </div>

            {/* ✅ Contact row (Option A)
                Desktop: 1 row (Call → WhatsApp → Email)
                Mobile: 2 rows (Call+WhatsApp) + Email full-width
            */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Call */}
              <a
                href="tel:+918128257961"
                className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-3 py-3 text-sm font-semibold text-[#0B1926] shadow-sm hover:shadow-md transition"
              >
                <Phone size={18} className="text-[#BC5B44]" />
                <span className="whitespace-nowrap">+91 81282 57961</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918128257961"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-3 py-3 text-sm font-semibold text-[#0B1926] shadow-sm hover:shadow-md transition"
              >
                <MessageCircle size={18} className="text-[#BC5B44]" />
                WhatsApp
              </a>

              {/* Email full width on mobile, single cell on desktop */}
              <a
                href="mailto:thakorejimit5619@gmail.com"
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-3 py-3 text-sm font-semibold text-[#0B1926] shadow-sm hover:shadow-md transition"
                title="thakorejimit5619@gmail.com"
              >
                <Mail size={18} className="text-[#BC5B44]" />
                <span className="truncate max-w-[220px] sm:max-w-[180px] md:max-w-[200px]">
                  thakorejimit5619@gmail.com
                </span>
              </a>
            </div>

            {/* Practice shortcuts */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-2 rounded-xl bg-[#0B1926]/5 text-[#0B1926] text-xs sm:text-sm font-medium">
                Family &amp; Divorce
              </span>
              <span className="px-3 py-2 rounded-xl bg-[#0B1926]/5 text-[#0B1926] text-xs sm:text-sm font-medium">
                Civil &amp; Property
              </span>
              <span className="px-3 py-2 rounded-xl bg-[#0B1926]/5 text-[#0B1926] text-xs sm:text-sm font-medium">
                Criminal Defence
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BC5B44] px-6 py-3 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#a04b37] transition"
              >
                Request Consultation <ArrowRight size={18} />
              </a>

              <a
                href="/service"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#BC5B44] px-6 py-3 text-[#BC5B44] text-sm font-semibold hover:bg-[#BC5B44]/5 transition"
              >
                View Practice Areas
              </a>
            </div>

            {/* Disclaimer line */}
            <p className="mt-4 text-xs text-[#0B1926]/50">
              Information on this website is for general purposes and does not constitute legal advice.
            </p>
          </motion.div>

          {/* RIGHT (portrait) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] lg:w-[420px] lg:h-[520px]">
              {/* ✅ Soft radial “halo” behind the person (no harsh edge) */}
              <div
                className="absolute inset-0 rounded-[999px] blur-[0.2px]"
                style={{
                  background:
                    'radial-gradient(circle at 50% 45%, rgba(188,91,68,0.92), rgba(188,91,68,0.55))',
                  transform: 'scale(0.84)',
                }}
              />

              {/* ✅ portrait cutout */}
              <img
                src={profile}
                alt="Advocate Jimit Thakore"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  // Helps remove “cutout looks pasted” feeling
                  filter: 'drop-shadow(0 18px 40px rgba(11,25,38,0.20))',
                }}
              />

              {/* subtle corner accents */}
              <div className="absolute -left-8 top-10 w-20 h-20 rounded-full bg-[#BC5B44]/10 blur-xl" />
              <div className="absolute -right-10 bottom-6 w-28 h-28 rounded-full bg-[#0B1926]/5 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ Seamless blend to next section background (fixes the “two background colors” hard cut) */}
      <div className="max-w-6xl mx-auto">
        <div className="h-10 w-full bg-gradient-to-b from-white to-[#F7F5F2]" />
      </div>
    </section>
  );
};

export default HeroSection;
