import React from 'react'
import { Separator } from '../ui/Separator'

export const MakePay = () => {
    return (
        <div className="pay__makePay">
            <div className="pay__date">
                <p href="" className="pay__subtitleSection">Fecha</p>
                <div className="pay__dateData">
                    <p>15 - junio - 2021</p>
                </div>
            </div>

            <div className="pay__forms pay__information">
                <div className="pay__formSection">
                    <p className="pay__titleSection">MATRÍCULA</p>
                    <input className="pay__inputData" type="text" placeholder="0000000000000" />
                    <Separator />
                    <p className="pay__subtitleSection">Información del alumno</p>
                    <div className="pay__studentInformation pay__box">
                        <p className="pay__studentInformationLabel pay__boxData">ALUMNO: HARRY EDWARD STYLES</p>
                        <p className="pay__studentInformationLabel pay__boxData">GRUPO: GRUPO DE EJEMPLO</p>
                        <p className="pay__studentInformationLabel pay__boxData">CAMPUS: CAMPUS DE EJEMPLO</p>
                    </div>
                    <Separator />
                    <p className="pay__titleSection">CONCEPTO DE PAGO</p>
                    <div className="pay__reasonsPay">
                        <label className="pay__reasonPay"> <input type="radio" name="inscripcion" id="" value />Inscripción</label>
                        <label className="pay__reasonPay"> <input type="radio" name="subject" id="" value />Materia</label>
                        <label className="pay__reasonPay"> <input type="radio" name="document" id="" value />Documento</label>
                    </div>
                    <Separator />
                    <p className="pay__subtitleSection">Concepto a pagar</p>
                    <div className="pay__box">
                        <p className="pay__boxData">Inscripción correspondiente</p>
                    </div>
                </div>
                <div className="pay__formSection pay__money">
                    <p className="pay__titleSection">MÉTODO DE PAGO</p>
                    <div className="pay__optionsPay">
                        <label className="pay__optionPay"> <input type="radio" name="inscripcion" id="" value />Efectivo</label>
                        <label className="pay__optionPay"> <input type="radio" name="subject" id="" value />Depósito</label>
                        <label className="pay__optionPay"> <input type="radio" name="document" id="" value />Tarjeta</label>
                    </div>
                    <Separator />
                    <div className="pay__totalPay">
                        <button className="pay__btnTotalPay btn"> Total de pago</button>
                        <span className="pay__quantity">$800</span>
                    </div>
                    <Separator />
                    <label htmlFor="quantityPayment"></label>
                    <input type="text" name="quantityPay" id="quantityPayment" />
                    <label htmlFor="quantityLess"></label>
                    <input type="text" name="quantityLess" id="quantityLess" />
                </div>
            </div>
        </div>
    )
}
