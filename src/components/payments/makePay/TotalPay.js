import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { payStartGetPrice } from "../../../actions/pay";

export const TotalPay = () => {

  const { method, totalPayMoney, idPayment } = useSelector(state => state.pay);
  const dispatch = useDispatch()
  const handleClickTotal = () => {
    console.log("idPayment", idPayment)
    !idPayment && dispatch(payStartGetPrice());
  }

  return (
    <div className="make__total btn-blue">
      <button className={`make__total-pay btn-blue getPay ${!method && 'ui__disabledEffect totalPay'}`} onClick={handleClickTotal}>Total de pago</button>
      <span className="make__total-quantity">{totalPayMoney}</span>
    </div>
  );
}