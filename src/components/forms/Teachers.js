import React from "react";
import { BackTexture } from "../ui/BackTexture";
import { Input } from "../ui/inputs/Input";
import { PanelJustAdded } from "../ui/panel/PanelJustAdded";
import { Select } from "../ui/inputs/Select";
import { Buttons, OpenDropMenuButton } from "../ui/Buttons";
import { useForm } from "../../hooks/useForm";

export const Teachers = () => {
  const [formValues, handleInputChange, reset] = useForm({
    names: "",
    surnameF: "",
    surnameM: "",
    rfc: "",
    curp: "",
    numCel: "",
    email: ""
  });

  const { names, surnameF, surnameM, rfc, curp, numCel, email } = formValues;

  return (
    <div className="containerSection form__container">
      <div className="form__inputExtra">
        <OpenDropMenuButton />
      </div>
      <div className="form__container-content">
        <div className="form__container-content-inf">
          <BackTexture />
          <div className="form_containerSection">
            <form className="form__form" action="">
              <div className="tea__personal form_section">
                <p>Información personal</p>
                <div className="overTexture ">
                  <div className="form_inputsContainer">
                    <div className="form__inputs">
                      <Input
                        contentClassName="tea__inputs-name"
                        label="Nombre(s)"
                        nameInput="names"
                        valueInput={names}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="tea__inputs-father"
                        label="Apellido paterno"
                        nameInput="surnameF"
                        valueInput={surnameF}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="tea__inputs-mother"
                        label="Apellido materno"
                        nameInput="surnameM"
                        valueInput={surnameM}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="tea__inputs-RFC"
                        label="RFC"
                        nameInput="rfc"
                        valueInput={rfc}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                    <div className="form__inputs form__special">
                      <Input
                        contentClassName="tea__inputs-CURP"
                        label="CURP"
                        nameInput="curp"
                        valueInput={curp}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="tea__inputs-num1"
                        label="Numero de télefono"
                        nameInput="numCel"
                        valueInput={numCel}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="tea__inputs-email"
                        label="Correo electrónico"
                        placeholder="ejemplo@ejemplo.com"
                        nameInput="email"
                        valueInput={email}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tea__scholar form_section">
                <p>Información escolar</p>
                <div className="overTexture ">
                  <div className="form_inputsContainer">
                    <div className="form__inputs form__special">
                      <Select
                        contentClassName="tea__inputs-campus"
                        label="Campus"
                      />
                      <Select
                        contentClassName="tea__inputs-subImp"
                        label="Materias que puede impartir"
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
      <Buttons />
    </div>
  );
};
