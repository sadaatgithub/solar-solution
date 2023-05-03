import React from 'react'
import config from "../../pages/index.json"
import Link from 'next/link'

const NavLinks = () => {
    const navlink = config.navigation
  return (
    <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-semibold uppercase  [&>li]:cursor-pointer [&>li]:py-1 text-sky-900 [&>li:hover]:text-orange-500'>
            {navlink.map(link => 
            <li key={link.href}><Link href={link.href}>{link.title}</Link></li>
            )}
        </ul>
  )
}

export default NavLinks