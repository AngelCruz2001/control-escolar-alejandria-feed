import React, { useState } from "react";
import { BackTexture } from "../ui/BackTexture";
import { Input } from "../ui/inputs/Input";
import { PanelJustAdded } from "../ui/panel/PanelJustAdded";
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import { formsStartCreateScholarship } from '../../actions/forms'
import { Slider } from "@material-ui/core";
import { useForm } from '../../hooks/useForm';

export const Scholarship = () => {
  // guardar valor del slider en form values

  // Hay que correr a Johan
  //jajajajaja ¿quien puso esa nota? 
//fuiste tu, verdadd??:?????
//jAJAJAJA OKAY. 

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

  const [formValues, handleInputChange, reset] = useForm({
    id_student: 'STRING',
    scholarship_name: 'STRING',
    percentage: 'FLOAT',
    reason: 'STRING',
    observations: 'STRING',
  }); 

  const {id_student, scholarship_name, percentage, reason, observations} = formValues
  return (
    <div className="containerSection form__container">
      <div className="form__inputExtra">
                <OpenDropMenuButton />
            </div>
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
                        nameInput = 'id_student'
                        contentClassName="scholar__inputs-id"
                        label="Maricula"
                        valueInput={id_student}
                        nameInput="id_student"
                        handleInputChange={handleInputChange}
                      />
                      
                      <Input
                        nameInput = 'scholarship_name'
                        contentClassName="scholar__inputs-scholarname"
                        label="Nombre de la beca"
                        valueInput={scholarship_name}
                        nameInput="scholarship_name"
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        nameInput = 'reason'
                        contentClassName="scholar__inputs-about"
                        label="Razón de beca"
                        valueInput={reason}
                        nameInput="reason"
                        handleInputChange={handleInputChange}
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
                          valueInput={percentage}
                          nameInput="percentage"
                          handleInputChange={handleInputChange}
                        />
                      </div>
                      <Input
                        nameInput = 'observations'
                        contentClassName="scholar__inputs-observation"
                        inputClassName="scholar__inputs-observationIn"
                        label="Observaciones"
                        valueInput={observations}
                        nameInput="observations"
                        handleInputChange={handleInputChange}
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
      <Buttons
                formValues={formValues}
                reset={reset}
                action={formsStartCreateScholarship}
            />
    </div>
  );
};
