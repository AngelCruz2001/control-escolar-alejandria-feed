import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paySetAmountToPay } from '../actions/pay';
import { numberToText } from '../helpers/numberToText';
/*
    Notas: escoger el nombre
    Opciones:
        - EL IMPOSIBLE
        - El 4 dias de estres y contando...
        - El 4 DEC(dias de estres y contando)...
*/
// export const inputNumberText = (e, setamountToPay, setShowInput, amountToPay, totalPayMoney) => {
export const useInputAmount = (setShowInput) => {
    const dispatch = useDispatch();
    const { amountToPay, totalPayMoney } = useSelector(state => state.pay);

    const handleInputChange = (e) => {
        if (parseInt(e.key) >= 0) {
            let newNumber = String(amountToPay).concat(e.key);
            newNumber = (parseInt(newNumber) > totalPayMoney) ? totalPayMoney.toString() : newNumber;
            dispatch(paySetAmountToPay(newNumber))
            setShowInput(`$${newNumber}.00 (${newNumber === '1' ? 'un peso' : `${numberToText(newNumber)} pesos`})`)
        } else if (e.key === "Backspace") {
            const deleteNumber = String(amountToPay).slice(0, -1)
            dispatch(paySetAmountToPay(deleteNumber))//error del mago 
            setShowInput(deleteNumber.length > 0 ? `$${deleteNumber}.00 ${numberToText(deleteNumber)}` : "$")
        }
    }

    return [handleInputChange];

}

// if (parseInt(e.key) >= 0) {
//     let newNumber = amountToPay.concat(e.key);
//     newNumber = (parseInt(newNumber) > totalPayMoney) ? totalPayMoney.toString() : newNumber;
//     setamountToPay(newNumber)
//     console.log(newNumber)
//     setShowInput(`$${newNumber}.00 (${newNumber === '1' ? 'un peso' : `${numberToText(newNumber)} pesos`})`)
// } else if (e.key === "Backspace") {
//     const deleteNumber = amountToPay.slice(0, -1)
//     setamountToPay(deleteNumber)
//     setShowInput(deleteNumber.length > 0 ? `$${deleteNumber}.00 ${numberToText(deleteNumber)}` : "$")
// }