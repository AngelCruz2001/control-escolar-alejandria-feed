import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackTexturePayments } from '../ui/BackTexturePayments'
import { ChangedPayment } from './ChangedPayment'
import { CheckPayment } from './CheckPayment'
import { Deposit } from './Deposit'
import { MakePay } from './MakePay'

export const PaymentsScreen = () => {
    return (
        <div className="containerPayments">
            <div className="payment__sectionsChanged">
                <ChangedPayment />
            </div>
            <div className="overTexturePayments">
                <MakePay />
                {/* <CheckPayment/> */}
                {/* <Deposit /> */}
            </div>
            <BackTexturePayments />
        </div>
    )
}
