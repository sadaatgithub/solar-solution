import React from "react";
import Container from "./Container";
import Image from "next/image";
import aboutImage from "../public/solar-hero.jpg";
import { FaChevronCircleRight } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import TopSubHeading from "./common/heading/TopSubHeading";
import DivTitle from "./common/heading/DivTitle";
import { motion as m} from "framer-motion";

import { container, textVariant } from "@/lib/animation";
import Link from "next/link";
import PanelInstalled from "./PanelInstalled";

const AboutUs = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full  min-h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:w-1/2 z-10">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <TopSubHeading text="Who We Are"/>
            <div className="flex flex-col gap-6 items-center md:items-start">
              <DivTitle text="Powering a brighter future through solar innovation"/>
              <m.p variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="text-lg text-gray-500">
                Our mission is to make solar energy accessible to everyone. We
                believe that solar is not only good for the environment, but
                also for our customers&apos; wallets. By helping homeowners and
                businesses switch to solar, we&apos;re making a positive impact
                on both the planet and their bottom line.
              </m.p>
            </div>
          </div>
          <m.div variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}  className="">
            <ul className="flex flex-col gap-4 text-gray-800 [&>li]:flex [&>li]:gap-2 [&>li]:items-center ">
              <m.li variants={textVariant(0.1)}>
                <FaChevronCircleRight className="text-green-400" />
                Flexible Cost-Effective Solutions
              </m.li>
              <m.li variants={textVariant(0.2)}>
                <FaChevronCircleRight className="text-green-400" />
                Produce Innovative Design Futuristic Blades
              </m.li>
              <m.li variants={textVariant(0.3)}>
                <FaChevronCircleRight className="text-green-400" />
                We Tailored For Specific Client’s Needs
              </m.li>
            </ul>
          </m.div>
        </div>
        <div className="pt-4 flex gap-10 items-center flex-col sm:flex-row flex-wrap">
          <Link href="/about" className="w-full md:max-w-[200px] sm:max-w-1/2">
          <m.button variants={textVariant(0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="w-full self-start px-6 py-3 bg-green-500 text-white rounded-sm relative btn_overlay">
            Know More
          </m.button>
          </Link>
          <m.div variants={textVariant(0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="flex gap-4 items-center">
            <FiPhoneCall  className="bg-green-50 p-4 rounded-full font-thin w-12 h-12 text-green-400"/>
            <ul className="flex flex-col">
            <li className="text-gray-400">Have any questions?</li>
            <li className="font-bold"><a href="tel:8484939335">(+91) 8484939335</a></li>
            </ul>

          </m.div>
        </div>
      </div>
      <m.div variants={textVariant(0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="md:w-1/2 md:-translate-x-5 z-10 flex relative after:absolute after:content-[''] after:top-16 after:-bottom-2 md:after:-right-10 after:left-1/2 after:-z-10 after:bg-green-300/20 ">
        <Image
          src={aboutImage}
          width={960}
          height={640}
          alt="our team"
          className="w-full  h-[90%] self-center object-cover object-left  "
        />
        <PanelInstalled/>
        
      </m.div>
    </Container>
  );
};

export default AboutUs;
