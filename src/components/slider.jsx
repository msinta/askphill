import React, { useState, useRef } from 'react';
import fitness from './images/fitness.png';
import tennis from './images/tennis.png';
import running from './images/running.png';

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.classList.add('active');
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.7;
    sliderRef.current.scrollLeft = scrollLeft - walk;

  };

  return (
    <div className="slider-wrap">
      <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} >
        <div className="slider-inner">
        <img className="item" src={running} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={tennis} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={fitness} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={running} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={tennis} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={fitness} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={running} alt="slide" style={{ width: '118px', height: '180px' }} />
          <img className="item" src={tennis} alt="slide" style={{ width: '118px', height: '180px' }} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
