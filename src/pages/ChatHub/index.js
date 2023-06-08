import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { io } from "socket.io-client";
import Error from "../../Components/Error";
// const URL = 'http://localhost:3001'
// const socket = io(URL)

export default function ChatHub(props) {
  const socket = props.useSocket;
  // const [roomList, setRoomList] = useState(['calls', 'puts','options'])
  const [roomList, setRoomList] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [show, setShow] = useState(false);
  const [errorMsg, setErrMsg] = useState("");

  useEffect(() => {
    // socket.on("update-room-list", (data) => {
    //   setRoomList((state) => [...state, data]);
    // });

    // socket.on("populate-rooms", (data) => {
    //   setRoomList(data);
    // });

    socket.emit("send-room-list");

    socket.on("here-are-the-rooms", (data) => {
      console.log(data)
      setRoomList(data);
    });
    console.log("the use effect fired");
  }, []);

  function handleChange(e) {
    if (e.target.name === "createRoom") {
      setRoomName(e.target.value);
    }
  }

  function updateRooms(){
    socket.emit('send-room-list')
  }
  function handleSubmit(e) {
    e.preventDefault();
    // const addNewRoom = [...roomList, roomName]
    // setRoomList(addNewRoom)
    if (roomName != "") {
      const newRoom = roomName.split(" ").join("-");
      console.log(newRoom);
      socket.emit("create-new-room", newRoom);
      socket.emit('send-room-list')
      setRoomName("");
    } else {
      setShow(true);
      setErrMsg("Please enter a room name");
    }
  }

  return (
    <main className="container ChatHub">
      <h1>Welcome to the ChatHub!</h1>
      <div className="container pageContent">
        <div className="col chatCard d-flex flex-column m-3">
          <h2
            style={{
              background: "var(--bgGrn)",
              padding: "10px",
              textAlign: "center",
            }}
           className="header">
            Create a chatroom:
          </h2>
          <div>
            <form onSubmit={handleSubmit}>
              <input className = 'roomInput'
                name="createRoom"
                onChange={handleChange}
                value={roomName}
                placeholder="Enter room name"
              />
              <button className="chatBtn">Create room</button>
            </form>
          </div>
        </div>
        <div className="col chatCard d-flex flex-column m-3">
          <h2
            style={{
              background: "var(--bgGrn)",
              padding: "10px",
              textAlign: "center",
            }}
          className="header">
            Join a chat:
          </h2>
          {roomList.map((room, i) => {
            return (
              <li className="room">
                <Link
                  className="join"
                  key={i}
                  name={room}
                  to={"/chatroom/" + room}
                >
                  {"Join " + room + " chat"}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <Error errorMsg={errorMsg} show={show} setShow={setShow} />
    </main>
  );
}
