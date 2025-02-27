import React, { useState } from "react";
import uparrow from "../assets/uparrow.png";
import downarrow from "../assets/downarrow.png";

export const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="w-150 p-4 m-auto">
      <div
        className=" flex p-2 border"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {title}{" "}
        <span>
          <img src={isOpen == true ? downarrow : uparrow } className="w-4 h-4 mx-5" />{" "}
        </span>
      </div>
      <div className="p-2">{isOpen && body} </div>
    </div>
  );
};
