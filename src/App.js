import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'
import NavTabs from './Components/Message/NavTabs'

function App() {
  return (
    <Router>
      <NavTabs/>
      <Routes>
        <Route path="/ChatRoom/:roomID" element={<ChatRoom/>} />
        <Route path="/ChatRoom/" element={<ChatHub/>} />
      </Routes>
    </Router>
  );
}

export default App;
