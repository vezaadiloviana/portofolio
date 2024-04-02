import React from "react";
import Sosmed from "../Sosmed";

const Contact = () => {
  return (
    <div id="contact" className="my-10 p-10 bg-[#6D7E99] rounded-3xl">
      <div className="text-2xl md:text-3xl font-bold mb-5 text-white underline text-center">
        Connect with Me
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around py-20">
        <Sosmed goto={"https://www.linkedin.com/in/veza-adiloviana/"} icon={"mdi:linkedin"} platform={"LinkedIn"} usernamePlatform={"veza-adiloviana"}/>
        <Sosmed goto={"mailto:vezaadiloviana27@gmail.com"} icon={"material-symbols:mail"} platform={"Email"} usernamePlatform={"vezaadiloviana27@gmail.com" }/>
        <Sosmed goto={"https://github.com/vezaadiloviana"} icon={"jam:github"} platform={"Github"} usernamePlatform={"vezaadiloviana" }/>
      </div>
    </div>
  );
};

export default Contact;
