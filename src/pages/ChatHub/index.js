import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import {io} from 'socket.io-client'
import Message from '../../Components/Message'
const URL = 'http://localhost:3001'
const socket = io(URL)



export default function ChatHub() {
  
  function joinRoom(){
    
  }


  return (
    <main className="ChatHub">
         <h1>This is the chathub </h1>
         <Link to="/ChatRoom/:roomID">Join Room</Link>
    </main>
  )
}