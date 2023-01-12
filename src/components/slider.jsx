
import React, { useState, useRef } from 'react';
import fitness from '../components/images/fitness.png';
import tennis from '../components/images/tennis.png';
import running from '../components/images/running.png';


const ImageSlider = () => {

  const [sliderGrabbed, setSliderGrabbed] = useState(false);
  const sliderRef = useRef(null);


  const slides = {
    path1: fitness,
    path2: tennis ,
    path3: running,
  };


  const handleMouseDown = () => {
    setSliderGrabbed(true);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setSliderGrabbed(false);
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    setSliderGrabbed(false);
  };

  const handleMouseMove = (e) => {
    if (sliderGrabbed) {
      sliderRef.current.parentElement.scrollLeft -= e.movementX;
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    sliderRef.current.parentElement.scrollLeft += e.deltaY;
  };



  return (
    <div className="slider-wrap">
      <div className="slider" ref={sliderRef} >
        <div className="slider-inner"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}>
          <div className="item">
          <img src={slides['path3']} alt="slide" style={{width: "118px", height: "180px"}} />
          </div>
          <div className="item">
          <img src={slides['path1']} alt="slide" style={{width: "118px", height: "180px"}}/>
          </div>
          <div className="item">
          <img src={slides['path2']} alt="slide" style={{width: "118px", height: "180px"}}/>
          </div>
          <div className="item">
          <img src={slides['path2']} alt="slide"style={{width: "118px", height: "180px"}} />
          </div>
          <div className="item">
          <img src={slides['path1']} alt="slide" style={{width: "118px", height: "180px"}}/>
          </div>

        </div>
      </div>

      </div>
    );
  };

  export default ImageSlider;



// function ImageSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     { path: fitness },
//     { path: tennis },
//     { path: running},
//   ];

//   const handleSlide = (move) => {
//     move === 'prev' ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(currentSlide + 1)
//   }

//   return (
//     <div className="image-slider-container">
//       <div className="image-slider">
//         {slides.map((slide, index) => (
//           <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
//             <img src={slide.path} alt="slide" />
//           </div>
//         ))}
//       </div>
//       <button className={`${currentSlide === 0 ? 'hidden' : 'prev'}`} onClick={() => handleSlide('prev')}>prev</button>
//       <button className={`${currentSlide === slides.length - 1 ? 'hidden' : 'next'}`} onClick={() => handleSlide('next')}>next</button>
//     </div>
//   );
// }
// export default ImageSlider;
