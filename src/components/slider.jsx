import React, { useState } from 'react';
import fitness from '../components/images/fitness.png';
import tennis from '../components/images/tennis.png';
import running from '../components/images/running.png';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const url1 = fitness;
  const url2 = tennis;
  const url3 = running;
  const slides = [
    { path: url1 },
    { path: url2 },
    { path: url3},
  ];
  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  }

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="image-slider-container">
      <div className="mobile-menu__slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
            <img src={slide.path} alt="slide" />
          </div>
        ))}
      </div>
      <button className={currentSlide === 0 ? 'hidden' : ''} onClick={handlePrevSlide}>prev</button>
      <button className={currentSlide === slides.length - 1 ? 'hidden' : ''} onClick={handleNextSlide}>next</button>
    </div>
  );
}
export default ImageSlider;
