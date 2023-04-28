import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col  gap-20 py-20 px-16 bg-slate-800 text-white">
            <div className="flex  w-full md:flex-row flex-col gap-6">
                <div className="w-full flex justify-center md:justify-start">
                    <h2>LOGO</h2>
                </div>

            <ul className="flex w-full justify-center gap-8">
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            </ul>
            <ul className="flex w-full justify-center md:justify-end gap-8">
            <li>Fb</li>
            <li>Insta</li>
            <li>Youtube</li>
            </ul>
            
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