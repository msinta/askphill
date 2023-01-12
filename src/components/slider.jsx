import React, { useState } from 'react';
import fitness from './images/fitness.png';
import tennis from './images/tennis.png';
import running from './images/running.png';

const ImageSlider = () => {
  const [isGrabbed, setIsGrabbed] = useState(false);
  const sliderRef = React.useRef(null);

  const handleMouseDown = () => {
    setIsGrabbed(true);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsGrabbed(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    setIsGrabbed(false);
  };

  const handleMouseMove = (e) => {
    if (isGrabbed) {
      sliderRef.current.parentElement.scrollLeft -= e.movementX;
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.parentElement.scrollLeft += e.deltaY;
  };

  return (
    <div className="slider-wrap">
      <div className="slider" ref={sliderRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} onWheel={handleWheel}>
        <div className="slider-inner">
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
