import React from "react";

export const FilterOptionsBar = ({ className }) => {
  return (
    <div className={`${className}`} style={{ backdropFilter: "blur(19px)" }}>
      <div className="pay__search-nav-container">
        <ul className="pay__search-nav-container-item">
          {[
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
          ].map((item, i) => (
            <li key={i}>
              <input type="radio" name="" id={i} value />
              <label htmlFor={i}>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
