import React from "react";
import Container from "./Container";
import Image from "next/image";
import aboutImage from "../public/solar-installation.jpg";
import ServiceHeader from "./services/ServiceHeader";
import ServiceMain from "./services/ServiceMain";

const OurServices = () => {
  return (
    <Container className="flex flex-col gap-20 items-center">
     <ServiceHeader/>
     <ServiceMain/>
    </Container>
  );
};

export default OurServices;
