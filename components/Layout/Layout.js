// import Navbar from "../header/Navbar"
// import Footer from "../../components/footer/Footer"
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../Header/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const router = useRouter();

  const [animateNav, setAnimateNav] = useState(false)
  const [goToTop, setGoToTop] = useState(false)

  const navbarOnScroll = () =>{
    if(window.scrollY >=350){
      setAnimateNav(true)
      setGoToTop(true)
    
    } else{
      setAnimateNav(false)
      setGoToTop(false)

    }
  }
  useEffect(() =>{
    window.addEventListener("scroll", navbarOnScroll)
    return()=>{
      window.removeEventListener("scroll", navbarOnScroll)
    }
  },[])
  
  return (
    <>
    <AnimatePresence mode="wait">
    <motion.div 
    key={router.route}
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{
      duration: 0.5,
    }}
    variants={{
      initialState: {
        opacity: 0,
        // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",

      },
      animateState: {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      exitState: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
    }}
     className="max-w-[1440px]">
      <Navbar/>
      <div className={`${animateNav? "top-0 opacity-100 transition-all duration-500 ease-in-out ":"-top-24 opacity-0"} fixed z-50 right-0 left-0`}><Navbar/></div>
      <main className="bg-none ">{children}</main>
      {/* <Footer/> */}
      </motion.div>
      </AnimatePresence>
    </>
  )
}