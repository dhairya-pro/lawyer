import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Gavel, 
  Building2, 
  FileCheck, 
  Scale, 
  Users, 
  HeartCrack, 
  ShieldCheck, 
  Scroll, 
  Briefcase, 
  Coins, 
  Brain, 
  Home, 
  Landmark, 
  Building, 
  Globe, 
  FileText
} from "lucide-react"

// Legal services data with icons
const contentItems = [
  { 
    id: 1,
    title: "Criminal Defense", 
    path: "/criminal-defense",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Gavel
  },
  { 
    id: 2,
    title: "Corporate & Business Law", 
    path: "/corporate-business-law",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Building2
  },
  { 
    id: 3,
    title: "Cheque Bounce Cases", 
    path: "/cheque-bounce",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: FileCheck
  },
  { 
    id: 4,
    title: "High Court Representation", 
    path: "/high-court-representation",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Scale
  },
  { 
    id: 5,
    title: "Family Law", 
    path: "/family-law",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Users
  },
  { 
    id: 6,
    title: "Divorce & Separation", 
    path: "/divorce-separation",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: HeartCrack
  },
  { 
    id: 7,
    title: "Bail & Anticipatory Bail", 
    path: "/bail",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: ShieldCheck
  },
  { 
    id: 8,
    title: "Court Marriage & Registration", 
    path: "/court-marriage",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Scroll
  },
  { 
    id: 9,
    title: "Employment & Labour Law", 
    path: "/employment-law",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Briefcase
  },
  { 
    id: 10,
    title: "Debt Recovery", 
    path: "/debt-recovery",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Coins
  },
  { 
    id: 11,
    title: "Intellectual Property Rights", 
    path: "/ip-rights",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Brain
  },
  { 
    id: 12,
    title: "Property & Land Disputes", 
    path: "/property-disputes",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Home
  },
  { 
    id: 13,
    title: "Civil Litigation", 
    path: "/civil-litigation",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Landmark
  },
  { 
    id: 14,
    title: "Company Law & NCLT Cases", 
    path: "/company-law-nclt",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Building
  },
  { 
    id: 15,
    title: "Cyber Law", 
    path: "/cyber-law",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: Globe
  },
  { 
    id: 16,
    title: "Legal Advisory", 
    path: "/legal-advisory",
    image: "/placeholder.svg?height=400&width=250",
    category: "Legal Service",
    icon: FileText
  }
]

export default function ContentSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef(null)
  const containerRef = useRef(null)

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate the slider with faster speed on hover (only for desktop)
  useEffect(() => {
    if (isMobile) return

    const interval = isHovered ? 5000 : 5000
    
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentItems.length)
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, isMobile])

  // Calculate positions for each card in a visible 5-card arc
  const getCardStyle = (index) => {
    const totalItems = contentItems.length
    let diff = (index - activeIndex + totalItems) % totalItems
    if (diff > totalItems / 2) {
      diff = diff - totalItems
    }
    
    // Show only 5 cards: active + 2 on each side
    const isVisible = Math.abs(diff) <= 2
    
    // Base spacing between cards
    const baseSpacing = 280
    
    // Calculate position based on difference from active index
    const x = diff * baseSpacing
    
    // Add vertical offset for hierarchical effect
    const y = Math.abs(diff) * 40 // Vertical offset increases with distance from center
    
    // Calculate scale based on position - cards further away are smaller
    const scale = isVisible ? (diff === 0 ? 1 : 0.85 - Math.abs(diff) * 0.1) : 0.6
    
    // Calculate z-index - active card has highest z-index
    const zIndex = isVisible ? (100 - Math.abs(diff) * 20) : 0
    
    // Calculate opacity - active card is fully opaque
    const opacity = isVisible ? (diff === 0 ? 1 : 0.7 - Math.abs(diff) * 0.1) : 0
    
    // Add slight rotation for depth effect
    const rotateY = diff * 5 // Subtle rotation based on position
    
    return {
      x,
      y,
      scale,
      zIndex,
      opacity: isVisible ? opacity : 0,
      rotateY,
      display: isVisible ? "block" : "none",
    }
  }

  // Mobile grid layout component
  const MobileGrid = () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      {contentItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.id}
            to={item.path}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-[#BC5B44] text-white mb-3">
                <Icon size={24} />
              </div>
              <h3 className="text-sm font-semibold text-[#0B1926]">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.category}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative z-0">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B1926] mb-4">
          Our Legal Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive legal solutions tailored to your needs. Our expert team provides professional guidance across various legal domains.
        </p>
      </div>

      {isMobile ? (
        <MobileGrid />
      ) : (
        <div
          ref={containerRef}
          className="relative h-[470px] w-full max-w-7xl mx-auto overflow-hidden bg-white rounded-2xl shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute w-full h-full flex items-center justify-center top-8">
            <AnimatePresence mode="wait">
              {contentItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-[220px] h-[280px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
                    initial={getCardStyle(index)}
                    animate={getCardStyle(index)}
                    exit={getCardStyle(index)}
                    transition={{
                      type: "tween",
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginLeft: "-110px",
                      marginTop: "-140px",
                      boxShadow: index === activeIndex 
                        ? "0 20px 40px rgba(188, 91, 68, 0.2)" 
                        : "0 10px 20px rgba(0,0,0,0.1)",
                      zIndex: index === activeIndex ? 10 : 5
                    }}
                  >
                    <div className="relative w-full h-full bg-white">
                      <div className="w-full h-1/2 flex flex-col items-center justify-center bg-gray-50">
                        <div className={`p-4 rounded-full ${index === activeIndex ? "bg-[#BC5B44] text-white" : "bg-white text-[#0B1926]"} transition-colors duration-300 shadow-md`}>
                          <Icon size={36} />
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 w-full p-4 ${index === activeIndex ? "bg-[#BC5B44] text-white" : "bg-white text-gray-800"} transition-colors duration-300`}>
                        <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                        <p className={`text-sm ${index === activeIndex ? "text-purple-100" : "text-gray-500"}`}>{item.category}</p>
                        {index === activeIndex && (
                          <Link
                            to={item.path}
                            className="inline-block mt-2 px-4 py-2 bg-white text-[#0B1926] text-sm font-medium rounded-full hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow transform hover:scale-105 active:scale-95"
                          >
                            Learn More
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <div className="flex space-x-4">
              <button 
                className="p-2 rounded-full bg-white shadow-md hover:bg-[#BC5B44] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
                onClick={() => setActiveIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="p-2 rounded-full bg-white shadow-md hover:bg-[#BC5B44] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
                onClick={() => setActiveIndex((prev) => (prev + 1) % contentItems.length)}
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Current service title */}
          <div className="absolute top-6 left-0 w-full text-center z-10">
            <h2 className="text-3xl font-bold text-[#0B1926]">{contentItems[activeIndex].title}</h2>
          </div>
        </div>
      )}
    </div>
  )
}