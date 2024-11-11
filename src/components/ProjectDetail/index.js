import React, { useState } from "react";
import { Icon } from '@iconify/react';

const ProjectDetail = () => {
  // State to manage the currently displayed item index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Data for images and associated text
  const content = [
    {
      imageSrc: require('../../assets/img/project/1.png'),
      title: "Website",
      link: "https://babang.id/",
      description: "An e-commerce trading platform specializing in online sales of building materials. The platform allows customers to purchase various building materials via the internet. The website is developed using Laravel, with a modern and responsive design styled with Tailwind CSS. For the mobile version, the platform is built with React Native, consuming APIs from the backend to ensure a seamless and efficient user experience.",
      appLink: "https://play.google.com/store/apps/details?id=com.babang",
      appName : "Babang",
      webName : "BabangID",
    },
    {
      imageSrc: require('../../assets/img/project/2.png'),
      title: "Website",
      link: "https://b2b.babang.id/",
      description: "An e-commerce platform focused on business-to-business (B2B) transactions for building materials. The platform facilitates bulk purchases, customized pricing, and enables efficient procurement and effective supply chain management. The website is developed using Laravel, with a modern and responsive design styled with Tailwind CSS.",
      webName : "B2B BabangID",
    }, 
    {
        imageSrc: require('../../assets/img/project/3.png'),
        title: "Website",
        link: "https://sonicdigital.id/",
        description: "I developed a Company Profile Website to showcase the product, services, and vision of a company. The website serves as a digital portfolio that highlights the company's background, products, team, and mission. The website is developed using Laravel, with a modern and responsive design styled with Tailwind CSS.",
        webName : "Company Profile Sonic Solusi Digital",
    }, 
    {
        imageSrc: require('../../assets/img/project/4.png'),
        title: "Website",
        link: "https://www.banyumax.id/",
        description: "Banyumax is a digital marketing platform designed to help businesses maximize their sales lead conversion. The goal of Banyumax is to streamline the process of responding to customer inquiries by enabling customer service (CS) teams to provide faster, easier, and more accurate responses. The website is developed using Laravel, with a modern and responsive design styled with Tailwind CSS.",
        webName : "Banyumax",
    }, 
    {
      imageSrc: require('../../assets/img/project/5.png'),
      title: "Website",
      link: "https://www.whitefox.id/",
      description: "Whitefox is a full-service digital and creative agency specializing in helping businesses reach their goals through innovative and impactful digital and creative solutions. The website is developed using Laravel, with a modern and responsive design styled with Tailwind CSS.",
      webName : "Whitefox",
  }, 
      
  ];

  // Handlers for next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  return (
    <div>
      <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-10 items-center">
        <div className="col-span-4">
          <div className="block">
            <h1 className="text-xl text-primaryBlue dark:text-white font-bold mb-5">
              {content[currentIndex].title}{" "}
              <a className="hover:underline" href={content[currentIndex].link}>
                {content[currentIndex].webName}
              </a>
              {content[currentIndex].appName && (
                <> and Android App{" "}
                  <a className="hover:underline" href={content[currentIndex].appLink}>
                    {content[currentIndex].appName}
                  </a>
                </>
              )}
            </h1>
            <p className="text-base text-[#404040] dark:text-gray-200 text-justify">
              {content[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="col-span-8">
          <div className="relative">
            <div className="flex justify-center">
              <img
                className="w-[80%] block"
                src={content[currentIndex].imageSrc}
                alt="Project screenshot"
              />
            </div>
            <div className="absolute top-0 flex justify-between w-full h-full md:px-10">
              <button
                className="text-blue-900 hover:text-primaryBlue"
                onClick={handlePrev}
              >
                <Icon icon="fluent:previous-frame-20-filled" width="28" height="28" />
              </button>
              <button
                className="text-blue-900 hover:text-primaryBlue"
                onClick={handleNext}
              >
                <Icon icon="fluent:next-frame-20-filled" width="28" height="28" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
