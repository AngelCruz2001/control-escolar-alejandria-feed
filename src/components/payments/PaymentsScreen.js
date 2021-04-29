import React from 'react'
import { BackTexturePayments } from '../ui/BackTexturePayments'
import { ChangedPayment } from './ChangedPayment'
import { MakePay } from './MakePay'

export const PaymentsScreen = () => {
    return (
        <div className="containerPayments">
            <div className="payment__sectionsChanged">
                <ChangedPayment />
            </div>
            <div className="overTexturePayments">
                <MakePay />
            </div>
            <BackTexturePayments />
        </div>
    )
}
