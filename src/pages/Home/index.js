import React,{useState} from "react";
import "./style.css";
import axios from 'axios'
import API from '../../utils/API'
import Error from '../../Components/Error'
const URL = 'http://localhost:3001'



export default function Home() {
  const [userSearch, setUserSearch] = useState('')
  const [show, setShow] = useState(false);
  const [errorMsg, setErrMsg] = useState('')

  function handleChange(e){
    if(e.target.name === 'userSearch'){
      setUserSearch(e.target.value)
    }
  }
  


   async function handleUserSearch(e){
    e.preventDefault()
    try {
      const response = await API.getUserByName(userSearch);
      if(response.status ===200){
        console.log('it was successful search')
        window.location.href = `/profile/${userSearch}`
      }
      console.log(response);
    } catch (error) {
      setShow(true)
      setErrMsg('No user found with that username')
      console.error(error);
    }
    setUserSearch('')
  }

  return (
    <div className="container home d-flex ">
      <div className="row">
        <section className="col-8">
          <h1 style={{fontWeight:"lighter"}}>Dashboard</h1>
          <h3>What is FinHub?</h3>
          <div className="w_card card">
            <p style={{ padding: '25px 20px 0 20px', fontSize:"clamp(12px 16px 18px) !important"}}>
              <strong>Welcome to FinHub</strong>, where finance meets community.
              Whether you're a seasoned trader or just starting your journey,
              our platform equips you with the tools, knowledge, and connections
              to thrive in the fast-paced world of stock trading. Join us today
              and unlock your full trading potential
            </p>
            <ul className="bulletP">
              <li>Connect and Collaborate</li>
              <li>Customizable Watchlist</li>
              <li>Follow Inspiring Traders</li>
            </ul>
          </div>
        </section>
      <div className="col">
        
      </div>
          <div className="user_search">
            <p style={{color: "#7f7c3d", fontSize: "22px"}}>Search for User</p>
            <div className="input-group input-group-lg">
            <input onChange = {handleChange} name = 'userSearch' value={userSearch} type="text" placeholder="Username" className="inputgroup-sizing-lg"></input>
            </div>
            <button onClick = {handleUserSearch} type="button" className="btn" style={{background: "#65293d", color: "#d8d1bc", display:"flex", padding:"0"}}>Search</button>
            </div>
        
      </div>
      <p style={{color: "#7f7c3d", fontSize: "14px"}}>Disclaimer: Trading in equities is risky. Information provided on this website does not constitute investment advice. There is no guarantee of profits and we will not be responsible for any losses incurred or decisions made based on the information provided here. Past performance is not an indicator of future returns. </p>
      <Error errorMsg = {errorMsg} show = {show} setShow = {setShow}/>
    </div>
  );
}
