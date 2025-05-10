import React from 'react'
import HeroSection from './HeroSection'
import ClientsBenefits from './ClientsBenefits'
import Ourservices from './Ourservices'
import WhyChooseUs from './WhyChooseUs'
import ContactForm from '../components/ContactForm'
import LegalServicesJourney from './LegalServicesJourney'
import About from '../components-about/About'
import LegalAdvisorHero from '../components-about/LegalAdvisorCard'
const Homepage = () => {
  return (
    <div className='mt-20'>
         <HeroSection/> 
       {/* <LegalAdvisorHero/> */}
        <ClientsBenefits/> 
        <Ourservices/>
        {/* <LegalServicesJourney/> */}
        <WhyChooseUs/>
    </div>
  )
}

export default Homepage