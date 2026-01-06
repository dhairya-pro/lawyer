import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHandshake,
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaIdCard,
  FaRegClock,
  FaComments,
} from "react-icons/fa";

import about from "../assets/about.png"; // your hero image (same as old)

const PHONE_E164 = "+918128257961";
const PHONE_DISPLAY = "+91-8128257961";
const EMAIL = "thakorejimit5619@gmail.com";
const WHATSAPP_NUMBER = "918128257961"; // for wa.me (no +)

const LegalAdvisorHero = () => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  // Background animation effect (optimized: uses hero container size, fewer particles)
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      const rect = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
    };

    setCanvasDimensions();

    const ro = new ResizeObserver(() => setCanvasDimensions());
    ro.observe(wrap);

    const symbols = [
      { icon: "§", size: 14 },
      { icon: "⚖", size: 18 },
      { icon: "¶", size: 14 },
      { icon: "†", size: 16 },
    ];

    const particles = [];
    const particleCount = 16;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.12 + Math.random() * 0.22,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: 0.05 + Math.random() * 0.08,
        direction: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        if (p.x < 0 || p.x > canvas.width) p.direction = Math.PI - p.direction;
        if (p.y < 0 || p.y > canvas.height) p.direction = -p.direction;

        ctx.font = `${p.symbol.size}px serif`;
        ctx.fillStyle = `rgba(194, 93, 69, ${p.opacity})`;
        ctx.fillText(p.symbol.icon, p.x, p.y);
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      {/* ✅ IMPORTANT: Keep styles INSIDE component (works in React) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes pulseShadow {
          0%, 100% { box-shadow: 0 8px 32px 0 rgba(194,93,69,0.16); }
          50% { box-shadow: 0 16px 48px 0 rgba(194,93,69,0.28); }
        }
        .animate-pulseShadow {
          animation: pulseShadow 2.6s ease-in-out infinite;
        }
      `}</style>

      {/* Background canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.65 }}
        aria-hidden="true"
      />

      {/* Decorative elements */}
      <div className="absolute -top-10 left-6 h-28 w-28 rounded-full bg-[#c25d45] opacity-[0.06]" />
      <div className="absolute bottom-8 right-6 h-44 w-44 rounded-full bg-[#c25d45] opacity-[0.06]" />
      <div className="absolute top-1/2 left-1/4 h-20 w-20 -translate-y-1/2 rounded-full bg-gray-200 opacity-[0.12]" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* LEFT SIDE */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {/* ✅ Updated headline (no comma, no duplication, better SEO) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900">
            Advocate <span className="text-[#c25d45]">Jimit Thakore</span>
          </h1>

          {/* ✅ No Ahmedabad mention */}
          <p className="mt-3 text-lg sm:text-xl text-gray-800">
            Civil, Criminal, Family &amp; Property Matters
          </p>

          {/* ✅ Novice-friendly 1-liner */}
          <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-xl">
            Clear guidance, strong representation, and timely updates—so each
            step stays simple and transparent.
          </p>

          {/* ✅ Trust badges (8+ years) */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff8f7] px-3 py-1.5 text-xs text-gray-700 shadow-sm">
              <FaRegClock className="text-[#c25d45]" /> 8+ Years Experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff8f7] px-3 py-1.5 text-xs text-gray-700 shadow-sm">
              <FaIdCard className="text-[#c25d45]" /> Bar Council Registered
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff8f7] px-3 py-1.5 text-xs text-gray-700 shadow-sm">
              <FaComments className="text-[#c25d45]" /> In-person &amp; Online
            </span>
          </div>

          {/* ✅ Contact actions (Call + WhatsApp primary; email secondary) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            <a
              href={`tel:${PHONE_E164}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur-sm px-4 py-3 shadow-sm hover:bg-white/90 transition"
            >
              <FaPhone className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">
                Call {PHONE_DISPLAY}
              </span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-white/70 backdrop-blur-sm px-4 py-3 shadow-sm hover:bg-white/90 transition"
            >
              <FaWhatsapp className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">WhatsApp</span>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="sm:col-span-2 flex items-center justify-center gap-2 rounded-xl bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm hover:bg-white/85 transition"
            >
              <FaEnvelope className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">{EMAIL}</span>
            </a>
          </div>

          {/* ✅ Practice areas (clear labels for novices) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            <div className="flex items-center gap-2 rounded-xl bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm">
              <FaHandshake className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">
                Family &amp; Divorce
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm">
              <FaBalanceScale className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">
                Civil &amp; Property
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm">
              <FaShieldAlt className="text-[#c25d45]" />
              <span className="text-sm font-medium text-gray-900">
                Criminal Defence
              </span>
            </div>
          </div>

          {/* ✅ CTAs (replace “Free Consultation” -> “Request Consultation”) */}
          <div className="mt-7 flex flex-wrap gap-3">
            <motion.button
              className="bg-[#c25d45] hover:bg-[#b14a35] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = `tel:${PHONE_E164}`;
              }}
            >
              Request Consultation
            </motion.button>

            <motion.button
              className="border border-[#c25d45] text-[#c25d45] hover:bg-[#fff8f7] text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = "/service";
              }}
            >
              View Practice Areas
            </motion.button>
          </div>

          {/* ✅ Single disclaimer (no duplication) */}
          <p className="mt-3 text-xs text-gray-500 max-w-xl">
            Information on this website is for general purposes and does not
            constitute legal advice.
          </p>
        </motion.div>

        {/* RIGHT SIDE (your existing image design) */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end z-20"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          <div className="relative flex items-center justify-center w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] lg:w-[520px] lg:h-[520px]">
            {/* Accent circle behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[85%] w-[85%] rounded-full bg-[#c25d45]" />
            </div>

            <motion.div
              className="relative z-10 animate-float animate-pulseShadow rounded-full p-2 bg-white/20"
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={about}
                alt="Advocate Jimit Thakore"
                className="w-[240px] h-[300px] sm:w-[290px] sm:h-[350px] lg:w-[420px] lg:h-[520px] object-contain object-center"
                style={{ background: "transparent" }}
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LegalAdvisorHero;
