import React from 'react'
export default function Message(props) {



  return (
    <div className="Message">
        <p>{props.messageText}</p>
    </div>
  )
}