/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Joe barn",
    location: "Ahemedabad",
    text: `Exceptional Legal Support!\n"I couldn't have asked for a better lawyer. [Lawyer's Name] guided me through a complex case with professionalism and care. Highly recommend!"`,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    location: "Mumbai",
    text: `Outstanding Service!\n"Very knowledgeable and supportive throughout my case. Would definitely recommend to others."`,
    rating: 5,
  },
  {
    id: 3,
    name: "Sam Smith",
    location: "Delhi",
    text: `Professional and Reliable!\n"Helped me resolve my legal issues quickly and efficiently. Thank you!"`,
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Patel",
    location: "Bangalore",
    text: `Great Experience!\n"Very responsive and explained everything clearly. Highly satisfied."`,
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Patel",
    location: "Bangalore",
    text: `Great Experience!\n"Very responsive and explained everything clearly. Highly satisfied."`,
    rating: 5,
  },
  {
    id: 6,
    name: "Priya Patel",
    location: "Bangalore",
    text: `Great Experience!\n"Very responsive and explained everything clearly. Highly satisfied."`,
    rating: 5,
  },
  {
    id: 7,
    name: "Priya Patel",
    location: "Bangalore",
    text: `Great Experience!\n"Very responsive and explained everything clearly. Highly satisfied."`,
    rating: 5,
  },
]

const CARD_WIDTH = 400
const GAP = 32

function getVisibleCards(arr, active) {
  const len = arr.length
  const prev = (active - 1 + len) % len
  const next = (active + 1) % len
  return [arr[prev], arr[active], arr[next]]
}

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const autoSlideRef = useRef()

  // Automatic sliding
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(autoSlideRef.current)
  }, [active])

  // Reset auto slide on manual interaction
  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current)
    autoSlideRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  // Handle drag/swipe
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -80) {
      setActive((prev) => (prev + 1) % testimonials.length)
      resetAutoSlide()
    } else if (info.offset.x > 80) {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      resetAutoSlide()
    }
  }

  // Animate the group: always center the middle card
  return (
    <div className="w-full flex flex-col items-center py-12 bg-white select-none">
      <h2 className="text-3xl md:text-4xl font-bold text-[#17202A] mb-12 text-center">What our client say ?</h2>
      <div
        className="relative flex items-center justify-center w-full max-w-6xl overflow-hidden px-2 md:px-0"
        style={{ height: 250 }}
      >
        <motion.div
          className="flex gap-8"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={handleDragEnd}
          initial={false}
          animate={{
            x: 0,
            transition: { type: "tween", duration: 0.6, ease: "easeInOut" }
          }}
          style={{ width: 3 * (CARD_WIDTH + GAP) }}
        >
          {getVisibleCards(testimonials, active).map((testimonial, i) => (
            <div
              key={testimonial.id + '-' + i}
              className={`flex flex-col justify-between bg-[#F5F2E9] rounded-2xl shadow-md px-8 pt-6 pb-4 mx-auto transition-all duration-300
                ${i === 1 ? "scale-100 z-10" : "scale-95 z-0 opacity-80"}
                min-w-[400px] max-w-[400px] h-[180px]`}
              style={{ flex: "0 0 400px" }}
            >
              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, idx2) => (
                  <svg key={idx2} width="20" height="20" fill="none" stroke="#17202A" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 9,8.5" fill="none" />
                  </svg>
                ))}
              </div>
              {/* Testimonial Text */}
              <div className="text-[#17202A] text-[15px] leading-snug mb-8 whitespace-pre-line">
                {testimonial.text}
              </div>
              {/* User Section */}
              <div className="absolute left-6 bottom-[-32px] flex items-center">
                <div className="w-14 h-14 rounded-full bg-[#F5F2E9] flex items-center justify-center relative z-10">
                  <div className="w-12 h-12 rounded-full border-4 border-[#C97B5A] flex items-center justify-center bg-[#F5F2E9]">
                    <div className="w-8 h-8 rounded-full bg-[#C97B5A]" />
                  </div>
                </div>
                <div className="ml-[-18px] pl-6 pr-6 py-2 rounded-full bg-[#17202A] text-white flex flex-col justify-center min-w-[120px] shadow-lg">
                  <span className="font-semibold text-base leading-tight">{testimonial.name}</span>
                  <span className="text-xs text-[#E5C9B6]">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 