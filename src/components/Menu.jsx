import React, { useState } from 'react';
import company from '../components/images/company.png'
import cart from '../components/images/cart.png';
import hamburger from '../components/images/hamburger.png';
import exit from '../components/images/x.png';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mobile-menu">
        <div className="mobile-menu__header">
          <button style={{padding: "0", border: "none", background: "none"}}  onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={exit} alt="exit icon"  className="mobile-menu__hamburger"/> : <img src={hamburger} alt="hamburger icon" className="mobile-menu__hamburger" /> }
          </button>
          <img src={company} alt="Image" className="mobile-menu__logo" />
          <img src={cart} alt="Image" className="mobile-menu__cart" />
        </div>
      </div>
      {isOpen && (
        <div>
          <p>Pop-up content goes here</p>
        </div>
      )}
    </div>
  );
}

export default Menu;
