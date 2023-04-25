import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Benefits from '@/components/Benefits'
import OurServices from '@/components/OurServices'
import AboutUs from '@/components/AboutUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-[1440px] mx-auto'>
    <HeroSection/>
    <Benefits/>
    <AboutUs/>
    <OurServices/>
    </main>
  )
}
