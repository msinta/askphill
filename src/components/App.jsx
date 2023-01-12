import React, { Component }  from 'react';

import Accordion from './Accordion';
import ImageSlider from './Slider';

const App = () => {

  return (

    <div>
    <ImageSlider />
    <div class="mobile-menu__accordion">
    <Accordion />
    </div>
  </div>

  );

};

export default App;
