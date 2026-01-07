import React from 'react'
import HeroSection from './HeroSection'
import ClientsBenefits from './ClientsBenefits'
import Ourservices from './Ourservices'
import WhyChooseFAQ from './WhyChooseFAQ'
import LegalAdvisorHero from '../components-about/LegalAdvisorCard'
const Homepage = () => {
  return (
    <div className='mt-20'>
         {/* <HeroSection/>  */}
        <LegalAdvisorHero/>
        <Ourservices/>
        <WhyChooseFAQ/>     
    </div>
  )
}

export default Homepage
