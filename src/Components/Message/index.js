import React from 'react'
import './style.css';
export default function Message(props) {
  
  return (
    <div className="Message">
        <p style={{background: "var(--cardGrn)", height: "2rem", display:"inline-block", padding:"8px"}} >{props.sender}: {props.message}</p>
    </div>
  )
}