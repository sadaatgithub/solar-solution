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
        <button className="w-full md:max-w-[200px] self-start mt-4 border px-6 py-3 bg-orange-500 text-white border-orange-500 rounded-sm shadow-2xl shadow-orange-200">
          Get Free Consultation
        </button>
      </div>
      <div className="grid-col-1 md:col-span-2  grid  sm:grid-cols-2  md:gap-y-16 gap-12 gap-x-12">
        {benefits.map((benefit) => (
          <div key={benefit.id} className=" relative cursor-pointer before:content-[''] before:absolute before:inset-0 before:bg-sky-800/90 before:scale-[0] before:origin-top-left overflow-hidden hover:before:scale-100
           before:transition-all before:duration-500 hover:text-white  before:-z-[1] group before:rounded-md  border rounded-md
            ">
              <div className="flex flex-col gap-6 sm:col-span-1 [&>svg]:text-4xl
           [&>svg]:text-orange-400 p-2 z-[10] ">
            {benefit.icon}
            <h6 className="text-xl font-bold  text-sky-800 group-hover:text-white">{benefit.title}</h6>
            <p className="text-gray-500 group-hover:text-gray-200">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyGoForSolar;
