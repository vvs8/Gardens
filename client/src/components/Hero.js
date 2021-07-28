import React from 'react';
import '../App.css';
import Button1 from './Button1';
import './css/Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>WE CAN HELP YOU</h1>
      <p>Does your garden need some care?</p>
      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline1'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button1>
        
      </div>
    </div>
  );
}

export default Hero;