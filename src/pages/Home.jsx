import React from 'react';
import Mapa from '../Components/Mapa.jsx';
import Hero from '../Components/Hero'
import imagemlogo from '../assets/campus_logo.png';
import Organograma from '../Components/organograma.jsx';



const Home = () => {

  

  return (
    <>
      <div>
        <Hero/>
      </div>
      <div>
        <Mapa/>
      </div>
      <div>
        <Organograma/>
      </div>

      
    </>
  );
}

export default Home;
