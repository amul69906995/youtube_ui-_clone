import React from 'react'
import '../css/buttonList.css'
import Button from './Button';
const ButtonList = () => {
  //give name 
  const buttonList = ["Mixes", "news", "javascript", "gaming", "python", "live", "korean dramas" ,"algogithm", "chinese telivision drama","button1","button2","button3"];

  return (
    <div className="button_list_container">
       <div className='button_list'>
       {buttonList.map((button,idx)=><Button key={idx} buttonName={button}/>)}
    </div>
    </div>
   
  )
}

export default ButtonList
