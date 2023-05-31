import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'
import NavTabs from './Components/NavTabs/index'
import Home from './pages/Home'
import {io} from 'socket.io-client'
const URL = 'http://localhost:3001'
const socket = io(URL)

function App() {
  return (
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/chatroom/:roomID" element={<ChatRoom useSocket = {socket}/>} />
        <Route path="/chathub/" element={<ChatHub useSocket = {socket} />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
