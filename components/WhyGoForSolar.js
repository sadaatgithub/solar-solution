import React from "react";
import Container from "./Container";
import { MdAutorenew } from "react-icons/md";
import {GiReceiveMoney,GiEarthAmerica,GiSolarPower} from "react-icons/gi"
const benefits = [
  {
    id: 1,
    title: "Renewable",
    desc: "Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels.",
    icon:<MdAutorenew/>,
  },
  {
    id: 2,
    title: "Enviornment Friendly",
    desc: "Solar energy doesn't release any greenhouse gases or other harmful pollutants into the atmosphere, making it a clean and sustainable energy source.",
    icon:<GiEarthAmerica/>,
  },
  {
    id: 3,
    title: "Cost-Effective",
    desc: "Once installed, solar panels can significantly reduce your energy bills and pay for themselves in a few years",
    icon:<GiReceiveMoney/>,
  },
  {
    id: 4,
    title: "Low Mentainance",
    desc: "Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels.Solar panels require very little maintenance, making them a hassle-free investment.",
    icon:<GiSolarPower/>,
  },
];

const WhyGoForSolar = () => {
  return (
    <Container className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-20">
      <div className="flex flex-col gap-6 col-span-full md:col-span-1">
        <p className="font-semibold text-orange-500">BENEFITS</p>
        <h2 class="text-5xl font-bold text-gray-700">Why Go For Solar</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quas
          excepturi, non aliquid aliquam perspiciatis commodi ullam et qui
          dolorum.
        </p>
        <button className="self-start mt-4 border px-6 py-3 bg-orange-500 text-white border-orange-500 rounded-sm shadow-2xl shadow-orange-200">
          Get Free Consultation
        </button>
      </div>
      <div className="grid-col-1 md:col-span-2  grid  sm:grid-cols-2  md:gap-y-16 gap-12 gap-x-12">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex flex-col gap-6 sm:col-span-1 [&>svg]:text-4xl [&>svg]:text-orange-400 ">
            {/* <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.46 10.24L35.18 9.74C34.8188 9.13538 34.3094 8.63286 33.7 8.28L20.28 0.54C19.6724 0.1875 18.9826 0.00124 18.28 0H17.7C16.9974 0.00124 16.3076 0.1875 15.7 0.54L2.28 8.3C1.67394 8.65052 1.17052 9.15394 0.82 9.76L0.54 10.26C0.1875 10.8677 0.00124 11.5575 0 12.26V27.76C0.00124 28.4626 0.1875 29.1524 0.54 29.76L0.82 30.26C1.17958 30.859 1.68098 31.3604 2.28 31.72L15.72 39.46C16.3246 39.8198 17.0164 40.0066 17.72 40H18.28C18.9826 39.9988 19.6724 39.8126 20.28 39.46L33.7 31.7C34.312 31.3574 34.8174 30.852 35.16 30.24L35.46 29.74C35.8082 29.1306 35.9942 28.442 36 27.74V12.24C35.9988 11.5375 35.8126 10.8477 35.46 10.24ZM17.7 4H18.28L30 10.76L18 17.68L6 10.76L17.7 4ZM20 35L31.7 28.24L32 27.74V14.22L20 21.16V35Z"
                fill="#F57F11"
              />
            </svg> */}{benefit.icon}
            <h6 className="text-xl font-bold  text-sky-800">{benefit.title}</h6>
            <p className="text-gray-500">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyGoForSolar;
