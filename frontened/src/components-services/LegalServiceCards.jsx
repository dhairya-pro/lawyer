import { Link } from "react-router-dom"
import Card08 from "./Card08"
import { motion } from "framer-motion"
import { useRef } from "react"
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

// Legal services data with icons and service types
const legalServices = [
  { 
    id: 1,
    title: "Criminal Defense", 
    path: "/criminal-defense",
    description: "Expert defense representation for criminal cases",
    icon: Gavel,
    serviceType: "criminal",
    image: "https://galelawgroup.com/wp-content/uploads/2023/08/defenseattorneyduties.jpg"
  },
  { 
    id: 2,
    title: "Corporate & Business Law", 
    path: "/corporate-business-law",
    description: "Comprehensive business legal solutions",
    icon: Building2,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 3,
    title: "Cheque Bounce Cases", 
    path: "/cheque-bounce",
    description: "Specialized handling of cheque bounce matters",
    icon: FileCheck,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 4,
    title: "High Court Representation", 
    path: "/high-court-representation",
    description: "Expert representation in High Court matters",
    icon: Scale,
    serviceType: "default",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 5,
    title: "Family Law", 
    path: "/family-law",
    description: "Compassionate family legal services",
    icon: Users,
    serviceType: "family",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 6,
    title: "Divorce & Separation", 
    path: "/divorce-separation",
    description: "Sensitive handling of divorce proceedings",
    icon: HeartCrack,
    serviceType: "family",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 7,
    title: "Bail & Anticipatory Bail", 
    path: "/bail",
    description: "Expert bail application services",
    icon: ShieldCheck,
    serviceType: "criminal",
    image: "	https://blog.bakshiandassociates.com/wp-content/uploads/2024/05/Obtain-Anticipatory-Bail.jpeg"
  },
  { 
    id: 8,
    title: "Court Marriage & Registration", 
    path: "/court-marriage",
    description: "Complete court marriage assistance",
    icon: Scroll,
    serviceType: "family",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 9,
    title: "Employment & Labour Law", 
    path: "/employment-law",
    description: "Comprehensive employment legal services",
    icon: Briefcase,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 10,
    title: "Debt Recovery", 
    path: "/debt-recovery",
    description: "Effective debt recovery solutions",
    icon: Coins,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 11,
    title: "Intellectual Property Rights", 
    path: "/ip-rights",
    description: "Protection of intellectual property",
    icon: Brain,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 12,
    title: "Property & Land Disputes", 
    path: "/property-disputes",
    description: "Resolution of property disputes",
    icon: Home,
    serviceType: "property",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 13,
    title: "Civil Litigation", 
    path: "/civil-litigation",
    description: "Expert civil litigation services",
    icon: Landmark,
    serviceType: "default",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  { 
    id: 14,
    title: "Company Law & NCLT Cases", 
    path: "/company-law-nclt",
    description: "Specialized company law services",
    icon: Building,
    serviceType: "corporate",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 15,
    title: "Cyber Law", 
    path: "/cyber-law",
    description: "Modern cyber law solutions",
    icon: Globe,
    serviceType: "cyber",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1500&q=80"
  },
  { 
    id: 16,
    title: "Legal Advisory", 
    path: "/legal-advisory",
    description: "Professional legal consultation",
    icon: FileText,
    serviceType: "default",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  }
]

export default function LegalServiceCards() {
  const containerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  }

  return (
    <div ref={containerRef} className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1926] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Legal Services
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive legal solutions tailored to your needs. Our expert team provides professional guidance across various legal domains.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {legalServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center"
            >
              <Card08
                title={service.title}
                subtitle={service.description}
                href={service.path}
                serviceType={service.serviceType}
                badge={{ icon: service.icon }}
                image={service.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 