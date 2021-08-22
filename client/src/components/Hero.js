import React from 'react';
import '../App.css';
import Button1 from './Button1';
import './css/Hero.css';
//import { Carousel } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'

function Hero() {
  return (
    <>
    <div className="scrollmenu">
      <a href="#home">Lawn Mowing</a>
      <a href="#news">Hedge Trimming</a>
      <a href="#about">Lawn Maintenance</a>
      <a href="#contact">Sod Installation</a>
      <a href="#about">Seasonal Cleanups</a>
      <a href="#about">Garden Maintenance</a>
      <a href="#about">Power Rake</a>
      <a href="#about">Aeration</a>
      <a href="#about">Mulch</a>
      <a href="#about">Fertilizing</a>
    </div>
     
    
    <div className='hero-container'>

   
   
      <div className='carousel-container'>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <h1></h1>
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
    </>
  );
}

export default Hero;