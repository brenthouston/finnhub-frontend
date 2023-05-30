import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'
import NavTabs from './Components/NavTabs/index'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/ChatRoom/:roomID" element={<ChatRoom/>} />
        <Route path="/ChatRoom/" element={<ChatHub/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
