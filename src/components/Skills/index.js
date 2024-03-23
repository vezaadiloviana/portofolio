import React from "react";
import Title from "../Title";
import imghtml from "../../assets/img/skills/html.png"
import imgcss from "../../assets/img/skills/css.png"
import imgreact from "../../assets/img/skills/react.png"
import imglaravel from "../../assets/img/skills/laravel.png"
import imgtailwind from "../../assets/img/skills/tailwind.png"
import imggithub from "../../assets/img/skills/github.png"
import imgjs from '../../assets/img/skills/js.png'

const Skills = () => {
  return (
    <div id="skills" className="bg-[url('./assets/img/bg-skills.png')] bg-cover bg-center p-10 -mx-10">
        <div className="flex justify-center">
            <Title title={"Skills &"} subTitle={"Capabilities"}/>
        </div>
        <div className="py-5 flex flex-wrap justify-center gap-5 md:gap-10">
            <img className="h-10 md:h-24" src={imghtml} alt="HTML" />
            <img className="h-10 md:h-24" src={imgcss} alt="CSS" />
            <img className="h-10 md:h-24" src={imgjs} alt="JS" />
            <img className="h-10 md:h-24" src={imgreact} alt="React" />
            <img className="h-10 md:h-24" src={imglaravel} alt="Laravel" />
            <img className="h-10 md:h-24" src={imgtailwind} alt="Tailwind" />
            <img className="h-10 md:h-24" src={imggithub} alt="GitHub" />
        </div>
      
    </div>
  );
};

export default Skills;
