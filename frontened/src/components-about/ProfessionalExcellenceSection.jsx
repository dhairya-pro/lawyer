import React from 'react';
import { Card } from '../components/ui/Card';
import { FaCircle } from 'react-icons/fa';

const stats = [
  { value: '500+', label: 'Cases Won' },
  { value: '95%', label: 'Success Rate' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Awards' },
];

const points = [
  'Active in legislative reform and committed to pro bono work for underserved communities.',
  'Senior Partner at Rodriguez & Associates, leading a team of skilled defense attorneys.',
  'Known for a strategic approach rooted in detailed preparation and aggressive advocacy.',
];

const ProfessionalExcellenceSection = () => (
  <section className="relative w-full py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-[#fbeee6] via-[#f7f3ef] to-[#f5e6e0] overflow-hidden">
    {/* Decorative Accent */}
    <div className="hidden md:block absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#c25d45] to-[#fbeee6] rounded-r-2xl shadow-xl z-0" />
    {/* Animated Circles */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c25d45]/10 rounded-full blur-2xl z-0 animate-pulse" />
    <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#c25d45]/10 rounded-full blur-2xl z-0 animate-pulse" />
    {/* Stats Cards */}
    <div className="relative z-10 grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-0 md:mr-8">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex flex-col items-center justify-center w-36 h-28 md:w-44 md:h-36 shadow-xl border-2 border-[#f5e6e0] bg-white/90 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <span className="text-3xl md:text-4xl font-extrabold text-[#c25d45] mb-1 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</span>
          <span className="text-xs md:text-base text-gray-700 font-semibold text-center" style={{ fontFamily: 'Lato, sans-serif' }}>{stat.label}</span>
        </Card>
      ))}
    </div>
    {/* Main Content */}
    <div className="relative z-10 max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-8 py-8 border-l-4 border-[#c25d45]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Professional Excellence
      </h2>
      <h3 className="text-lg md:text-xl font-semibold text-[#c25d45] mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
        Over 15 years of unwavering commitment to criminal defense
      </h3>
      <p className="text-gray-900 font-medium mb-5 leading-relaxed text-base md:text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
        With over 15 years of experience in criminal defense, I've earned a reputation as a determined advocate for clients facing serious charges—from white-collar crimes to violent felonies. I combine meticulous preparation, thorough investigation, and assertive representation to build strong defense strategies.
      </p>
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            <FaCircle className="text-[#c25d45] mt-1" size={12} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
    {/* Custom Keyframes for animation */}
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .animate-pulse { animation: pulse 4s infinite; }
    `}</style>
  </section>
);

export default ProfessionalExcellenceSection; 