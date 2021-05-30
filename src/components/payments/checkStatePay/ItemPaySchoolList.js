import React from 'react'

export const ItemPaySchoolList = ({ payment }) => {
    const { name_group, major_name, money_exp, money, missing } = payment;
    return (
        <div className="check-state-pay__list__container__item school-list" >
            <p className="general">{name_group}</p>
            <p className="total">${money_exp}.00</p>
            <p className="paid">${money}.00</p>
            <p className="pending">${missing}.00</p>
            <span><i className="fas fa-eye"></i></span>
        </div>
    )
}
