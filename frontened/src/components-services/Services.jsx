import React from 'react'
import ServicesSection from './ServicesSection';

import LegalServiceCards from './LegalServiceCards';
import ContentSlider from './AnimationDiagram';
const Services = () => {
  return (
    <div>
          <div className='mt-24'></div>
          <LegalServiceCards/>
          {/* <ContentSlider/> */}
          <ServicesSection/>

    </div>
  )
}

export default Services;