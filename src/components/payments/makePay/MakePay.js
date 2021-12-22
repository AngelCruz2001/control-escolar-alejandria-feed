import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Date } from '../../ui/Date'
import { Separator } from '../../ui/Separator'
import { OverConceptPay } from './OverConceptPay'
import { PayCard, PayDeposit } from './PayMethods'
import { ReceiveMoney } from './ReceiveMoney'
import { TotalPay } from './TotalPay'
import { StudentInfo } from './StudentInfo'
import { SubmitPay } from './SubmitPay'
import { ConceptPay } from './conceptPay/ConceptPay'
import { MethodPay } from './methodPay/MethodPay'

export const MakePay = () => {

    const { concept, method, thingToPay, idPayment } = useSelector(state => state.pay)
    // useEffect(() => {
    //     const { concept, method, thingToPay, idPayment } = useSelector(state => state.pay)

    // }, [])
    const { loading } = useSelector(state => state.ui)
    return (
        <div className="make__ ">
            <div className="make__date">
                <Date />
                <Separator />
            </div>

            <div className="make__container">
                <div className={`make__subContainerLeft ${idPayment ? "ui__noTouch" : ""}`}>
                    <StudentInfo />

                    <ConceptPay />

                </div>
                {/* .ui__disabledEffect */}
                <div className={`make__subContainerRight `} >

                    <MethodPay />

                    <Separator />

                    <TotalPay />

                    <Separator />

                    {
                        !thingToPay.name && (concept !== "Inscripción") && concept && <OverConceptPay />
                    }

                    {
                        method && (method !== "Efectivo") ? (method === "Depósito") ? <PayDeposit /> : <PayCard /> : <></>
                    }

                    <ReceiveMoney />

                    <Separator />

                    <SubmitPay />

                </div>

            </div>

        </div>
    )
}

