import React from "react";
import Title from "../Title";
import { Icon } from "@iconify/react";

const Experiences = () => {
  return (
    <div id="experiences" className="bg-[#35455D] p-10 -mx-10">
      <div className="flex justify-center">
        <Title title={"Job &"} subTitle={"Experiences"} />
    </div>

        <div className="">
            <div className="relative wrap overflow-hidden h-full">
                
                <div className="flex gap-5 mb-5 justify-between w-full">
                    <div className="hidden md:block w-5/12"></div>
                    <div className="w-max z-10">
                        <div className="flex justify-center items-center bg-gray-800 shadow-xl w-10 h-10 rounded-full text-white">
                            <Icon icon="material-symbols-light:home-work" width="18" height="18" />
                        </div>
                    </div>
                    <div className="bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-4 py-3">
                        <h3 className="mb-1 font-bold text-gray-800 text-lg">Frontend Web Developer - PT Sonic Solusi Digital</h3>
                        <p className="mb-1 text-sm leading-snug tracking-wide text-gray-900">Nov 2022 - Sekarang • Full-time</p>
                        <p className="text-sm leading-snug tracking-wide text-gray-700">Kota Madiun, Jawa Timur, Indonesia </p>
                    </div>
                </div>

                <div className="absolute h-full w-1 bg-gray-800 top-0 ms-5 md:ms-0 md:left-1/2"></div>
                    
                <div className="flex gap-5 mb-5 md:flex-row-reverse justify-between w-full"  >
                    <div className="hidden md:block w-5/12"></div>
                    <div className="w-max z-10">
                        <div className="flex justify-center items-center bg-gray-800 shadow-xl w-10 h-10 rounded-full text-white">
                            <Icon icon="material-symbols-light:home-work" width="18" height="18" />
                        </div>
                    </div>
                    <div className="bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-4 py-3">
                    <h3 className="mb-1 font-bold text-gray-800 text-lg">Frontend Web Developer - PT Powerkerto Wahyu Keprabon</h3>
                        <p className="mb-1 text-sm leading-snug tracking-wide text-gray-900">Apr 2022 - Des 2022 • Magang - Full-time</p>
                        <p className="text-sm leading-snug tracking-wide text-gray-700">Banyumas, Jawa Tengah, Indonesia</p>
                    </div>
                </div>

            </div>
            {/* diluar relative agar garis penghubung tidak berlanjut */}
            <div className="flex gap-5 mb-5 justify-between w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="w-max z-10">
                    <div className="flex justify-center items-center bg-gray-800 shadow-xl w-10 h-10 rounded-full text-white">
                        <Icon icon="material-symbols-light:home-work" width="18" height="18" />
                    </div>
                </div>
                <div className="bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-4 py-3">
                    <h3 className="mb-1 font-bold text-gray-800 text-lg">Web Developer - Seven Inc</h3>
                    <p className="mb-1 text-sm leading-snug tracking-wide text-gray-900">Jul 2021 - Okt 2021 • Magang</p>
                    <p className="text-sm leading-snug tracking-wide text-gray-700">Banguntapan, Daerah Istimewa Yogyakarta, IndonesiaBanguntapan </p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Experiences;
