import React, { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "DAILY", content: [{ item: "RUNNING SHOES", qty: "25 products"},{item: "SPORT SHOES", qty: "25 products"}, {item: "HIKING SHOES", qty: "25 products"}]},
    { title: "SPORTS", content: [{ item: "SPORT SOCKS", qty: "25 products"},{item: "RUNNING SOCKS", qty: "25 products"}, {item: "SKI SOCKS", qty: "25 products"},{item: "FLIGHT SOCKS", qty: "25 products"}, {item: "HIKING SOCKS", qty: "25 products"}, {item: "WORK SOCKS", qty: "25 products"}]},
    { title: "TRAVEL", content: [{ item: "BELT", qty: "25 products"},{item: "BRIEFCASE", qty: "25 products"}]},
    { title: "MEDICAL", content: [{ item: "SAFETY MASK", qty: "25 products"},{item: "NEEDLE", qty: "25 products"}, {item: "GLASSES", qty: "25 products"}]},
    { title: "MORE", content: [{ item: "HATS", qty: "25 products"},{item: "COATS", qty: "25 products"}, {item: "SHORTS", qty: "25 products"}]}
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
        <div style={{border: "1px solid #ECECEB"}} key={index}>
          <button onClick={() => handleAccordionClick(index)}>
            {item.title}
            {activeIndex === index && <i class="fa fa-chevron-up" aria-hidden="true"></i>}
            {activeIndex !== index && <i class="fa fa-chevron-down" aria-hidden="true"></i>}
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
