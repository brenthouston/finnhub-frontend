import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'
import NavTabs from './Components/NavTabs/index'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {io} from 'socket.io-client'
import Login from "./pages/Login";
import background from "./images/finhubBG.png";
import SignUp from "./pages/SignUp";

import {useEffect} from 'react'
const URL = 'http://localhost:3001'

const socket = io(URL)
const bg =background



function App() {
  
  return (
    <>
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition:"center",backgroundSize:"cover",width:'100vw',height:'100vh', margin_top:'100px'
     }}>
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/chathub/" element={<ChatHub useSocket = {socket} />} />
        <Route path="/chatroom/:roomID" element={<ChatRoom useSocket = {socket}/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
