import React, { Component } from 'react'
import './index.scss'
import Header from './layout/Header'
import Content from './layout/Content'
import InputForm from './module/Form'

class MortgageCalculator extends Component {
  render() {
    return (
      <div className='body-container' >
        <Header />
        <Content>
          <InputForm />
        </Content>
      </div>
    )
  }
}

export default MortgageCalculator
