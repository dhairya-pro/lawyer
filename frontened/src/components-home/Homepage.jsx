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
        <WhyChooseFAQ/>
        <ClientsBenefits/> 
        <Ourservices/>
        {/* <LegalServicesJourney/> */}
       
    </div>
  )
}

export default Homepage
