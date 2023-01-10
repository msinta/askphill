import React, { useState } from 'react';
import fitness from '../components/images/fitness.png';
import tennis from '../components/images/tennis.png';
import running from '../components/images/running.png';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { path: fitness },
    { path: tennis },
    { path: running},
  ];

  const handleSlide = (move) => {
    move === 'prev' ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide + 1)
  }

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
            <img src={slide.path} alt="slide" />
          </div>
        ))}
      </div>
      <button className={`${currentSlide === 0 ? 'hidden' : 'prev'}`} onClick={() => handleSlide('prev')}>prev</button>
      <button className={`${currentSlide === slides.length - 1 ? 'hidden' : 'next'}`} onClick={() => handleSlide('next')}>next</button>
    </div>
  );
}
export default ImageSlider;
