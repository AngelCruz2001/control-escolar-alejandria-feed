import React, { useState } from "react";
import { BackTexture } from "../ui/BackTexture";
import { Input } from "../ui/inputs/Input";
import { PanelJustAdded } from "../ui/panel/PanelJustAdded";
import { Slider } from "@material-ui/core";

export const Scholarship = () => {
  const [val, setVal] = useState(0);
  const updateRange = ({ e, data }) => {
    setVal(val);
    console.log(val);
  };

  const marks = [
    {
      value: 0,
      label: "0%"
    },
    {
      value: 100,
      label: "100%"
    }
  ];

  return (
    <div className="containerSection form__container">
      <div className="form__container-content scholar__container-content">
        <div className="form__container-content-inf scholar__container-content-inf">
          <BackTexture />
          <div className="form_containerSection scholar__containerSection">
            <form className="form__form" action="">
              <div className="scholar__personal form_section">
                <div className="overTexture scholar__texture">
                  <div className="form_inputsContainer">
                    <div className="form__inputs form__column  scholar__special">
                      <Input
                        contentClassName="scholar__inputs-id"
                        label="Maricula"
                      />
                      <Input
                        contentClassName="scholar__inputs-student"
                        label="Becario"
                      />
                      <Input
                        contentClassName="scholar__inputs-scholarname"
                        label="Nombre de la beca"
                      />
                      <Input
                        contentClassName="scholar__inputs-about"
                        label="Razón de beca"
                      />

                      <div className="slider" >
                        <label>Porcentaje de beca</label>
                        <Slider
                          className="slider__bar"
                          onChange={updateRange}
                          defaultValue={60}
                          step={1}
                          valueLabelDisplay="auto"
                          marks={marks}
                        />
                      </div>
                      <Input
                        contentClassName="scholar__inputs-observation"
                        inputClassName="scholar__inputs-observationIn"
                        label="Observaciones"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <PanelJustAdded />
      </div>
    </div>
  );
};
