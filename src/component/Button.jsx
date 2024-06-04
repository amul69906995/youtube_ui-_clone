import React from 'react'
import '../css/button.css'
const Button = ({buttonName}) => {
  return (
    <button className='button' style={{backgroundColor:'#b9b8b880',minWidth:'fit-content'}}>
      {buttonName}
    </button>
  )
}

export default Button
