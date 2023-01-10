import React, { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: "Daily", content: [ "Sport Socks", "Check", "data.3"]},
    { title: "Sports", content: "content 2"},
    { title: "Travel", content: "content 2"},
    { title: "Medical", content: "content 2"},
    { title: "More", content: "content 2"}
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
          </button>
          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
