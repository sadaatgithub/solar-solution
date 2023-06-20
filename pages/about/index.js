import AboutUs from '@/components/AboutUs'
import Testimonial from '@/components/Testimonial'
import AboutStat from '@/components/aboutus/AboutStat'
import PagePathBanner from '@/components/common/PagePathBanner'
import React from 'react'

const About = () => {
  return (
    <>
    <PagePathBanner/>
    <AboutUs/>
    <AboutStat/>
    <Testimonial/>
    </>
  )
}

export default About