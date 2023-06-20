import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import AboutUs from '@/components/AboutUs'
import Testimonial from '@/components/Testimonial'
import Quote from '@/components/Quote'
import WhyGoForSolar from '@/components/WhyGoForSolar'
import Head from 'next/head'
import RecentProjects from '@/components/projects/RecentProjects'


export default function Home() {
  return (
    <>
    <Head>
        <title>Solar Solutions-by Choudhary Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/solar_logo.png" />
      </Head>
    <main className=' font-source_sans_pro relative overflow-hidden'>
    <HeroSection/>
    <WhyGoForSolar/>
    <AboutUs/>
    <OurServices/>
    <RecentProjects/>
    <Testimonial/>
    <Quote/>
    
    </main>
    </>

  )
}
