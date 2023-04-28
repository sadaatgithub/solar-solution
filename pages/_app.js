import "@/styles/globals.css";
// import {  Source_Sans_Pro } from "@next/font/google";
import { Inter,Source_Sans_Pro } from 'next/font/google'
import Layout from "@/components/Layout/Layout";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <>
     <style jsx global>
        {`
          :root {
            --source-inter:${inter.style.fontFamily};
            --source-ssp:${sourceSansPro.style.fontFamily}
            
          }
        `}
      </style>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
