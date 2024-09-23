import React, { useState } from "react";
import Container from "./Container";
import config from "../pages/index.json";
import Link from "next/link";
import Portal from "../portal/Portal";
import { motion as m, AnimatePresence } from "framer-motion";
import { fadeIn, textContainer, textVariant } from "@/lib/animation";
import FreeQuote from "./modal/FreeQuote";

const HeroSection = () => {
  const hero = config.hero;
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container
      className=" min-h-screen bg-[url('../public/solarimg.jpg')] bg-cover bg-no-repeat 
    flex flex-col justify-center items-center text-white  relative after:content-[''] after:absolute after:bg-gray-900/80  after:inset-0"
    >
      <m.div
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-[75%] text-center flex flex-col gap-8 z-10 "
      >
        <div className="overflow-hidden">
          <m.h1
            variants={textVariant(0.5)}
            transition={{ duration: 1 }}
            className='text-4xl md:text-6xl font-bold uppercase [text-wrap:"balanced"] drop-shadow-lg'
          >
            POWER YOUR HOME WITH <span className="text-green-400">CLEAN</span>,{" "}
            <span className="text-green-400"> AFFORDABLE</span>{" "}
            <span className="">SOLAR</span> ENERGY
          </m.h1>
        </div>
        <m.p
          variants={textVariant(0.8)}
          className='text-lg lg:w-[70%] self-center text-gray-200 [text-wrap:"balanced"]'
        >
          {hero.subtitle}
        </m.p>
        <div className="text-center flex gap-4 justify-center pt-4 flex-col md:flex-row [&>button]:relative [&>button]:btn_overlay">
          <m.button
            variants={fadeIn("up", "spring", 1, 0.5)}
            className="px-6 py-3 bg-green-600 rounded-sm btn_overlay"
            onClick={() => setOpenModal(!openModal)}
          >
            {hero.cta[0].title}
          </m.button>
          <m.button
            variants={fadeIn("up", "spring", 1.3, 0.5)}
            className="border px-6 py-3 rounded-sm  btn_overlay"
          >
            <Link href={hero.cta[1].href}>{hero.cta[1].title}</Link>
          </m.button>
        </div>
      </m.div>

      <AnimatePresence>
        {openModal && (
          <Portal>
            <FreeQuote closeModal={setOpenModal} />
          </Portal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default HeroSection;
