import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialIcons = ({className}) => {
  return (
    <div className={`${className | ""} flex gap-6 [&>svg]:bg-green-400 [&>svg:hover]:bg-green-600 [&>svg]:p-1 [&>svg]:rounded-sm [&>svg]:cursor-pointer [&>svg]:shadow-md`}>
    <FaInstagram  className="text-2xl text-white"/>
    <FaFacebookF className="text-2xl text-white"/>
    <FaTwitter className="text-2xl text-white"/>

</div>
  )
}

export default SocialIcons