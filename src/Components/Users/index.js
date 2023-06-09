import React from 'react'
import './style.css';



export default function UsersCard(props) {

  function handleUser(e){
    // console.log(e.target.id)
    window.location.href = `/profile/${e.target.id}`
  };
  return (
    <div id = {props.username} onClick = {handleUser} className="card m-4 " style={{background:"var(--bgGrn)", border:"none", width:"30%"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-'>
      <img id = {props.username} onClick = {handleUser} style={{height: "4rem",width:"4rem", borderRadius:"99px"}}src = {props.profilePic}></img>
</div>
<div className='col d-flex align-items-center'>
      <h2 id = {props.username} onClick = {handleUser} style={{fontSize:"2rem"}}>{props.username}</h2>
</div>
<div className=''>
      <h2 id = {props.username} onClick = {handleUser} style={{fontSize:"25px",}}><span id = {props.username} onClick = {handleUser} style={{fontSize:"20px"}}>Type of Investor:   </span>{props.investType}</h2>
      </div>
      </div>
      </div>
    </div>
  );
  
}