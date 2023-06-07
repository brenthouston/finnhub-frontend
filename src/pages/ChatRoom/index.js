import React, { useState, useEffect } from "react";
import "./style.css";
import { io } from "socket.io-client";
import Message from "../../Components/Message";
// const URL = 'http://localhost:3001'
// const socket = io(URL)

export default function ChatRoom(props) {
  let roomName = window.location.pathname.split("/")[2];
  roomName = roomName.split("-").join(" ");
  console.log("username prop", props.username);
  const socket = props.useSocket;
  const [sentMessage, setSentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", window.location.pathname.split("/")[2], "user");
    console.log(window.location.pathname.split("/")[2]);

    socket.on("chat-message", (data) => {
      setMessageList((state) => [...state, data]);
    });
    socket.on("joined-room", (data) => {});
    socket.on("update-message-history", (data) => {
      setMessageList(data);
    });

    return () => socket.off("chat-message", addMessage);
  }, []);

  function addMessage(newMessage) {
    console.log(messageList);
    const newMessageArray = [...messageList, newMessage];
    setMessageList(newMessageArray);
  }

  function handleChange(e) {
    if (e.target.name === "msg") {
      setSentMessage(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(messageList);
    socket.emit(
      "send-chat-message",
      window.location.pathname.split("/")[2],
      sentMessage,
      props.username
    );
    setSentMessage("");
  }

  return (
    <main className="ChatRoom">
      <h1>Welcome to {roomName}!</h1>
      <div className="container chatRm">
        {messageList.map((msg, i) => {
          return <Message key={i} sender={msg.sender} message={msg.message} />;
        })}

        <form onSubmit={handleSubmit}>
          <input
            name="msg"
            onChange={handleChange}
            value={sentMessage}
            placeholder="Enter in a message"
          />
          <button id="sendBtn">send message</button>
        </form>
      </div>
    </main>
  );
}
