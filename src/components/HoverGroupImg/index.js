import React from "react";

const HoverGroupImg = ({nameProject, imgProject}) => {
  return (
    <div>
      <div class="group relative">
            <div class="cursor-pointer">
                <img src={imgProject} alt="banyumax.id" />
            </div>
            <div class="text-center hidden group-hover:block absolute bottom-0 bg-[#AEAEAE4D] bg-opacity-50 backdrop-blur-sm z-10 text-black font-semibold w-full text-xs md:text-base p-1.5 md:p-3">
                {nameProject}
            </div>
      </div>
    </div>
  );
};

export default HoverGroupImg;
