import React from "react";
import BannerPng from "../assets/SPRINT.png";
import { BiPlayCircle } from "react-icons/bi";

const Mapa = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative ">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-full mx-auto max-w-[800px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl font-semibold"
              >
                Organograma Geral da {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-900">
                  Diretoria de Relações Empresariais e Comunitárias da UTFPR
                </span>
              </h1>
            
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-purple-800  to-transparent rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
