import React, { useState } from 'react';
import company from './images/company.png';
import cart from './images/cart.png';
import hamburger from './images/hamburger.png';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mobile-menu">
        <div className="mobile-menu__header">
          <button style={{padding: "0",border: "none", background: "none"}} onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} alt="Hamburger icon" className="mobile-menu__hamburger" />
          </button>
          <img src={company} alt="Image" className="mobile-menu__logo" />
          <img src={cart} alt="Image" className="mobile-menu__cart" />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <p>Dropdown menu content goes here</p>
        </div>
      )}
    </div>
  );
}
export default Menu;
