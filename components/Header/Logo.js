import React from "react";
import logo from "../../public/solar_logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2">
      {" "}
      <Image src={logo} alt="" width={55} height={40} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-rye  text-orange-500">Solar Solutions</h1>
  <p className="text-sm text-gray-500 font-satisfy">By Choudhary Engineering</p>
       
      </div>
    </div>
  );
};

export default Logo;
