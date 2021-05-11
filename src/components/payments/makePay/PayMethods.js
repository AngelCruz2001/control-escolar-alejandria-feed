import React from 'react'
import { Separator } from '../../ui/Separator'

export const PayCard = () => {
    return (
        <div>
            <h1>Card payment</h1>
            <Separator />

        </div>
    )
}

export const PayDeposit = () => {
    return (
        <div className="make__account">
            <select name="account" id="">
                <option value="0" selected>Cuenta 1</option>
                <option value="1" >Cuenta 2</option>
                <option value="2" >Cuenta 3</option>
                <option value="3" >Cuenta 4</option>
                <option value="4" >Cuenta 5</option>
            </select>
            <Separator />

        </div>
    )
}