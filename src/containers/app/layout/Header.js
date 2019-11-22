import React from "react"
import './index.scss'


const Header = () => {
  return (
    <div className='ui container header-menu'>
      <div className='ui secondary menu'>
        <div className='item'>
          <img src="https://omh.sg/themes/omh/assets/images/logo-with-tagline.svg" alt='' className='logo' />
        </div>
        <div className='right menu'>
          <div className='item'>
            Home
          </div>
          <div className='item'>
            Services
            <i className='dropdown icon'></i>
          </div>
          <div className='item'>
            Guides
            <i className='dropdown icon'></i>
          </div>
          <div className='item'>
            Blog
          </div>
          <div className='item'>
            Profile
            <i className='dropdown icon'></i>
          </div>
          <div className='horizontal-divider'></div>
          <div className='item'>
            <div className='ui button -orange'>
              6886 90009
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
