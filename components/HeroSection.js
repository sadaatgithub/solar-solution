import React from 'react'
import Container from './Container'

const HeroSection = () => {
  return (
    <Container className="bg-green-200 min-h-screen bg-[url('../public/solar-hero.jpg')] bg-cover bg-no-repeat 
    flex flex-col justify-center items-center text-white  relative after:content-[''] after:absolute after:bg-black/50  after:inset-0">
        <div className="w-[70%] text-center flex flex-col gap-6 z-10">
        <h1 className='text-6xl font-bold'>Power your home with clean, affordable solar energy</h1>
        <p className='text-lg text-gray-200'>Experience the power of the sun and reduce your energy costs with our expert solar solutions. Join the clean energy revolution today</p>
        <div className="text-center flex gap-4 justify-center pt-4">
            <button className='border border-orange-500 px-6 py-3 bg-orange-500 rounded-sm'>Get Free Quote</button>
            <button className='border px-6 py-3 rounded-sm'>Know More</button>
        </div>
        </div>
        
    </Container>
  )
}

export default HeroSection