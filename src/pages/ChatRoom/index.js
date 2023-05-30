import React, {useState,useEffect} from 'react'
import "./style.css"
import {io} from 'socket.io-client'
import Message from '../../Components/Message'
const URL = 'http://localhost:3001'
const socket = io(URL)



export default function ChatRoom() {
  
  const [sentMessage, setSentMessage] = useState('')
  const [messageList, setMessageList] = useState([])


  useEffect(() => {
    socket.on('chat-message',data =>{
      console.log(data)
      const newMessage = [...messageList, data]
      console.log('new message', newMessage)
      setMessageList(newMessage)
      console.log('message list',messageList)
  })
  
  }, [messageList]);


  function handleChange(e){
    if (e.target.name === 'msg'){
      setSentMessage(e.target.value)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    socket.emit('send-chat-message','room1',sentMessage)
    setSentMessage('')
  }

  return (
    <main className="ChatRoom">
         <h1>This is a chat room!</h1>
         {messageList.map((msg, i ) =>{
          return <Message key = {i} messageText = {msg}/> 
         })}
         <form onSubmit = {handleSubmit}> 
         <input name="msg"  onChange={handleChange} value={sentMessage} placeholder='enter in a message'/>
         <button>send message</button> 
         </form>
        
    </main>
  )
}