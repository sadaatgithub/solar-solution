import React from 'react'
import Logo from './Header/Logo'
import SocialIcons from './Header/SocialIcons'

const Footer = () => {
  return (
    <footer className="flex flex-col  gap-20 py-20 px-4 md:px-16 bg-slate-800 text-white">
            <div className="flex  w-full lg:flex-row flex-col gap-6">
                <div className="w-full grow flex justify-center lg:justify-start">
                    <Logo/>
                </div>

            <ul className="flex w-full justify-center gap-8">
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            </ul>
        
            <div className="w-full flex justify-center lg:justify-end">
            <SocialIcons className=""/>
            </div>
            </div>
            <div className="flex gap-6 justify-center border-t border-spacing-5 border-gray-600 py-4 text-sm">
                <p>2023 All rights reserved</p>
                <p>Privacy Policy</p>
                <p>Terms of service</p>

            </div>

    </footer>
  )
}

export default Footer