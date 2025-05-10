import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGavel, FaBalanceScale, FaHandshake, FaFileContract, FaLandmark, FaShieldAlt } from 'react-icons/fa';

const ServicesSection = () => {
  // State for interactive elements
  const [activeCard, setActiveCard] = useState(null);
  
  // Create refs
  const hammerRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef(null);
  
  // Run animation once on mount
  useEffect(() => {
    const hammer = hammerRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;
    const particles = particlesRef.current;
    
    if (!hammer || !section || !container || !particles) return;
    
    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'justice-particle';
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = '#E6AFA4';
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random floating animation
      gsap.to(particle, {
        y: `${Math.random() * 100 - 50}px`,
        x: `${Math.random() * 100 - 50}px`,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      particles.appendChild(particle);
    }
    
    // Position hammer at top-right with proper z-index
    hammer.style.opacity = '1';
    hammer.style.top = '20px';
    hammer.style.right = '40px'; 
    hammer.style.left = 'auto';
    hammer.style.zIndex = '5';
    
    // Add glow effect to hammer
    gsap.to(hammer, {
      filter: 'drop-shadow(0 0 10px rgba(79, 70, 229, 0.7))',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Create responsive animation
    const setupAnimation = () => {
      // Clear any existing animations
      gsap.killTweensOf(hammer);
      
      // Create timeline
      const tl = gsap.timeline();
      
      // Initial reveal of legal scales
      tl.to('.scale-left, .scale-right', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      });
      
      // Animate title with letter reveal
      tl.to('.services-title-letter', {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: 'back.out(1.2)'
      }, '-=0.5');
      
      // Animate description with gradient reveal
      tl.to('.services-desc', {
        opacity: 1,
        backgroundSize: '100% 100%',
        duration: 1.2,
        ease: 'power2.out'
      }, '-=0.3');
      
      // Animate service cards with 3D effect
      tl.to('.service-card', {
        opacity: 1,
        y: 0,
        rotationY: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.4)'
      }, '-=0.8');
      
      // Wait a bit
      tl.to({}, {duration: 0.2});
      
      // Calculate bottom position based on container height
      const sectionHeight = section.offsetHeight;
      
      // Move hammer down with trail effect
      tl.to(hammer, {
        top: `${sectionHeight - 80}px`,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: function() {
          if (this.progress() > 0.1 && this.progress() < 0.9) {
            createHammerTrail();
          }
        }
      });
      
      // Move hammer left with trail effect
      tl.to(hammer, {
        left: '40px',
        right: 'auto',
        duration: 1.5,
        ease: 'power3.inOut',
        onUpdate: function() {
          if (this.progress() > 0.1 && this.progress() < 0.9) {
            createHammerTrail();
          }
        },
        onComplete: () => {
          // Hammer impact effect
          gsap.to(hammer, {
            scale: 1.3,
            rotation: -20,
            duration: 0.2,
            onComplete: () => {
              // Create impact particles
              createImpactEffect();
              
              // Return to normal
              gsap.to(hammer, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                delay: 0.2,
                onComplete: () => {
                  // Scroll to next section with reduced distance
                  setTimeout(() => {
                    const next = section.nextElementSibling;
                    if (next) {
                      window.scrollBy({
                        top: 680, // Reduced scroll distance
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }
              });
            }
          });
        }
      });
    };
    
    // Create hammer trail effect
    const createHammerTrail = () => {
      const trail = document.createElement('div');
      trail.style.position = 'absolute';
      trail.style.width = '15px';
      trail.style.height = '15px';
      trail.style.borderRadius = '50%';
      trail.style.backgroundColor = '#E6AFA4';
      trail.style.zIndex = '4';
      trail.style.left = `${hammer.offsetLeft + hammer.offsetWidth/2}px`;
      trail.style.top = `${hammer.offsetTop + hammer.offsetHeight/2}px`;
      
      section.appendChild(trail);
      
      gsap.to(trail, {
        width: '5px',
        height: '5px',
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          section.removeChild(trail);
        }
      });
    };
    
    // Create impact effect
    const createImpactEffect = () => {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 8 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = '#E6AFA4';
        particle.style.borderRadius = '50%';
        particle.style.left = `${hammer.offsetLeft + hammer.offsetWidth/2}px`;
        particle.style.top = `${hammer.offsetTop + hammer.offsetHeight/2}px`;
        particle.style.zIndex = '4';
        
        section.appendChild(particle);
        
        gsap.to(particle, {
          x: `${(Math.random() - 0.5) * 100}px`,
          y: `${(Math.random() - 0.5) * 100}px`,
          opacity: 0,
          duration: Math.random() * 1 + 0.5,
          onComplete: () => {
            section.removeChild(particle);
          }
        });
      }
      
      // Add impact ripple
      const ripple = document.createElement('div');
      ripple.style.position = 'absolute';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.border = '2px solid #E6AFA4';
      ripple.style.borderRadius = '50%';
      ripple.style.left = `${hammer.offsetLeft + hammer.offsetWidth/2 - 10}px`;
      ripple.style.top = `${hammer.offsetTop + hammer.offsetHeight/2 - 10}px`;
      ripple.style.zIndex = '4';
      
      section.appendChild(ripple);
      
      gsap.to(ripple, {
        width: '100px',
        height: '100px',
        left: `${hammer.offsetLeft + hammer.offsetWidth/2 - 50}px`,
        top: `${hammer.offsetTop + hammer.offsetHeight/2 - 50}px`,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          section.removeChild(ripple);
        }
      });
    };
    
    // Run animation
    setupAnimation();
    
    // Make animation responsive
    const handleResize = () => {
      // Reset hammer position
      hammer.style.top = '20px';
      hammer.style.right = '40px';
      hammer.style.left = 'auto';
      
      // Re-run animation
      setupAnimation();
    };
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Add scroll handler
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.getBoundingClientRect().top + scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollY > sectionTop && scrollY < sectionBottom) {
        if (scrollY - sectionTop < 90) {
          hammer.style.opacity = '0';
        } else {
          hammer.style.opacity = '1';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if device is mobile
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  
  // Service card hover handler
  const handleCardHover = (index) => {
    setActiveCard(index);
  };
  
  // Service card leave handler
  const handleCardLeave = () => {
    setActiveCard(null);
  };
  
  return (
    <div 
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '500px',
        background: 'white',
        padding: '60px 24px 80px',
        overflow: 'hidden',
        borderTop: '1px solid #ECE9D7',
        borderBottom: '1px solid #ECE9D7'
      }}
      id="services-section"
    >
      {/* Floating particles container */}
      <div 
        ref={particlesRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      ></div>
      
      {/* Decorative scales of justice */}
      <div className="scale-left" style={{
        position: 'absolute',
        top: '50px',
        left: '5%',
        fontSize: '32px',
        color: '#E6AFA4',
        transform: 'translateY(20px)',
        opacity: 50,
        zIndex: 2
      }}>
        <FaLandmark />
      </div>
      
      <div className="scale-right" style={{
        position: 'absolute',
        top: '50px',
        right: '5%',
        fontSize: '32px',
        color: '#E6AFA4',
        transform: 'translateY(20px)',
        opacity: 0,
        zIndex: 2
      }}>
        <FaShieldAlt />
      </div>
      
      <div 
        ref={containerRef}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3
        }}
      >
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <h2 className="services-title" style={{marginBottom: '20px', position: 'relative'}}>
            {/* Split "Our Services" into individual letters for animation */}
            {"Our Services".split('').map((letter, index) => (
              <span 
                key={index}
                className="services-title-letter"
                style={{
                  display: 'inline-block',
                  fontSize: '46px',
                  fontWeight: 'bold',
                  color: '#BC5B44',
                  margin: letter === ' ' ? '0 10px' : '0 2px',
                  opacity: 0,
                  transform: 'translateY(-25px)'
                }}
              >
                {letter}
              </span>
            ))}
            
            {/* Underline with gradient */}
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, #BC5B43, #F3D59B)',
              borderRadius: '2px'
            }}></span>
          </h2>
          
          <p
  className="services-desc"
  style={{
    fontSize: '18px',
    color:'black',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.8',
    opacity: 0, // If you're using animations, this is fine
    padding: '0 10px',
  }}
>
  We offer comprehensive legal solutions tailored to your specific needs. 
  Our experienced attorneys provide expert counsel in various practice areas 
  with a commitment to excellence and client satisfaction.
</p>

        </div>
        
        {/* Enhanced service cards with 3D hover effect */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '40px',
          paddingLeft: isMobile() ? '20px' : '40px',
          paddingRight: isMobile() ? '20px' : '40px',
          perspective: '1000px'
        }}>
          {[
            { icon: <FaBalanceScale />, title: "Legal Consultation", desc: "Expert advice on legal matters tailored to your situation." },
            { icon: <FaFileContract />, title: "Document Preparation", desc: "Professional preparation of all legal documents." },
            { icon: <FaHandshake />, title: "Case Representation", desc: "Dedicated representation for all your court proceedings." }
          ].map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                padding: '35px 30px',
                backgroundColor: '#EDEAD9',
                borderRadius: '12px',
                boxShadow: activeCard === index 
                  ? '0 20px 25px -5px rgba(11, 24, 34, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.10), 0 0 15px rgba(188, 91, 67, 0.18)' 
                  : '0 4px 6px -1px rgba(11, 24, 34, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                opacity: 0,
                transform: 'translateY(20px) rotateY(10deg)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              {/* Background gradient that appears on hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#EDEAD9',
                opacity: activeCard === index ? 1 : 0,
                transition: 'opacity 0.4s ease',
                zIndex: 0
              }}></div>
              
              {/* Icon with glow effect */}
              <div style={{
                fontSize: '42px', 
                color: '#BC5B43',
                marginBottom: '20px',
                display: 'inline-block',
                position: 'relative',
                zIndex: 1,
                transform: activeCard === index ? 'translateY(-5px)' : 'none',
                transition: 'transform 0.4s ease'
              }}>
                {/* Icon glow */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(243, 213, 155, 0.18) 0%, rgba(188, 91, 67, 0) 70%)',
                  opacity: activeCard === index ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: -1
                }}></div>
                {service.icon}
              </div>
              
              {/* Title with gradient on hover */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: activeCard === index ? '#BC5B43' : '#0B1822',
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.4s ease'
              }}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: '16px',
                color: '#0B1822',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1
              }}>
                {service.desc}
              </p>
              
              
            </div>
          ))}
        </div>
      </div>
      
      {/* Hammer with enhanced effects */}
      <div
        ref={hammerRef}
        style={{
          position: 'absolute',
          fontSize: isMobile() ? '56px' : '56px',
          color: '#BC5B44',
          zIndex: 5,
          opacity: 0,
          filter: 'drop-shadow(0 4px 6px rgba(243, 213, 155, 0.2))',
          transition: 'transform 0.2s ease, opacity 0.3s ease',
          pointerEvents: 'none'
        }}
      >
        <FaGavel />
      </div>
    </div>
  );
};

export default ServicesSection;
