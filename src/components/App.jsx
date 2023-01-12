import React, { Component }  from 'react';

import Accordion from './Accordion';
import ImageSlider from './Slider';
import Menu from './Menu';

const App = () => {

  return (

    <div>
    <Menu />
    <ImageSlider />
    <div class="mobile-menu__accordion">
    <Accordion />
    </div>
  </div>

  );

};

export default App;
