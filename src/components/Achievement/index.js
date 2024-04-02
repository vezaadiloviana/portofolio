import React from "react";
import Title from "../Title";
import dicodingWeb from "../../assets/img/certificate/Dicoding-Web.png";
import dicodingJs from "../../assets/img/certificate/Dicoding-Javascript.png";
import kominfo from "../../assets/img/certificate/PelatihanKominfo.png";
import serkom from "../../assets/img/certificate/Serkom.png";
import { Carousel } from "flowbite-react";

const Achievement = () => {
  return (
    <div id="achievement" className="py-10">
      <Title title={"Achievement &"} subTitle={"Certifications"} />
      <div className="flex justify-center">
        <div className="h-96 w-full md:w-6/12">
          <Carousel slideInterval={5000}>
            <img className="object-contain h-96" src={dicodingWeb} alt="..." />
            <img className="object-contain h-96" src={dicodingJs} alt="..." />
            <img className="object-contain h-96" src={kominfo} alt="..." />
            <img className="object-contain h-96" src={serkom} alt="..." />
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default Achievement;
