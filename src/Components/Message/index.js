import React from 'react'
import './style.css';
export default function Message(props) {
  
  return (
    <div className='container'>
    <div className="Message " style={{margin: "20px"}}>
        <p>{props.sender}: <span>{props.message}</span></p>
    </div>
    </div>
  )
}