import React from 'react'
import {FaChevronUp} from "react-icons/fa"

const BackToTop = () => {
  return (
    <div class="fixed right-10 bottom-10 bg-orange-600 p-2  rounded-sm z-30">
    <buton className="cursor-pointer w-full h-full"><FaChevronUp className="text-white"/></buton>
    </div>
  )
}

export default BackToTop