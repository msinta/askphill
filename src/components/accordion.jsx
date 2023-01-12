import React, { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "Daily", content: [{ item: "Running Socks", qty: 25},{item: "Check", qty: 25}, {item: "data.3", qty: 25}]},
    { title: "Sports", content: [{ item: "Running Socks"},{item: "Check"}, {item: "data.3"}]},
    { title: "Travel", content: [{ item: "Running Socks"},{item: "Check"}, {item: "data.3"}]},
    { title: "Medical", content: [{ item: "Running Socks"},{item: "Check"}, {item: "data.3"}]},
    { title: "More", content: [{ item: "Running Socks"},{item: "Check"}, {item: "data.3"}]}
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
            <br/>
          </button>
          {activeIndex === index && item.content.map((list, index) => (
          <div>{list.item}{list.qty}</div>))}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
