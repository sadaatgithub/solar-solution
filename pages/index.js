import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Benefits from '@/components/Benefits'
import OurServices from '@/components/OurServices'
import AboutUs from '@/components/AboutUs'
import Testimonial from '@/components/Testimonial'
import Quote from '@/components/Quote'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto font-source_sans_pro'>
    <HeroSection/>
    <Benefits/>
    <AboutUs/>
    <OurServices/>
    <Testimonial/>
    <Quote/>
    <Footer/>
    </main>
  )
}