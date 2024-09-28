import React, { useEffect, useRef, useState } from "react";
import { motion as m, useAnimation, useInView } from "framer-motion";
import { zoomIn } from "@/lib/animation";

const PanelInstalled = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref);
  useEffect(() => {
    let interval;
    if (counter < 250) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 5);
    }
  console.log(isInView)

    return () => clearInterval(interval);
  }, [counter,isInView]);

  return (
    <m.div ref={ref}
      variants={zoomIn(0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="absolute bottom-10 left-10 md:bottom-10 bg-white/90 border border-white backdrop-blur md:-left-20 w-auto px-8 py-4 shadow-2xl flex flex-col rounded-md"
    >
      <m.p className="text-5xl font-bold text-green-500 drop-shadow-md">
        {counter}+
      </m.p>
      <p className="text-gray-500 font-semibold ">Panels Installed</p>
    </m.div>
  );
};

export default PanelInstalled;
