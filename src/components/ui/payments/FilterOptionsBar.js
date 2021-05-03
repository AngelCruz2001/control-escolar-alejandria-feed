import React from "react";

export const FilterOptionsBar = ({ className }) => {
  const filter = [
    "Todos los grupos",
    "Licenciaturas",
    "Licenciatura en derecho",
    "Licenciatura en comunicación",
    "Licenciatura en seguridad pública",
    "Maestrías",
    "Maestría en comunicación",
    "Maestría en innovación educativa",
    "Preparatoria",
    "Estudiantes"
  ];

  const style = {
    "backdrop-filter": "blur(43px)"
  };
  return (
    <div className={`${className}`} style={style}>
      <div className="pay__search-nav-container">
        <p>HOlalalalalalalalal</p>
      </div>
    </div>
  );
};
