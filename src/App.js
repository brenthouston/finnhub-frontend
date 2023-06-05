import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom';
import ChatHub from './pages/ChatHub';
import NavTabs from './Components/NavTabs/index';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {io} from 'socket.io-client';
import Login from "./pages/Login";
import background from "./images/finhubBG.png";
import SignUp from "./pages/SignUp";
import TickerSearch from "./pages/TickerSearch";

import {useState,useEffect} from 'react'
import API from './utils/API.js'

const URL = 'http://localhost:3001'

const socket = io(URL)
const bg =background


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [username, setUsername] = useState("")
  const [userId, setUserId] = useState('')
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    if(storedToken){
      API.verifyToken(storedToken).then(data=>{
        setToken(storedToken);
        setUsername(data.data.username);
        setUserId(data.data._id)
        setIsLoggedIn(true)
      }).catch(err=>{
        console.log("that token couldnt be verified")
        console.log(err)
        logout();
      })

    }
  },[])

  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
  }
  
  return (
    <>
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition:"center",backgroundSize:"cover",width:'100vw',height:'100vh', margin_top:'100px'
     }}>
    <Router>
      <NavTabs username = {username} />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login setToken = {setToken} setUsername = {setUsername} username = {username} isLoggedIn = {isLoggedIn}/>}  />
        <Route path="/" element={<SignUp setToken = {setToken} setUsername = {setUsername} username = {username} isLoggedIn = {isLoggedIn}/>} />
        <Route path="/tickersearch"  element={<TickerSearch username = {username} userId = {userId}/>}/>
        <Route path="/chathub/" element={<ChatHub username = {username} useSocket = {socket} />} />
        <Route path="/chatroom/:roomID" element={<ChatRoom useSocket = {socket} username={username}/>} />
        <Route path="/profile/:username" element={<Profile username = {username}/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
