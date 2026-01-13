import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Clock, Phone, Mail } from "lucide-react";

// ✅ Update once if needed
const PHONE_DISPLAY = "+91-8128257961";
const PHONE_E164 = "+918128257961";
const EMAIL = "thakorejimit5619@gmail.com";

// ✅ Put your portrait cutout here (same as Hero, smaller)
import profile from "../assets/profile.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F7F5F2] px-4 sm:px-6 md:px-8 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B1926]">
            About Advocate Jimit Thakore
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#0B1926]/65">
            Experienced legal representation with strategic guidance.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur border border-[#0B1926]/10 shadow-sm"
        >
          {/* Soft background decorations */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#BC5B44]/12 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#0B1926]/8 blur-2xl" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            {/* Left: Portrait */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative w-[220px] h-[260px] sm:w-[240px] sm:h-[290px] md:w-[260px] md:h-[310px]">
                {/* halo */}
                <div
                  className="absolute inset-0 rounded-[999px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, rgba(188,91,68,0.92), rgba(188,91,68,0.55))",
                    transform: "scale(0.88)",
                    filter: "blur(0.2px)",
                  }}
                />
                <img
                  src={profile}
                  alt="Advocate Jimit Thakore"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 18px 40px rgba(11,25,38,0.18))",
                  }}
                />
                <div className="absolute -left-6 top-10 w-16 h-16 rounded-full bg-[#BC5B44]/10 blur-xl" />
                <div className="absolute -right-8 bottom-6 w-20 h-20 rounded-full bg-[#0B1926]/8 blur-xl" />
              </div>
            </div>

            {/* Right: Content (3 paragraphs) */}
            <div className="md:pt-2">
              <p className="text-[#0B1926] text-base sm:text-lg leading-relaxed">
                <span className="font-semibold">
                  Myself Advocate Jimit Thakore
                </span>{" "}
                with <span className="font-semibold">8+ years</span> of experience
                handling <span className="font-semibold">Civil, Criminal, Family,</span>{" "}
                and <span className="font-semibold">Property</span> matters.
              </p>

              <p className="mt-4 text-[#0B1926]/75 text-sm sm:text-base leading-relaxed">
                I assist clients with the complete journey—starting from clear
                case guidance, documentation review, legal notices and replies, to
                drafting and negotiations, and court representation when disputes
                require strong advocacy.
              </p>

              <p className="mt-4 text-[#0B1926]/75 text-sm sm:text-base leading-relaxed">
                Support includes matters such as property and possession disputes,
                partition and injunctions, recovery and civil claims, family disputes
                (divorce, maintenance, custody), and criminal matters where timely
                procedural steps are critical. Clients can expect plain-language advice,
                realistic options, disciplined timelines, confidentiality, and regular
                updates, so decisions remain confident and stress stays controlled.
                The approach stays structured: facts and documents are organised first,
                options are explained clearly, next steps are mapped with expected
                timelines, and representation/drafting is executed with a focus on
                practical resolution and strong legal protection.
              </p>
            </div>
          </div>

          {/* Bottom chips row */}
          <div className="relative border-t border-[#0B1926]/10 bg-white/60">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between px-6 sm:px-8 md:px-10 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                <div className="flex items-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B1926] shadow-sm">
                  <BadgeCheck size={18} className="text-[#BC5B44]" />
                  Bar Council Registered
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B1926] shadow-sm">
                  <Clock size={18} className="text-[#BC5B44]" />
                  8+ Years Experience
                </div>

                <a
                  href={`tel:${PHONE_E164}`}
                  className="flex items-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B1926] shadow-sm hover:shadow-md transition"
                >
                  <Phone size={18} className="text-[#BC5B44]" />
                  {PHONE_DISPLAY}
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 rounded-xl border border-[#0B1926]/10 bg-white px-4 py-3 text-sm font-semibold text-[#0B1926] shadow-sm hover:shadow-md transition"
                  title={EMAIL}
                >
                  <Mail size={18} className="text-[#BC5B44]" />
                  <span className="truncate">{EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
