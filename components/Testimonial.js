import React from 'react'
import Container from './Container'


import { FaStar } from 'react-icons/fa';
import config from "../pages/index.json"
import DottedAbstract from './common/DottedAbstract';
import TopSubHeading from './common/heading/TopSubHeading';
import DivTitle from './common/heading/DivTitle';
import Image from 'next/image';
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn } from '@/lib/animation'

// const testimonial = [
//     {
//       id: 1,
//       patient: "John doe",
//       designation: "Cricketer",
//       desc: `I was skeptical about physiotherapy at first, but after just a few sessions with the team at Samarth Physio, I am completely pain-free and back to my active lifestyle. I can't thank them enough for their expertise and personalized care.`,
//     //   image:Slide1
//     },
//     {
//       id: 2,
//       patient: "Jane Smith",
//       designation: "Architect",
//       desc: `After a serious sports injury, I was having trouble regaining my strength and mobility. The therapists at Samarth Physio helped me develop a tailored treatment plan and now I am stronger and more flexible than ever. Highly recommend!`,
//     //   image:Slide2
//     },
//     {
//       id: 3,
//       patient: "David Lee",
//       designation: "Athelete",
//       desc: `I was struggling with chronic back pain for years and had tried every treatment under the sun with no relief. The physiotherapists at Samarth Physio took the time to understand my condition and develop a plan that worked for me. I can finally say goodbye to pain!`,
//     //   image:Slide3
//     },
//     {
//       id: 4,
//       patient: "Sarah Johnson",
//       designation: "CA",
//       desc: `I was nervous about undergoing physiotherapy after a recent surgery, but the team at Samarth Physio put me at ease from the moment I walked in the door. Their evidence-based techniques and personalized attention have made all the difference in my recovery.`,
//     //   image:Slide2
//     },
//     {
//       id: 5,
//       patient: "Michel Brown",
//       designation: "Shop Keeper",
//       desc: `I have been seeing the therapists at Samarth Physio for several months now and have noticed a huge improvement in my overall well-being. Their holistic approach to physiotherapy has not only helped me heal from my injuries, but has also made me stronger and more resilient.`,
//     //   image:Slide1
//     },
//   ];

const Testimonial = () => {
  const testimonials = config.testimonials

  return (
    <Container className="flex flex-col gap-20 items-center justify-center min-h-screen bg-gray-50 relative ">
    <DottedAbstract className="-left-10 top-0"/>
       <div className="flex flex-col gap-6 items-center">
        <TopSubHeading text="What They Say About Us"/>
          <DivTitle text="Customer Testimonials"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial,idx) => 
      <m.div key={idx} variants={fadeIn('up','tween',0.1*idx,0.3)} initial="hidden"  whileInView="show" viewport={{once:true, amount:0.3}} className="flex flex-col gap-6 p-8  rounded-md shadow-md border shadow-gray-100 bg-white">
               <div className="flex text-green-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
               <p className="text-gray-500">{testimonial.text}</p>
               <div className="flex items-center  gap-4 mt-auto">
                <Image width={80} height={80} 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-medium text-gray-900">
                   {testimonial.name}
                </p>
                <p className="text-green-500 text-sm">
                  {testimonial.designation}
                </p>
                </div>
                </div>
      </m.div> )}
      </div>
  </Container>
    )
}

export default Testimonial