import React from 'react'
import { Link } from 'react-router-dom'

export const CircleOptionFeed = ({ name, icon, path }) => {
    return (
        <div className="feed__options-opt">

            <Link to={`capturacion${path}`} >
                <div className="feed__options-opt-container btn">
                    <i className={`${icon} feed__options-opt-container-icon `}></i>
                </div>
                <p className="feed__options-opt-text btn">{name}</p>
            </Link>
        </div>
    )
}
