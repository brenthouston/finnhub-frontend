import React from 'react'
import './style.css';



export default function UsersCard(props) {

  function handleUser(e){
    // console.log(e.target.parentElement.id)
    window.location.href = `/profile/${e.target.parentElement.id}`
  }

  return (
    <div id = {props.username} onClick = {handleUser} className="card " style={{border:"var(--bgGrn)"}}>
      <img src = {props.profilePic}></img>
      <h1>{props.username}</h1>
      <p>{props.investType}</p>
    </div>
  );
  
}