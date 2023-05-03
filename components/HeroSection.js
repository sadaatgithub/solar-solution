import React from 'react'
import Container from './Container'
import config from "../pages/index.json"

const HeroSection = () => {
const hero = config.hero
  return (
    <Container className="bg-green-200 min-h-screen bg-[url('../public/solarimg.jpg')] bg-cover bg-no-repeat 
    flex flex-col justify-center items-center text-white  relative after:content-[''] after:absolute after:bg-black/70  after:inset-0">
        <div className="md:w-[70%] text-center flex flex-col gap-6 z-10 ">
        <h1 className='text-4xl md:text-6xl font-bold uppercase  '>{hero.title}</h1>
        <p className='text-lg text-gray-200'>{hero.subtitle}</p>
        <div className="text-center flex gap-4 justify-center pt-4 flex-col md:flex-row [&>button:hover]:-translate-y-2 ">
            <button className='border border-orange-500 px-6 py-3 bg-orange-500 rounded-sm transition-all duration-200'>{hero.cta[0].title}</button>
            <button className='border px-6 py-3 rounded-sm transition-all duration-200'>{hero.cta[1].title}</button>
        </div>
        </div>
        
    </Container>
  )
}

export default HeroSection