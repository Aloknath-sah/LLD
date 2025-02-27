import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";

const data = [
  {
    title: "item1",
    body: "lorem ipsum sdkjbhjsdcjbgdcadbcjkadbck",
  },
  {
    title: "item2",
    body: "lorem ipsum sdkjbhjsdcjbgdcadbcjkadbck",
  },
  {
    title: "item3",
    body: "lorem ipsum sdkjbhjsdcjbgdcadbcjkadbck",
  },
];

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState([0,1]);

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={openIndex === index}
          setIsOpen={() => (openIndex === index)? setOpenIndex(null) : setOpenIndex(index)}
        />
      ))}
    </div>
  );
};
