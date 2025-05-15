import React from 'react'
import LegalAdvisorCard from './LegalAdvisorCard'
import TestimonialCarousel from './TestimonialCarousel'
// import HeroSection from '../components-home/HeroSection'
import ContentSlider from '../components-services/AnimationDiagram'
const About = () => {
  return (
    <div>
        <div className="relative w-full bg-white overflow-hidden py-10 sm:py-8 md:py-12 px-4 md:px-8"></div> 
        <LegalAdvisorCard/>
        <TestimonialCarousel/>
        <ContentSlider/>
        {/* <HeroSection/> */}
    </div>
  )
}

export default About