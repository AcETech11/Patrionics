import React from 'react'

import Hero from '../../Components/Hero'
import Features from '../../Components/Features'
import Services from '../../Components/Services'
import Projects from '../../Components/Projects'
import Testmonials from '../../Components/Testmonials'
import WhyUs from '../../Components/WhyUs'
import CTA from '../../Components/CTA'

const page = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Services/>
      <Projects/>
      <Testmonials/>
      <WhyUs/>
      <CTA/>
    </div>
  )
}

export default page