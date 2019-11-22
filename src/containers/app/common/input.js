import React from 'react'
import './index.scss'

const InputField = ({ label, styles }) => {
  return (
    <div className={`input-field ${styles}`} >
      <label>{label}</label>
      <input />
    </div>
  )
}

export default InputField