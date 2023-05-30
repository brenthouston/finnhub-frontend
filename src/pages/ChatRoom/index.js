import React, {useState,useEffect} from 'react'
import "./style.css"
import {io} from 'socket.io-client'
import Message from '../../Components/Message'
const URL = 'http://localhost:3001'
const socket = io(URL)



export default function ChatRoom() {
  
  const [sentMessage, setSentMessage] = useState('')
  const [messageList, setMessageList] = useState([])
  console.log(socket.id)

useEffect(() => {
  socket.emit('joinRoom',window.location.pathname.split('/')[2], 'user')
  
  socket.on('chat-message',data =>{
    console.log(data)
    addMessage(data)
  })
  
  socket.on('joined-room',data =>{
    console.log(data)
  })
  socket.on('update-message-history',data =>{
    console.log(data)
    // const newMessage = [...messageList, data]
    setMessageList(data)
  })
},[]);

function addMessage(newMessage ) {
  const newMessageArray = [...messageList, newMessage]
  setMessageList(newMessageArray)
  
}


  
  function handleChange(e){
    if (e.target.name === 'msg'){
      setSentMessage(e.target.value)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    socket.emit('send-chat-message','room1',sentMessage,'user')
    setSentMessage('')
  }

  return (
    <main className="ChatRoom">
         <h1>This is a chat room!</h1>
         {messageList.map((msg, i ) =>{
          return <Message key = {i} sender = {msg.sender} message = {msg.message}/> 
         })}
         <form onSubmit = {handleSubmit}> 
         <input name="msg"  onChange={handleChange} value={sentMessage} placeholder='enter in a message'/>
         <button>send message</button> 
         </form>
        
    </main>
  )
}