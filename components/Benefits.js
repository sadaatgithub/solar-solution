import React from "react";
import Container from "./Container";

const benefits = [
    {id:1,title:"Renewable",desc:"Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels."},
    {id:2,title:"Enviornment Friendly",desc:"Solar energy doesn't release any greenhouse gases or other harmful pollutants into the atmosphere, making it a clean and sustainable energy source."},
    {id:3,title:"Cost-Effective",desc:"Once installed, solar panels can significantly reduce your energy bills and pay for themselves in a few years"},
    {id:4,title:"Low Mentainance",desc:"Solar energy is a renewable source of energy, meaning it won't deplete like traditional fossil fuels.Solar panels require very little maintenance, making them a hassle-free investment."}

]

const Benefits = () => {
  return (
    <Container className="flex gap-20 w-full items-start">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold text-orange-500">Benefits</p>
          <h2 className="font-bold text-5xl text-gray-700">Why Go For Solar</h2>
        </div>
        <div className="">
          <button className="px-6 py-3 border">Read More</button>
        </div>
      </div>

      {/* benefits points */}
      <div className="flex flex-col w-1/2 gap-y-4">
        {benefits.map(benefits =>
        <div key={benefits.id} className="flex gap-10">
          <div className="flex justify-center flex-col items-center gap-4">
            <svg
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
            </svg>
            <svg
              width="2"
              height="100"
              viewBox="0 0 2 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999996"
                y2="100"
                stroke="#F24E1E"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-[10px]">
          <h6 className="text-xl font-bold text-gray-700">{benefits.title}</h6>
          <p className="text-gray-500">{benefits.desc}</p>
        </div>
        </div>)}
       
      </div>
    </Container>
  );
};

export default Benefits;
