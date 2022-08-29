import React from 'react';
import '../App.css';
import { Button } from './Button';
import './styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>Solution for every Challange</h1>
      <p>Whant to see What we do?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Our Projects
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact Us <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;