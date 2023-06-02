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
import {useState,useEffect} from 'react'
import API from './utils/API.js'

const URL = 'http://localhost:3001'

const socket = io(URL)
const bg =background


function App() {

  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.verifyToken(storedToken).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oh noes")
      console.log(err)
      logout();
    })
  },[])

  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
      setUserId(0);
  }

  
  return (
    <>
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition:"center",backgroundSize:"cover",width:'100vw',height:'100vh', margin_top:'100px'
     }}>
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login setToken = {setToken} setUserId = {setUserId} setUsername = {setUsername}/>}  />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/chathub/" element={<ChatHub username = {username} useSocket = {socket} />} />
        <Route path="/chatroom/:roomID" element={<ChatRoom useSocket = {socket} username={username}/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
