import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "Daily", content: [{ item: "Running Socks", qty: "25 products"},{item: "Check", qty: "25 products"}, {item: "data.3", qty: "25 products"}]},
    { title: "Sports", content: [{ item: "Sport Socks", qty: "25 products"},{item: "Running Socks", qty: "25 products"}, {item: "Ski Socks", qty: "25 products"},{item: "Flight Socks", qty: "25 products"}, {item: "Hiking Socks", qty: "25 products"}, {item: "Work Socks", qty: "25 products"}]},
    { title: "Travel", content: [{ item: "Running Socks", qty: "25 products"},{item: "Check", qty: "25 products"}, {item: "data.3", qty: "25 products"}]},
    { title: "Medical", content: [{ item: "Running Socks", qty: "25 products"},{item: "Check", qty: "25 products"}, {item: "data.3", qty: "25 products"}]},
    { title: "More", content: [{ item: "Running Socks", qty: "25 products"},{item: "Check", qty: "25 products"}, {item: "data.3", qty: "25 products"}]}
  ]

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleAccordionClick(index)}>
            {item.title}
            {activeIndex === index && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>}
            {activeIndex !== index && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>}
          </button>

          {activeIndex === index && item.content.map((list, index) => (
          <div className="list-product">{list.item}
          <div className="product-qty">{list.qty}</div> </div>))}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
