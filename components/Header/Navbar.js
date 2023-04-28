import React from 'react'
import {TfiHeadphoneAlt,TfiEmail,TfiLocationPin} from "react-icons/tfi"
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"

import logo from "../../public/solar_logo.png"
import Image from 'next/image'
const Navbar = () => {

  return (
    <div className=' fixed top-5 left-10 right-10 z-20 flex flex-col md:px-10  px-8 border-b-4 border-orange-500  bg-white shadow-xl rounded-sm  mx-auto'>
        {/* Logo */}


        <div className="grid grid-cols-6 col-span-full border-b py-3">
          <div className="flex md:col-span-2 col-span-full gap-2">
            <Image src={logo} alt="" width={55}
              height={40}/>
              <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-orange-400 uppercase">Solar Solution</h1>
            <p className="text-sm text-gray-500">By Choudhary Engineering</p>
            </div>
            </div>
            <div className="col-span-4 hidden md:flex  justify-end gap-8 [&>div]:items-center [&>div]:justify-center">
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
        <div className="flex justify-between items-center py-2">
        <ul className='md:flex gap-6 font-semibold uppercase hidden'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Gallery</li>
            <li>Contact Us</li>
            <li>FAQ</li>
        </ul>
        <div className="flex gap-6 [&>svg]:bg-orange-400 [&>svg]:p-1 [&>svg]:rounded-sm ">
            <FaInstagram  className="text-2xl text-white"/>
            <FaFacebookF className="text-2xl text-white"/>
            <FaTwitter className="text-2xl text-white"/>

        </div>
        </div>
    </div>
  )
}

export default Navbar