import React from 'react'

export const SchoolList = () => {
    return (
        <>
            <div className="check-state-pay__list__headers school-list">
                <p>Todos los grupos</p>
                <p>Total</p>
                <p>Total Pagado</p>
                <p>Total Adeudo</p>
            </div>
            <div className="check-state-pay__list__container">
                <div className="check-state-pay__list__container__item school-list">
                    <p>Carrera, preparatoria o maestría - grupo de ejemplo</p>
                    <p className="total">$0000.00</p>
                    <p className="paid">$0000.00</p>
                    <p className="pending">$0000.00</p>
                    <span><i class="fas fa-eye"></i></span>
                </div>
            </div>
            
        </>
    )
}
