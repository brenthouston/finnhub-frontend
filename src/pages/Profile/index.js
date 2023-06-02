import React, {useState,useEffect} from "react";
import "./style.css";
import axios from 'axios'
import Watchlist from "../../Components/Watchlist";
import API from "../../utils/API"
const URL = 'http://localhost:3001'

const ianAPIKey = '9FGEWT5F3EERGO89'

export default function Profile() {

const [username, setUserName] = useState('')
const [userID,setUserID] = useState('')
const [email, setEmail] = useState('')
const [desc, setDesc] = useState('')
const [investType, setInvestType] = useState('')
const [stocks, setStocks] = useState([])


async function findUser(username){
    try {
      const response = await API.getUserByName(username)
      const userData = response.data
      console.log(userData)
      setUserName(userData.username)
      setEmail(userData.email)
      setDesc(userData.description)
      setInvestType(userData.investor_type)
      setStocks(userData.stocks)
      setUserID(userData._id)
    } catch (error) {
      console.error(error);
    }
}

useEffect(()=>{
// console.log(window.location.pathname.split('/')[2])
const username = window.location.pathname.split('/')[2]
console.log('username' , username)
findUser(username)
},[])


  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h1 style={{ fontWeight: "lighter" }}>Profile</h1>
          <h3>Customize Watchlists & Follow Traders</h3>
        </div>

        <form className="col-3">
          <div className="form-group">
            <p style={{ color: "#7f7c3d", fontSize: "22px" }}>
              Search for Ticker
            </p>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            ></input>
            <button
              type="button"
              className="btn"
              style={{
                background: "#65293d",
                color: "#d8d1bc",
                display: "flex",
                padding: "0",
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col pic">
            <div>
              <p>photo here</p>
            </div>
          </div>
          <div className="col bio w_card">
            <h1 style={{ padding: "10px" }}>Bio</h1>
            <ul>
              <li className="username">Username: {username}</li>
              <li className="email">Email: {email}</li>
              <li className="invest-type">
                Type of investor: {investType}
              </li>
            </ul>
            <p>
              {desc}
            </p>
          </div>
        </div>
      </div>

      <div className="container.fluid">
        <div className="watchlist my-4">
          <h1 style={{fontSize:"2.5rem", textAlign:"center", marginLeft:0, margin:"25px"}}>Watchlists</h1>
          {stocks.map((stock, i ) =>{
          return <Watchlist key = {i} tickerName = {stock.ticker} stockID = {stock._id} userID = {userID} setStocks = {setStocks} currentList = {stocks}/> 
         })}
        </div>
      </div>
    </div>
  );
}
