import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { payStartGetAllPayments } from '../../../actions/pay';
import { svgs } from '../../../helpers/resources'
import { types } from '../../../types/types';
import { ItemPaySchoolList } from './ItemPaySchoolList'

export const SchoolList = () => {
    const { payments } = useSelector(state => state.pay)
    const { loading } = useSelector(state => state.ui)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(payStartGetAllPayments())
    }, [])

    return (
        <>
            <div className="check-state-pay__list__headers school-list" >
                <div>
                    <p>Todos los grupos</p>
                </div>
                <div>
                    <p>Total</p>
                </div>
                <div>
                    <p>Total<br /> Pagado</p>
                    <img src={svgs.filterLines} alt="" />
                </div>
                <div>
                    <p>Total<br /> Adeudo</p>
                    <img src={svgs.filterLines} alt="" />
                </div>
                <div>


                </div>
            </div >
            <div className="check-state-pay__list__container">
                {payments.map((payment) => (
                    <ItemPaySchoolList key={payment.id_group} payment={payment} />
                ))}

            </div>

        </>
    )
}
