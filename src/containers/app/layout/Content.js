import React from "react"

const Content = props => {
  console.log(props)
  return (
    <div className='content-body'>
      <div className='banner-container'>
        <div className='banner'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Content