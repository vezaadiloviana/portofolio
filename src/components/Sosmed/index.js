import React from "react";
import { Icon } from '@iconify/react';

const Sosmed = ({goto, icon, platform, usernamePlatform}) => {
  return (
    <div className=""> 
      <a href={goto} target="_blank" rel="noreferrer" className="flex flex-col md:flex-row gap-4 items-center">
        <div className="bg-primaryBlue w-16 h-16 flex justify-center items-center rounded-2xl rotate-45">
            <Icon className="text-secondaryYellow -rotate-45" icon={icon} width="40" height="40" />
        </div>
        <div className="text-secondaryYellow text-center md:text-start">
            <p className="text-lg -mb-1">{platform}</p>
            <span className="font-semibold">{usernamePlatform}</span>
        </div>
      </a>
    </div>
  );
};

export default Sosmed;
