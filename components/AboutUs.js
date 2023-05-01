import React from 'react'
import Container from './Container'
import Image from 'next/image'
import aboutImage from "../public/solar-hero.jpg"
import {FaChevronCircleRight} from "react-icons/fa"
const AboutUs = () => {
  return (
   <Container className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full  min-h-screen">
    <div className="flex flex-col gap-6 md:w-1/2 z-10">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <p className="text-orange-500">About</p>
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold text-sky-700">We're passionate about bringing clean, affordable solar energy to our community</h2>
                    <p className="text-lg text-gray-500">Our mission is to make solar energy accessible to everyone. We believe that solar is not only good for the environment, but also for our customers' wallets. By helping homeowners and businesses switch to solar, we're making a positive impact on both the planet and their bottom line.</p>
                </div>
                

            </div>
            <div className="">
                    <ul className="flex flex-col gap-4 text-gray-500 [&>li]:flex [&>li]:gap-2 [&>li]:items-center ">
                        <li><FaChevronCircleRight className="text-orange-400"/>Lorem ipsum dolor sit amet.</li>
                        <li><FaChevronCircleRight className="text-orange-400"/>Lorem ipsum dolor sit amet.</li>
                        <li><FaChevronCircleRight className="text-orange-400"/>Lorem ipsum dolor sit amet.</li>
                    </ul>
           </div>
        </div>
        <div className="pt-4">
<button className="border border-orange-500 w-auto self-start px-6 py-3 bg-orange-500 text-white rounded-sm">Know More</button>
</div>
    </div>
    <div className="md:w-1/2  z-10 flex relative after:absolute after:content-[''] after:inset-y-0 md:after:-right-10 after:left-1/2 after:-z-10 after:bg-orange-400">
        <Image
         src={aboutImage}
         width={640}
         height={640}
         alt="our team"
         className="w-full  h-[90%] self-center object-cover object-left shadow-2xl"/>
    </div>

   </Container>
  )
}

export default AboutUs