import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { Date } from '../../ui/Date'
import { Separator } from '../../ui/Separator'
import { Matricula } from '../Matricula'
import { ConceptPay } from './ConceptPay'
import { PayCard, PayDeposit } from './PayMethods'

export const MakePay = () => {
    return (
        <div className="make__ ui_fadeI">
            <div className="make__date">
                <Date />
            </div>

            <div className="make__container">
                <div className="make__subContainerLeft">
                    <form action="" onSubmit={() => console.log('Buscar')}>
                        <div className="make__containerInput">
                            <label className="make__titleSection" htmlFor="matricula">MATRÍCULA</label>
                            <input id="matricula" value="0000000000000" />
                        </div>
                    </form>
                    <Separator />
                    <div className="make__studentInformation">
                        <p className="make__subTitleSection">Información del alumno</p>
                        <div className="data">
                            <p>Alumno: HARRY EDWARD STYLES</p>
                            <p>Grupo: Sabados mañana</p>
                            <p>Campus: Durango</p>
                        </div>
                    </div>
                    <Separator />

                    <div className="make__conceptPay">
                        <div>
                            <p className="make__titleSection">CONCEPTO DE PAGO</p>
                            <div className="btn-payContainer">
                                <ConceptPay text="Inscripción" icon={true} />
                                <ConceptPay text="Materia" icon={true} />
                                <ConceptPay text="Documentos" icon={true} />
                            </div>
                        </div>
                        <Separator />

                        <div className="make__conceptPay-data">
                            <p className="make__subTitleSection">Materia a pagar</p>
                            <input value="Inscripción correspondiente" />
                        </div>
                        <Separator />

                    </div>

                </div>

                <div className="make__subContainerRight">

                    <div className="make__payMethod">
                        <p className="make__titleSection">METODO DE PAGO</p>

                        <div className="btn-payContainer">
                            <NavLink className="btn-payElement" to="/pagos/pagar/efectivo" activeClassName="selected">
                                Efectivo
                            </NavLink>
                            <NavLink className="btn-payElement" to="/pagos/pagar/depósito" activeClassName="selected">
                                Depósito
                            </NavLink>
                            <NavLink className="btn-payElement" to="/pagos/pagar/tarjeta" activeClassName="selected">
                                Tarjeta
                            </NavLink>
                        </div>

                    </div>
                    <Separator />

                    <div className="make__total">
                        <button className="make__total-pay">Total de pago</button>
                        <span className="make__total-quantity">800</span>
                    </div>
                    <Separator />

                    <>
                        <Switch >
                            <Route exact path="/pagos/pagar/efectivo" component={null} />
                            <Route exact path="/pagos/pagar/depósito" component={PayDeposit} />
                            <Route exact path="/pagos/pagar/tarjeta" component={PayCard} />
                        </Switch>

                    </>

                    <form className="make__formMoney">
                        <div className="make__containerInput">
                            <label className="make__titleSection" htmlFor="">CANTIDAD</label>
                            <input type="text" placeholder="Existimoooos" className="make__money" />
                        </div>
                        <div className="make__containerInput">
                            <label className="make__titleSection" htmlFor="">RESTANTE</label>
                            <input type="text" placeholder="Existimoooos" className="make__money" />
                        </div>
                    </form>
                    <Separator />

                    <div className="make__submit">
                        <button className="make__submit-button">Pagar</button>
                    </div>

                </div>



            </div>
        </div>
    )
}
