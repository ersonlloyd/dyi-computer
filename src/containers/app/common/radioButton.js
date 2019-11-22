import React from 'react'
import './index.scss'

const RadioButton = ({ label, styles, name, iD }) => {
    return (
        <div className={`radio-button ${styles}`} >
            <input type='radio' name={name} id={iD} />
            <label for={iD}>{label}</label>
        </div>
    )
}

export default RadioButton
