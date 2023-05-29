import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './pages/ChatRoom'
import ChatHub from './pages/ChatHub'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ChatRoom/:roomID" element={<ChatRoom/>} />
        <Route path="/ChatRoom/" element={<ChatHub/>} />
      </Routes>
    </Router>
  );
}

export default App;
