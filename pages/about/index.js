import AboutUs from '@/components/AboutUs'
import Testimonial from '@/components/Testimonial'
import AboutStat from '@/components/aboutus/AboutStat'
import PagePathBanner from '@/components/common/PagePathBanner'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
    <Head>
        <title>About-Solar Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/solar_logo.png" />
      </Head>
    <PagePathBanner/>
    <AboutUs/>
    <AboutStat/>
    <Testimonial/>
    </>
  )
}

export default About