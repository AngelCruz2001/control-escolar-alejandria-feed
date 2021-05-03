import React from "react";

export const Bars = ({className =""}) => {


  return (
    
    <button className={`pay__table-owe-icons ${className}`}>
      
      <i className="fas fa-bars"></i>
      <i className="fas fa-chevron-down pay__table-owe-icons-down"></i>
    </button>
    
  );
};
