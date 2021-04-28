import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { BackTexture } from "../ui/BackTextureFeed";
import { Input } from "../ui/inputs/Input";
import { PanelJustAdded } from "../ui/panel/PanelJustAdded";
import { Buttons, OpenDropMenuButton } from '../ui/Buttons'
import {
  formsStartCreateScholarship, formsStartCreate,
  formStartUpdate
} from '../../actions/forms'
import { Slider } from "@material-ui/core";
import { useForm } from '../../hooks/useForm';
import { useError } from "../../hooks/useError";
import { usePanel } from '../../hooks/usePanel';
import { types } from '../../types/types';

export const Scholarship = () => {

  const { scholarships, errors, active } = useSelector(state => state.forms)

  useError()

  usePanel(scholarships, "scholarship_name", "id_scholarship", types.formsGetScholarships);

  const updateRange = (e, newValue) => {
    handleInputChange({ target: { name: "percentage", value: newValue } });
  };

  useEffect(() => { active && setValue({ ...active }) }, [active])

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

  const [formValues, handleInputChange, reset, setValue] = useForm({
    matricula: '',
    scholarship_name: '',
    percentage: 0,
    reason: '',
    observations: '',
  });

  const { matricula,
    scholarship_name,
    percentage,
    reason,
    observations } = formValues
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
                    <div className="form__inputs form__column scholar__special">
                      <Input
                        contentClassName="scholar__inputs-id"
                        label="Matricula"
                        valueInput={matricula}
                        nameInput="matricula"
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        nameInput='scholarship_name'
                        contentClassName="scholar__inputs-scholarname"
                        label="Nombre de la beca"
                        valueInput={scholarship_name}
                        nameInput="scholarship_name"
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        nameInput='reason'
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
                          step={1}
                          valueLabelDisplay="auto"
                          marks={marks}
                          value={percentage}
                        />
                      </div>
                      <Input
                        nameInput='observations'
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
        endpoint="scholarships"
        action={active ? formStartUpdate : formsStartCreate}
      />
    </div>
  );
};
