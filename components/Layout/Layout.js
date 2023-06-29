import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Header/Navbar";
import { useRouter } from "next/router";
import Footer from "../Footer";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
    <Navbar/>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.3,
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
              // opacity: 0,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="max-w-[1440px] relative mx-auto"
        >
          <main className="bg-none">{children}</main>
        </motion.div>
      </AnimatePresence>
          <Footer />
    </>
  );
}
