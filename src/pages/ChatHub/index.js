import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import {io} from 'socket.io-client'
const URL = 'http://localhost:3001'
const socket = io(URL)



export default function ChatHub() {

function joinRoom(e){
  socket.emit('joinRoom',e.target.name, 'user')
}

  return (
    <main className="ChatHub">
         <h1>This is the chathub </h1>
         <Link name = 'room1' onClick = {joinRoom} to="/ChatRoom/1">Join Room1</Link>
         <Link name = 'room2' onClick = {joinRoom} to="/ChatRoom/2">Join Room2</Link>
         <Link name = 'room3' onClick = {joinRoom} to="/ChatRoom/3">Join Room3</Link>
    </main>
  )
}