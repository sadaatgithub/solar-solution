import React from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { FaStar } from 'react-icons/fa';
const testimonial = [
    {
      id: 1,
      patient: "John doe",
      designation: "Cricketer",
      desc: `I was skeptical about physiotherapy at first, but after just a few sessions with the team at Samarth Physio, I am completely pain-free and back to my active lifestyle. I can't thank them enough for their expertise and personalized care.`,
    //   image:Slide1
    },
    {
      id: 2,
      patient: "Jane Smith",
      designation: "Architect",
      desc: `After a serious sports injury, I was having trouble regaining my strength and mobility. The therapists at Samarth Physio helped me develop a tailored treatment plan and now I am stronger and more flexible than ever. Highly recommend!`,
    //   image:Slide2
    },
    {
      id: 3,
      patient: "David Lee",
      designation: "Athelete",
      desc: `I was struggling with chronic back pain for years and had tried every treatment under the sun with no relief. The physiotherapists at Samarth Physio took the time to understand my condition and develop a plan that worked for me. I can finally say goodbye to pain!`,
    //   image:Slide3
    },
    {
      id: 4,
      patient: "Sarah Johnson",
      designation: "CA",
      desc: `I was nervous about undergoing physiotherapy after a recent surgery, but the team at Samarth Physio put me at ease from the moment I walked in the door. Their evidence-based techniques and personalized attention have made all the difference in my recovery.`,
    //   image:Slide2
    },
    {
      id: 5,
      patient: "Michel Brown",
      designation: "Shop Keeper",
      desc: `I have been seeing the therapists at Samarth Physio for several months now and have noticed a huge improvement in my overall well-being. Their holistic approach to physiotherapy has not only helped me heal from my injuries, but has also made me stronger and more resilient.`,
    //   image:Slide1
    },
  ];

const Testimonial = () => {
  return (
    <Container className="flex flex-col gap-20 items-center justify-center min-h-screen bg-sky-950">
        <div className="flex flex-col gap-6 items-center">
            <h2 className="text-5xl font-bold text-orange-400">Customer Testimonials</h2>
            <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <Swiper  
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={2}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          240:{
            slidesPerView: 1,
            spaceBetween: 20,
          slidesPerGroup:1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          slidesPerGroup:2,

          },
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper  w-full h-full relative   mt-8 md:mt-20 gap-8  group  grid grid-cols-1"
      >
        {testimonial.map((data,idx) => {
          return (
            <SwiperSlide 
              key={data.id}
              className="w-full h-full flex flex-col p-8  rounded-md bg-gray-50 border border-gray-100"
            >
             
                <div className="flex flex-col  w-full gap-8 ">
                  <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  <div className="text-center flex gap-2  relative">
                   

                    <p className="text-left text-gray-700">
                      {data.desc} 
                    </p>
                  
                  </div>

                  <div className="flex items-center  gap-4">
                  {/* <Image 
                  src={data.image}
                  alt={data.patient}
                  className="w-14 h-14 object-cover rounded-full"
                /> */}
                <div className="flex flex-col">
                  <p className="font-medium text-gray-900">
                     {data.patient}
                  </p>
                  <p className="text-gray-400">
                    {data.designation}
                  </p>
                  </div>
                  </div>
                </div>
               
            </SwiperSlide>
          );
        })}
        {/* <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-20 group-hover:left-2 transition-all duration-200 ease-linear">
        <SwiperButtonLeft />
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-20 group-hover:right-2 transition-all duration-200 ease-linear">
        <SwiperButtonRight />
        </div> */}
      </Swiper>

    </Container>
    )
}

export default Testimonial