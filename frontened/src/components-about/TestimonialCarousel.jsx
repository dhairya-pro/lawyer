/* eslint-disable no-unused-vars */
import React from "react"


const testimonials = [
  {
    id: 1,
    name: "Joe barn",
    location: "Ahemedabad",
    text: `Exceptional Legal Support!\n"I couldn't have asked for a better lawyer. [Lawyer's Name] guided me through a complex case with professionalism and care. Highly recommend!"`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)' // Example gradient color from your site
  },
  {
    id: 2,
    name: "Jane Doe",
    location: "Mumbai",
    text: `Outstanding Service!\n"Very knowledgeable and supportive throughout my case. Would definitely recommend to others."`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)'
  },
  {
    id: 3,
    name: "Sam Smith",
    location: "Delhi",
    text: `Professional and Reliable!\n"Helped me resolve my legal issues quickly and efficiently. Thank you!"`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)'
  },
  {
    id: 4,
    name: "Priya Patel",
    location: "Bangalore",
    text: `Great Experience!\n"Very responsive and explained everything clearly. Highly satisfied."`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)'
  },
   {
    id: 5,
    name: "Alice",
    location: "Chennai",
    text: `Simply the best experience I've had.`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)'
  },
   {
    id: 6,
    name: "Bob",
    location: "Kolkata",
    text: `Highly recommend this service!`,
    rating: 5,
    avatarColor: 'linear-gradient(to top right, #c25d45, #e5c9b6)'
  }
]

// Duplicate testimonials multiple times for a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials]; // Increased duplicates

export default function TestimonialCarousel() {
  return (
    <div className="w-full py-12 bg-white overflow-hidden h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-[#17202A] mb-12 text-center">What our client say ?</h2>
      <div className="relative w-full flex flex-col items-center gap-6">
        {/* Marquee Row 1 (Leftward) */}
        <div className="relative w-full flex overflow-hidden ">
          {/* Use two identical divs for true seamless looping */}          
          <div className="flex animate-marquee-left  ">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[320px] md:w-[360px] bg-[#F5F2E9] rounded-2xl shadow-lg p-6 pr-8 mr-6 flex flex-col justify-between pb-14 h-[250px]" /* Consistent height and padding */
              >
                 {/* Stars */}
                <div className="flex mb-4 text-gray-700" style={{ gap: '2px' }}> {/* Adjusted gap */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg key={starIndex} className={`w-5 h-5 fill-current ${starIndex < testimonial.rating ? 'text-[#b88a5a]' : 'text-gray-400'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Testimonial Text */}
                <div className="text-gray-800 text-base leading-relaxed mb-8 italic">
                  "{testimonial.text}" {/* Added quotes and italic */} 
                </div>

                 {/* User Section - positioned absolutely */}
                <div className="absolute left-6 bottom-[-24px] flex items-center"> {/* Adjusted bottom */} 
                   {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full mr-3 flex items-center justify-center overflow-hidden border-[5px] border-[#e5c9b6] shadow-md" /* Adjusted size and border */
                    style={{ background: testimonial.avatarColor }}
                  >
                    {/* Optional: Add an img tag here if you have avatar images */}
                  </div>
                   {/* Name and Location in oval */}
                  <div className="flex flex-col bg-[#17202A] text-white rounded-full px-6 py-2 shadow-lg ml-[-16px] min-w-[140px]"> {/* Adjusted bg, rounded, padding, min-width, ml */} 
                    <span className="font-semibold text-base leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-[#e5c9b6] font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="flex animate-marquee-left ">
            {duplicatedTestimonials.map((testimonial, index) => (
               <div
                key={`left-copy-${index}`}
                className="relative flex-shrink-0 w-[320px] md:w-[360px] bg-[#F5F2E9] rounded-2xl shadow-lg p-6 pr-8 mr-6 flex flex-col justify-between pb-14 h-[250px]" /* Consistent height and padding */
              >
                 {/* Stars */}
                <div className="flex mb-4 text-gray-700" style={{ gap: '2px' }}> {/* Adjusted gap */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg key={starIndex} className={`w-5 h-5 fill-current ${starIndex < testimonial.rating ? 'text-[#b88a5a]' : 'text-gray-400'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Testimonial Text */}
                <div className="text-gray-800 text-base leading-relaxed mb-8 italic">
                  "{testimonial.text}" {/* Added quotes and italic */} 
                </div>

                 {/* User Section - positioned absolutely */}
                <div className="absolute left-6 bottom-[-24px] flex items-center"> {/* Adjusted bottom */} 
                   {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full mr-3 flex items-center justify-center overflow-hidden border-[5px] border-[#e5c9b6] shadow-md" /* Adjusted size and border */
                    style={{ background: testimonial.avatarColor }}
                  >
                    {/* Optional: Add an img tag here if you have avatar images */}
                  </div>
                   {/* Name and Location in oval */}
                  <div className="flex flex-col bg-[#17202A] text-white rounded-full px-6 py-2 shadow-lg ml-[-16px] min-w-[140px]"> {/* Adjusted bg, rounded, padding, min-width, ml */} 
                    <span className="font-semibold text-base leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-[#e5c9b6] font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Rightward) */}
         <div className="relative w-full flex overflow-hidden">
           {/* Use two identical divs for true seamless looping */}  
          <div className="flex animate-marquee-right">
            {duplicatedTestimonials.map((testimonial, index) => (
               <div
                key={`right-copy-${index}`}
                className="relative flex-shrink-0 w-[320px] md:w-[360px] bg-[#F5F2E9] rounded-2xl shadow-lg p-6 pr-8 mr-6 flex flex-col justify-between pb-14 h-[250px]" /* Consistent height and padding */
              >
                 {/* Stars */}
                <div className="flex mb-4 text-gray-700" style={{ gap: '2px' }}> {/* Adjusted gap */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg key={starIndex} className={`w-5 h-5 fill-current ${starIndex < testimonial.rating ? 'text-[#b88a5a]' : 'text-gray-400'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Testimonial Text */}
                <div className="text-gray-800 text-base leading-relaxed mb-8 italic">
                  "{testimonial.text}" {/* Added quotes and italic */} 
                </div>

                 {/* User Section - positioned absolutely */}
                <div className="absolute left-6 bottom-[-24px] flex items-center"> {/* Adjusted bottom */} 
                   {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full mr-3 flex items-center justify-center overflow-hidden border-[5px] border-[#e5c9b6] shadow-md" /* Adjusted size and border */
                    style={{ background: testimonial.avatarColor }}
                  >
                    {/* Optional: Add an img tag here if you have avatar images */}
                  </div>
                   {/* Name and Location in oval */}
                  <div className="flex flex-col bg-[#17202A] text-white rounded-full px-6 py-2 shadow-lg ml-[-16px] min-w-[140px]"> {/* Adjusted bg, rounded, padding, min-width, ml */} 
                    <span className="font-semibold text-base leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-[#e5c9b6] font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
           <div className="flex animate-marquee-right ">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`right-copy2-${index}`}
                className="relative flex-shrink-0 w-[320px] md:w-[360px] bg-[#F5F2E9] rounded-2xl shadow-lg p-6 pr-8 mr-6 flex flex-col justify-between pb-14 h-[250px]" /* Consistent height and padding */
              >
                 {/* Stars */}
                <div className="flex mb-4 text-gray-700" style={{ gap: '2px' }}> {/* Adjusted gap */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg key={starIndex} className={`w-5 h-5 fill-current ${starIndex < testimonial.rating ? 'text-[#b88a5a]' : 'text-gray-400'}`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.55L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Testimonial Text */}
                <div className="text-gray-800 text-base leading-relaxed mb-8 italic">
                  "{testimonial.text}" {/* Added quotes and italic */} 
                </div>

                 {/* User Section - positioned absolutely */}
                <div className="absolute left-6 bottom-[-24px] flex items-center"> {/* Adjusted bottom */} 
                   {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-full mr-3 flex items-center justify-center overflow-hidden border-[5px] border-[#e5c9b6] shadow-md" /* Adjusted size and border */
                    style={{ background: testimonial.avatarColor }}
                  >
                    {/* Optional: Add an img tag here if you have avatar images */}
                  </div>
                   {/* Name and Location in oval */}
                  <div className="flex flex-col bg-[#17202A] text-white rounded-full px-6 py-2 shadow-lg ml-[-16px] min-w-[140px]"> {/* Adjusted bg, rounded, padding, min-width, ml */} 
                    <span className="font-semibold text-base leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-[#e5c9b6] font-medium">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx="">
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-left {
            animation: marquee-left 60s linear infinite; /* Increased duration */
             width: fit-content; /* Ensure the container is wide enough */
          }
           .animate-marquee-right {
            animation: marquee-right 60s linear infinite; /* Match duration */
             width: fit-content; /* Ensure the container is wide enough */
          }
        `}
      </style>
    </div>
  )
} 