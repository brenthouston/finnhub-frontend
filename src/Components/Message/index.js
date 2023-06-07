import React from 'react'
import './style.css';
export default function Message(props) {
  
  return (
    <div className='container'>
    <div className="Message " style={{margin: "20px"}}>
        <p style={{background: "var(--primary)", height: "2rem",color:"var(--cardGrn)",borderRadius:"5px", display: 'flex', alignItems: "center", shadowColor: "var(--bgGrn)", shadowRadius:"20px"}} >{props.sender}: {props.message}</p>
    </div>
    </div>
  )
}