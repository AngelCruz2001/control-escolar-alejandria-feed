import React from 'react'

export const ConceptPay = ({ text, icon = false }) => {
    return (
        <div className="btn-payElement">
            <p>
                {text}
            </p>
            {
                icon && <div><i class="fas fa-chevron-circle-right"></i></div>
            }
        </div>
    )
}
