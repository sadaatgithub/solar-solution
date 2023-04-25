import React from 'react'

const Navbar = () => {
  return (
    <div className='grid grid-cols-12  px-20 py-4 '>
        {/* Logo */}
        <div className="col-span-3 flex flex-col">
            <h1 className=" font-bold ">Solar Solution</h1>
            <p className="text-sm">By Choudhary Engineering</p>
        </div>
        {/* Navlink */}
        <ul className='flex gap-6 col-span-9  justify-end items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar