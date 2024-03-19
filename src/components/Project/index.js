import React from "react";
import Title from "../Title";
import imgbanyumax from "../../assets/img/project/banyumax.png";
import imgbabangid from "../../assets/img/project/babangid.png";
import imgb2bbabangid from "../../assets/img/project/b2bbabangid.png";
import imgsonic from "../../assets/img/project/sonic.png";
import imgwhitefox from "../../assets/img/project/whitefox.png";
import HoverGroupImg from "../HoverGroupImg";

const Project = () => {
  return (
    <div id="portofolio" className="py-10">
      <Title title={"Project"} subTitle={"Portofolio"} />
      <div className="flex flex-col md:grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <p className="font-bold text-2xl text-[#404040] mb-10">
            Take a glimpse into my journey of creation and witness the fruits of
            my labor.
          </p>
          <div>
            <a
              href="/portofolio/detail-project"
              className="bg-secondaryYellow text-white font-semibold px-5 py-2 rounded-lg"
            >
              See More
            </a>
          </div>
        </div>
        <div className="col-span-8 grid grid-cols-2">
          <HoverGroupImg nameProject={"banyumax.id"} imgProject={imgbanyumax}/>
          <HoverGroupImg nameProject={"babang.id"} imgProject={imgbabangid}/>
          <HoverGroupImg nameProject={"b2b-babang.id"} imgProject={imgb2bbabangid}/>
          <HoverGroupImg nameProject={"sonicdigital.id"} imgProject={imgsonic}/>
          <HoverGroupImg nameProject={"whitefox.id"} imgProject={imgwhitefox}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
