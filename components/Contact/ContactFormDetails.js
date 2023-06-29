import React from 'react'
import {
    TfiHeadphoneAlt,
    TfiEmail,
    TfiLocationPin,
    TfiMobile,
  } from "react-icons/tfi";
import TopSubHeading from '../common/heading/TopSubHeading';
import DivTitle from '../common/heading/DivTitle';


const ContactFormDetails = ({title}) => {
  return (
    <div className="flex flex-col z-10 text-black gap-6">
        {/* <p className="text-green-500 uppercase font-semibold"></p> */}
        <TopSubHeading text="Get in Touch"/>
          <DivTitle text={title}/>
        
        <p className="text-lg text-gray-500">
          Wish to get a free consultation or which
          kind of solution you need? Just give us a call or submit the form
          here.{" "}
        </p>
        <div className="flex flex-col gap-4 text-gray-700">
          <div className="flex gap-4 items-center font-semibold">
            <TfiEmail  className="text-green-400 font-bold" />{" "}
            <p>solutionsolar42@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center font-semibold">
            <TfiMobile  className="text-green-400" /> <p>8484939335</p>
          </div>
          <div className="flex gap-4 items-center font-semibold">
            <TfiLocationPin  className="text-green-400" />{" "}
            <p>Bhavani Nagar, Paradi,Nagpur</p>
          </div>
        </div>
      </div>
  )
}

export default ContactFormDetails