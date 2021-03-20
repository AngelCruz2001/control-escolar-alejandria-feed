import React from "react";
import { BackTexture } from "../ui/BackTexture";
import { Input } from "../ui/inputs/Input";
import { Select } from "../ui/inputs/Select";
import { PanelJustAdded } from "../ui/panel/PanelJustAdded";
import { Schedule } from "../ui/schedule/Schedule";
import { Date } from "./Date";
import { Buttons, OpenDropMenuButton } from "../ui/Buttons";
import { useForm } from "../../hooks/useForm";

export const Personal = () => {
  const [formValues, handleInputChange, reset] = useForm({
    names: "",
    surnameF: "",
    surnameM: "",
    rfc: "",
    curp: "",
    numCel: "",
    email: "",
    payment: ""
  });

  const {
    names,
    surnameF,
    surnameM,
    rfc,
    curp,
    numCel,
    email,
    payment
  } = formValues;

  return (
    <div className="containerSection form__container">
      <div className="form__inputExtra">
        <OpenDropMenuButton />
      </div>
      <div className="form__container-content">
        <div className="form__container-content-inf">
          <BackTexture />
          <div className=" form_containerSection">
            <form className="form__form" action="">
              <div className="per__personal form_section">
                <p>Información personal</p>
                <div className="overTexture ">
                  <div className="form_inputsContainer">
                    <div className="form__inputs">
                      <Input
                        contentClassName="per__inputs-name"
                        label="Nombre(s)"
                        nameInput="names"
                        valueInput={names}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="per__inputs-father"
                        label="Apellido paterno"
                        nameInput="surnameF"
                        valueInput={surnameF}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="per__inputs-mother"
                        label="Apellido materno"
                        nameInput="surnameM"
                        valueInput={surnameM}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="per__inputs-RFC"
                        label="RFC"
                        nameInput="rfc"
                        valueInput={rfc}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                    <div className="form__inputs form__special">
                      <Input
                        contentClassName="per__inputs-CURP"
                        label="CURP"
                        nameInput="curp"
                        valueInput={curp}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="per__inputs-num1 "
                        label="Numero de teléfono"
                        nameInput="numCel"
                        valueInput={numCel}
                        handleInputChange={handleInputChange}
                      />
                      <Input
                        contentClassName="per__inputs-email"
                        label="Correo Electrónico"
                        placeholder="ejemplo@ejemplo.com"
                        nameInput="email"
                        valueInput={email}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                    <div className="form__inputs form__special">
                      <Select
                        contentClassName="per__inputs-dep"
                        label="Departamento"
                      />
                      <Input
                        contentClassName="per__inputs-pay"
                        label="Pago"
                        placeholder="$0000.00 (Cantidad en letra)"
                        nameInput="payment"
                        valueInput={payment}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                    <Schedule />
                    <div className="form__inputs form__special"></div>
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
