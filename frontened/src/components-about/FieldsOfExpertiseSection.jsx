import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Gavel, Building2, FileCheck, Scale, Users, HeartCrack, ShieldCheck, Scroll, Briefcase, Coins, Brain, Home, Landmark, Building, Globe, FileText } from 'lucide-react';

const keyServices = [
  { label: 'Divorce & Separation', percent: 87 },
  { label: 'Civil Partnerships', percent: 93 },
  { label: 'Financial Settlements', percent: 86 },
  { label: 'Prenuptial Agreements', percent: 95 },
];

const serviceCards = [
  { title: "Family Law", path: "/family-law", icon: Users },
  { title: "Legal Advisory", path: "/legal-advisory", icon: FileText }, // Covers Prenuptial Agreements
  { title: "Divorce & Separation", path: "/divorce-separation", icon: HeartCrack }, // Covers Divorce and Divorce Settlements
  { title: "Civil Litigation", path: "/civil-litigation", icon: Landmark },
  { title: "Property & Land Disputes", path: "/property-disputes", icon: Home }, // Covers Financial Settlements
  { title: "Corporate & Business Law", path: "/corporate-business-law", icon: Building2 },
];

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};
const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.3 + i * 0.13, duration: 0.5, type: 'spring', stiffness: 120 }
  })
};

export default function FieldsOfExpertiseSection() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[500px]">
      {/* Left: Headline & Progress Bars */}
      <motion.div
        className="bg-[#181f32] text-white flex-1 px-8 py-14 flex flex-col justify-center min-h-[500px]"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mb-8">
          <span className="uppercase text-[#b88a5a] tracking-widest text-sm font-semibold">Fields of Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          <span className="text-[#b88a5a]">We specialise in</span> family law,<br />divorce, civil partnerships,<br />prenuptial agreements
        </h2>
        <div className="space-y-5 mt-8">
          {keyServices.map((service, idx) => (
            <div key={service.label}>
              <div className="flex justify-between text-base font-medium mb-1">
                <span>{service.label}</span>
                <span>{service.percent}%</span>
              </div>
              <motion.div
                className="w-full h-3 bg-[#2c3450] rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
              >
                <motion.div
                  className="h-full bg-[#b88a5a] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${service.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35 + idx * 0.15 }}
                ></motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Right: Service Cards Grid */}
      <motion.div
        className="flex-1 bg-white flex flex-col justify-center items-center px-4 md:px-0 py-14"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
          {serviceCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 bg-[#b88a5a] bg-opacity-90 rounded-md p-5 shadow-md hover:shadow-lg transition-shadow group"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={card.path} className="flex items-center gap-4 w-full">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-md">
                  <card.icon className="text-[#181f32] w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="text-[#181f32] font-bold text-lg leading-tight group-hover:underline">{card.title}</div>
                </div>
                <motion.div
                  className="text-[#b88a5a] group-hover:text-[#181f32] text-2xl font-bold ml-2"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.45 + idx * 0.13 }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}