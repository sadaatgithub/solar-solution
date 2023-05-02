import "@/styles/globals.css";
// import {  Source_Sans_Pro } from "@next/font/google";
import { Inter,Source_Sans_Pro,Rye,Satisfy } from 'next/font/google'
import Layout from "@/components/Layout/Layout";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});
const rye = Rye({weight:['400'],subsets:['latin']})
const inter = Inter({ subsets: ['latin'] })
const satisfy = Satisfy({weight:['400'],subsets:['latin']})
export default function App({ Component, pageProps }) {
  return (
    <>
     <style jsx global>
        {`
          :root {
            --source-inter:${inter.style.fontFamily};
            --source-ssp:${sourceSansPro.style.fontFamily};
            --logo-font:${rye.style.fontFamily};
            --sublogo-font:${satisfy.style.fontFamily}

            
          }
        `}
      </style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
