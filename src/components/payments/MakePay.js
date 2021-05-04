import React from "react";
import { Separator } from "../ui/Separator";

export const MakePay = () => {
  return (
    <div className="pay__makePay">
      <div className="pay__date">
        <p href="" className="pay__subtitleSection">
          Fecha
        </p>
        <div className="pay__dateData">
          <p>15 - junio - 2021</p>
        </div>
      </div>
      <div className="pay__forms pay__information">
        <div className="pay__formSection">
          <div className="pay__titleSection">
            <p>MATRÍCULA</p>
            <input
              className="pay__inputData"
              type="text"
              placeholder="0000000000000"
            />
          </div>
          <div className="pay__subtitleSection">
            <p className="pay__subtitleSection-concept">Información del alumno</p>
            <div className="pay__studentInformation pay__box">
              <p className="pay__studentInformationLabel pay__boxData">
                ALUMNO: HARRY EDWARD STYLES
              </p>
              <p className="pay__studentInformationLabel pay__boxData">
                GRUPO: GRUPO DE EJEMPLO
              </p>
              <p className="pay__studentInformationLabel pay__boxData">
                CAMPUS: CAMPUS DE EJEMPLO
              </p>
            </div>
          </div>
          <div className="pay__titleSection pay__concept">
            <p>CONCEPTO DE PAGO</p>
            <div className="pay__reasonsPay">
              <label className="pay__reasonPay">
                {" "}
                <input type="radio" name="inscripcion" id="" value />
                Inscripción
              </label>
              <label className="pay__reasonPay">
                {" "}
                <input type="radio" name="subject" id="" value />
                Materia
              </label>
              <label className="pay__reasonPay">
                {" "}
                <input type="radio" name="document" id="" value />
                Documento
              </label>
            </div>
          </div>
          <div className="pay__subtitleSection">
            <p className="pay__subtitleSection-concept">Concepto a pagar</p>
            <div className="pay__box">
              <p className="pay__boxData">Inscripción correspondiente</p>
            </div>
          </div>
        </div>

        <div className="pay__money">
          <div className="pay__titleSection">
            <p className="pay__titleSection-method">MÉTODO DE PAGO</p>
            <div className="pay__optionsPay">
              <label className="pay__optionPay">
                {" "}
                <input type="radio" name="inscripcion" id="" value />
                Efectivo
              </label>
              <label className="pay__optionPay">
                {" "}
                <input type="radio" name="subject" id="" value />
                Depósito
              </label>
              <label className="pay__optionPay">
                {" "}
                <input type="radio" name="document" id="" value />
                Tarjeta
              </label>
            </div>
            <div className="pay__totalPay">
              <button className="pay__btnTotalPay"> Total de pago</button>
              <div className="pay__quantity">
                <span >$800</span>
              </div>
            </div>
          </div>

          <div className="pay__component">

          </div>
          <button className="pay__btnPagar">Pagar</button>
          {/* <label htmlFor="quantityPayment"></label>
          <input type="text" name="quantityPay" id="quantityPayment" />
          <label htmlFor="quantityLess"></label>
          <input type="text" name="quantityLess" id="quantityLess" /> */}
        </div>
      </div>
    </div>
  );
};
