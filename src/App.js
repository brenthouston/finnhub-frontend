import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'
import NavTabs from './Components/NavTabs/index'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {io} from 'socket.io-client'
const URL = 'http://localhost:3001'
const socket = io(URL)

function App() {
  return (
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chathub/" element={<ChatHub useSocket = {socket} />} />
        <Route path="/chatroom/:roomID" element={<ChatRoom useSocket = {socket}/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
