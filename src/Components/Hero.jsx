import React from "react";
import Aos from "aos";
import Image1 from "../assets/image1.png"
import Image2 from "../assets/Image2.png"
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Bem vindo à DIREC!",
    description:
      "A Diretoria de Relações Empresariais e Comunitárias promove e fortalece a interação entre a instituição, as empresas e a comunidade.",
  },
  {
    id: 2,
    img: Image2,
    title: "Nossos Serviços Disponiveis",
    description:
      "Estágios, cursos de qualificação, gestão de egressos, cadastro de empresas, visitas técnicas, projetos tecnológicos, Incubadora de empresas, Empreendedorismo ...",
  },
  
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-150 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[800px] bg-gradient-to-b from-purple-300 to-transparent absolute -top-1/3 right-10 rounded-3xl rotate-45 -z[8] "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
      <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-black"
                    
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[350px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;