import React from 'react';
import { SchoolList } from './SchoolList';

export const CheckStatePay = () => {
    return (
        <div className="check-state-pay">
            <div className="check-state-pay__form">
                <form onSubmit={() => console.log('Buscar')} >
                    <input type="text" name="materia" placeholder="Buscar" />
                </form>
                <span className="btn-filter">
                    <i class="fas fa-filter"></i>
                </span>
            </div>
            <div className="check-state-pay__list">
                <SchoolList />
            </div>
        </div>
    )
}
