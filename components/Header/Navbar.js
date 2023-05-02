import React,{useState} from 'react'
import {TfiHeadphoneAlt,TfiEmail,TfiLocationPin} from "react-icons/tfi"
import { FaBars,FaTimes} from "react-icons/fa"

import logo from "../../public/solar_logo.png"
import Image from 'next/image'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
const Navbar = () => {
  const [burgerMenu,setBurgerMenu] = useState(false)
  const burgerHandler = () =>{
    setBurgerMenu(!burgerMenu)
  }
  const burgerIcon = burgerMenu? <FaTimes/>:<FaBars/>

  return (
    <div className=' fixed md:top-5 md:left-10 md:right-10 z-20 inset-x-0 flex flex-col md:px-10  px-2 border-b-4 border-orange-500  bg-white shadow-xl rounded-sm  mx-auto'>
        {/* Logo */}


        <div className="grid grid-cols-6 col-span-full border-b py-3 relative">
          <div className="md:col-span-full lg:col-span-2 col-span-full">
            <Logo/>
            
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
            <button className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-orange-500" onClick={() => burgerHandler()}>{burgerIcon}</button>
        </div>


        {/* Navlink */}
        <div className={` ${burgerMenu? "flex":"hidden md:flex"}  justify-between md:items-center flex-col md:flex-row p-1 gap-y-8`}>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-semibold uppercase  [&>li]:cursor-pointer [&>li]:py-1 text-sky-900 [&>li:hover]:text-orange-500'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Gallery</li>
            <li>Contact Us</li>
            <li>FAQ</li>
        </ul>
        
        <SocialIcons/>
        </div>
    </div>
  )
}

export default Navbar