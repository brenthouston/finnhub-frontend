import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import {io} from 'socket.io-client'
// const URL = 'http://localhost:3001'
// const socket = io(URL)

export default function ChatHub(props) {
  const socket = props.useSocket
  const [roomList, setRoomList] = useState(['calls', 'puts','options'])
  const [roomName, setRoomName] = useState('')
  
  useEffect(() => {
    socket.on('update-room-list', data =>{
      console.log('came from the server socket',data)
      setRoomList((state) => [...state,data] )
    })
    
    socket.on('populate-rooms',data=>{
      setRoomList(data)
      
    })
    

  },[]);
  

  function handleChange(e){
    if (e.target.name === 'createRoom'){
      setRoomName(e.target.value)
    }
  }
  function handleSubmit(e){
    e.preventDefault()
    // const addNewRoom = [...roomList, roomName]
    // setRoomList(addNewRoom)
    if(roomName != ''){
      const newRoom = roomName.split(' ').join('-')
      console.log(newRoom)
      socket.emit('create-new-room',newRoom)
      setRoomName('')
    }else{
      alert('please enter a room name')
    }
  }

  return (
    <main className="ChatHub">
        
         <h1>This is the chathub </h1>
         <form onSubmit={handleSubmit}> 
         <input name="createRoom"  onChange = {handleChange} value={roomName} placeholder='enter in a room'/>
         <button>create room</button> 
         </form>
         {roomList.map((room, i ) =>{
          return  <Link key = {i} name = {room} to={'/chatroom/'+room}>{'join ' + room}</Link>
         })}
    </main>
  )
}