import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

 
function HeroSection() {
  return (
    <div className='hero-container'>
    
     

    
    <h1 >Confidently work anywhere.</h1>
 
  <p >What are you waiting for? Shop Now!</p>

      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        
        >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={event =>  window.location.href='https://www.youtube.com/watch?v=28rGQT4rdBQ'}>
          EXPLORE MORE 
         <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
