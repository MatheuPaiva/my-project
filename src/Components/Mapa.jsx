import React from "react";
import BannerPng from "../assets/logosprint.png";
import { BiPlayCircle } from "react-icons/bi";

const Mapa = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative bg-gradient-to-b from-gray-100 to-transparent">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-2/3 mx-auto max-w-[400px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Conheça a Sprint{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-purple-900">
                  A incubadora da UTFPR
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              A Sprint Incubadora da UTFPR é um dos mecanismos do PROEM (Programa de Empreendedorismo e Inovação) da UTFPR, que se destina a apoiar empresas inovadoras de base tecnológica. E visa estimular e fomentar a criação de empresas, possibilitando a concretização de ideias em negócios caracterizados pela tecnologia.
              </p>
              <div className="flex gap-6">
                <a href="http://sh.utfpr.edu.br/iutsh/inicio" target="_blank">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay }
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  Acesse
                </button>
                </a>
                
              </div>
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
