import React, { Component } from 'react'
import './index.scss'
import InputField from '../common/input'
import RadioButton from '../common/radioButton'

class InputForm extends Component {
  render() {
    return (
      <div className='calculator-container'>
        <div className='head-content'>
          <div className='icon'>
          </div>
          <div className='details'>
            <h2 className='title'>
              Monthly Payment Calculator
            </h2>
            <p className='sub'>
              Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful. They are capable of influencing
            </p>
          </div>
        </div>
        <div className='input-content'>
          <InputField
            label="Property Price :"
            styles="column space-right"
          />
          <InputField
            label="Loan Amount :"
            styles="column space-right"
          />
          <div className='item'>
            <label>Tenure:</label>
            <div className='content'>
              <RadioButton
                name="tenure"
                iD="t-5"
                label="5"
              />
              <RadioButton
                name="tenure"
                iD="t-10"
                label="10"
              />
              <RadioButton
                name="tenure"
                iD="t-15"
                label="15"
              />
              <RadioButton
                name="tenure"
                iD="t-20"
                label="20"
              />
              <RadioButton
                name="tenure"
                iD="t-25"
                label="25"
              />
            </div>
          </div>
          <div className='ui button -orange -outline'>Recalculate</div>
        </div>
      </div>
    )
  }
}

export default InputForm