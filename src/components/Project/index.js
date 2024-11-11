import React from "react";
import Title from "../Title";
import ProjectDetail from "../ProjectDetail";

const Project = () => {
  return (
    <div id="portofolio" className="py-10">
      <Title title={"Project"} subTitle={"Portofolio"} />
      <div className="flex flex-col gap-10 items-center">
        <div className="">
          <p className="font-bold text-2xl text-[#404040] dark:text-gray-200">
            Take a glimpse into my journey of creation and witness the fruits of
            my labor.
          </p>
          {/* <div>
            <a
              href="/portofolio/detail-project"
              className="bg-secondaryYellow text-white font-semibold px-5 py-2 rounded-lg"
            >
              See More
            </a>
          </div> */}
        </div>
        <div className="">
          <ProjectDetail/>
        </div>
      </div>
    </div>
  );
};

export default Project;
