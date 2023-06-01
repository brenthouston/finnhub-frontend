import React,{useState} from "react";
import "./style.css";
import axios from 'axios'
const URL = 'http://localhost:3001'
// require('dotenv').config()

// async function getStockInfo() {
//   const symbol = 'appl'
//   console.log(process.env.REACT_APP_API_TOKEN)
//   const api_url = `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=${process.env.API_TOKEN}`

//   const response = await fetch(api_url);
//   const data = await response.json();

//   const { name, ticker, price, day_high, day_low, day_open, market_cap, previous_close_price, day_change, volume } = data;
//   console.log(name)
// }


// getStockInfo()

export default function Home() {
  const [userSearch, setUserSearch] = useState('')

  function handleChange(e){
    if(e.target.name === 'userSearch'){
      setUserSearch(e.target.value)
    }
  }
  
  async function getUser() {
    try {
      const response = await axios.get(`${URL}/api/users`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  
   function handleUserSearch(e){
    e.preventDefault()
    console.log('pressed search button')
    window.location.href = `/profile/${userSearch}`
    setUserSearch('')
  }

  return (
    <div className="container home">
      <div className="row">
        <section className="col m-5">
          <h1 style={{fontWeight:"lighter" }}>Dashboard</h1>
          <h3>What is FinHub?</h3>
          <div className="container w_card">
            <p>
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
      </div>
      <div className="row">
        <aside className="col m-5">
          <div className="user_search">
            <p style={{color: "#7f7c3d", fontSize: "22px"}}>Search for User</p>
            <div className="input-group input-group-lg">
            <input type="text" placeholder="Username" className="inputgroup-sizing-lg"></input>
            </div>
            <button onClick = {handleUserSearch} type="button" className="btn" style={{background: "#65293d", color: "#d8d1bc", display:"flex", padding:"0"}}>Search</button>
            </div>

          <div className="ticker_search">
            <p style={{color: "#7f7c3d", fontSize: "22px"}}>Search for Ticker</p>
            <div className="input-group input-group-lg">
            <input type="text" placeholder="Stock Symbol" className="inputGroup-sizing-lg"></input>
            </div>
            <button type="button" className="btn" style={{background: "#65293d", color: "#d8d1bc", display:"flex", padding:"0"}}>Search</button>
          </div>
        </aside>
      </div>
      <p style={{color: "#7f7c3d", fontSize: "14px"}}>Disclaimer: Trading in equities is risky. Information provided on this website does not constitute investment advice. There is no guarantee of profits and we will not be responsible for any losses incurred or decisions made based on the information provided here. Past performance is not an indicator of future returns. </p>
    </div>
  );
}
