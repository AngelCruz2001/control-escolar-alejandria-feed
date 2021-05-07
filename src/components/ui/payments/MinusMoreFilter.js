import React from "react";

export const MinusMoreFilter = ({marginT =""}) => {
  return (
    <div className={`pay__minusMore ${marginT}`}>
      <button className="btn">Mayor contidad</button>
      <button className="btn">Menor cantidad</button>
      <button className="btn">Borrar filtro</button>
    </div>
  );
};
