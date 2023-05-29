import React from 'react'
import "./style.css"
export default function Message(props) {



  return (
    <div className="Message">
        <p>{props.messageText}</p>
    </div>
  )
}