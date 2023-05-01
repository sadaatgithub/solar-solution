import React from 'react'
import {TfiHeadphoneAlt,TfiEmail,TfiLocationPin} from "react-icons/tfi"
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"

import logo from "../../public/solar_logo.png"
import Image from 'next/image'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
const Navbar = () => {

  return (
    <div className=' fixed md:top-5 md:left-10 md:right-10 z-20 inset-x-0 flex flex-col md:px-10  px-2 border-b-4 border-orange-500  bg-white shadow-xl rounded-sm  mx-auto'>
        {/* Logo */}


        <div className="grid grid-cols-6 col-span-full border-b py-3">
          <div className="md:col-span-full lg:col-span-2 col-span-full">
            <Logo/>
            {/* <Image src={logo} alt="" width={55}
              height={40}/>
              <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-orange-400 uppercase">Solar Solution</h1>
            <p className="text-sm text-gray-500">By Choudhary Engineering</p>
            </div> */}
            </div>
            <div className="col-span-4 hidden lg:flex  justify-end gap-8 [&>div]:items-center [&>div]:justify-center">
              <div className="flex gap-2">
                <TfiHeadphoneAlt size={35} color={"orange"}/>
                <div className="flex flex-col">
                  <p className="text-gray-300">Call Us</p>
                  <p>9898653298</p>
                </div>

              </div>
              <div className="flex gap-2">
                <TfiEmail size={35} color={"orange"}/>
                <div className="flex flex-col">
                  <p className="text-gray-300">Email Us</p>
                  <p>solarsolution@email.com</p>
                </div>

              </div>
              <div className="flex gap-2">
                <TfiLocationPin size={35} color={"orange"}/>
                <div className="flex flex-col">
                  <p className="text-gray-300">Address</p>
                  <p>abc,nagpur,440022</p>
                </div>

              </div>

            </div>
        </div>


        {/* Navlink */}
        <div className="flex justify-between items-center">
        <ul className='md:flex gap-6 font-semibold uppercase hidden [&>li]:cursor-pointer [&>li]:py-1 text-sky-900 [&>li:hover]:text-orange-500'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Gallery</li>
            <li>Contact Us</li>
            <li>FAQ</li>
        </ul>
        {/* <div className="flex gap-6 [&>svg]:bg-orange-400 [&>svg]:p-1 [&>svg]:rounded-sm [&>svg]:cursor-pointer ">
            <FaInstagram  className="text-2xl text-white"/>
            <FaFacebookF className="text-2xl text-white"/>
            <FaTwitter className="text-2xl text-white"/>

        </div> */}
        <SocialIcons/>
        </div>
    </div>
  )
}

export default Navbar