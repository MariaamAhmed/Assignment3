import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import  Slider  from '../Slider';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Slider/>
    </>
  );
}

export default Home;
