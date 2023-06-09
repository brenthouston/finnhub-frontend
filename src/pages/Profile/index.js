import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "./style.css";
import axios from "axios";
import Watchlist from "../../Components/Watchlist";
import API from "../../utils/API";
import BioForm from "../../Components/BioForm";
import TickSearch from "../../utils/TickSearch";
import Error from "../../Components/Error";
// const URL = 'http://localhost:3001'

const ianAPIKey = "9FGEWT5F3EERGO89";

export default function Profile(props) {
  const [username, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [investType, setInvestType] = useState("");
  const [stocks, setStocks] = useState([]);
  const [profilePic, setProfilePic] = useState("");
  const [favStock, setFavStock] = useState("");
  const [userSearch, setUserSearch] = useState("");
  // const[toUserPage, setToUserPage] = React.useState(false)
  let url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [errorMsg, setErrMsg] = useState("");
  const [errShow, setErrShow] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [day_high, setDay_high] = useState("");
  const [day_low, setDay_low] = useState("");
  const [day_open, setDay_open] = useState("");
  const [day_change, setDay_change] = useState("");
  const [volume, setVolume] = useState("");

  async function searchTicker(query) {
    try {
      const response = await TickSearch.search(query);
      console.log("reponse", response);
      if (response.data.data.length != 0) {
        setName(response.data.data[0].name);
        setPrice(response.data.data[0].price);
        setDay_high(response.data.data[0].day_high);
        setDay_low(response.data.data[0].day_low);
        setDay_open(response.data.data[0].day_open);
        setDay_change(response.data.data[0].day_change);
        setVolume(response.data.data[0].volume);
        console.log("price", price);
        createOrupdate(
          query,
          response.data.data[0].price,
          response.data.data[0].day_high,
          response.data.data[0].day_low,
          response.data.data[0].day_open,
          response.data.data[0].day_change,
          response.data.data[0].volume
        );
      } else {
        alert("That was not a valid stock");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function createOrupdate(sr, p, dh, dl, d_o, c, v) {
    try {
      const response = await API.findStockTicker(sr);
      console.log("already in the database");
      const updatedStock = await API.updateStock(sr, p, dh, dl, d_o, c, v);
      console.log("updated stock response", updatedStock);
    } catch (err) {
      if (err.toString() === "Error: That stock wasnt in the database") {
        const createdStock = await API.createStock(sr, p, dh, dl, d_o, c, v);
      }
      console.log(err);
    }
  }

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dykifpnqi",
      // make sure we have a preset that allows unsigned uploads! Go to your cloudinary dashboard -> settings -> upload -> upload presets to create a new preset
      uploadPreset: "t6tmwe9g",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        // do something with the image url
        url = result.info.url;
        uploadAPI(url);
      }
    }
  );
  async function uploadAPI(url) {
    const response = await API.updateProfilePic(props.username, url);
    console.log(response);
    findUser(username);
  }
  function openCloudinary(e) {
    e.preventDefault();
    myWidget.open();
  }

  async function findUser(username) {
    try {
      const response = await API.getUserByName(username);
      const userData = response.data;
      setUserName(userData.username);
      setEmail(userData.email);
      setDesc(userData.description);
      setInvestType(userData.investor_type);
      setStocks(userData.stocks);
      setUserID(userData._id);
      setProfilePic(userData.profile_pic);
      setFavStock(userData.fav_stock);
    } catch (error) {
      console.error(error);
    }
}

async function refreshWatchlist(){
  for (let i = 0; i < stocks.length; i++) {
    const element = stocks[i].ticker;
    await searchTicker(element)
    
  }
  findUser(username)
}
// async function handleUserSearch(e){
//   e.preventDefault()
//   try {
//     const response = await API.getUserByName(userSearch);
//     if(response.status ===200){
//       console.log('it was successful search')
//       window.location.href = `/profile/${userSearch}`
//     }
//     // findUser(username)
//   }
  async function handleUserSearch(e) {
    e.preventDefault();
    try {
      const response = await API.getUserByName(userSearch);
      if (response.status === 200) {
        console.log("it was successful search");
        window.location.href = `/profile/${userSearch}`;
      }
      console.log(response);
    } catch (error) {
      setErrShow(true);
      setErrMsg("No user found with that username");
      console.error(error);
    }
    setUserSearch("");
  }
  function handleChange(e) {
    if (e.target.name === "userSearch") {
      setUserSearch(e.target.value);
    }
  }

  useEffect(() => {
    // console.log(window.location.pathname.split('/')[2])
    const username = window.location.pathname.split("/")[2];
    findUser(username);
  }, []);

  function toUserPage() {
    navigate("/users")
  }
 const navigate=useNavigate()

  return (
    <div className="container profile">
      <div className="row profile">
        <div className="col-9">
          <h1 style={{ fontWeight: "lighter" }}>Profile</h1>
          <h3>Customize Watchlists & Follow Traders</h3>
        </div>

      {/* SEARCH FOR USERS */}

        <form className="col-3">
          <div className="form-group">
            <p style={{ color: "var(--primary)", fontSize: "22px" }}>
              Search for Users
            </p>
            <input
              onChange={handleChange}
              name="userSearch"
              value={userSearch}
              type="text"
              className="form-control"
              placeholder="Username"
            ></input>
            <button
              type="button"
              onClick={handleUserSearch}
              className="btn search"
              style={{
                background: "#65293d",
                color: "#d8d1bc",
                display: "flex",
                padding: "0",
              }}
            >
              Search
            </button>
            <button
              type="button"
              onClick={toUserPage}
              className="btn search"
              style={{
                background: "#65293d",
                color: "#d8d1bc",
                display: "flex",
                padding: "0",
                marginTop:"10px"
              }}
            >
              Explore
            </button>
          </div>
        </form>
     
              {/* PIC */}
      <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-center picBtn">
          <div className="col pic d-flex flex-column">
            
            {/* PHOTO */}
            <img
              style={{
                borderRadius: "120px",
                padding: "15px",
                justifyContent:"center",
                alignItems:"center",
                
              }}
              src={profilePic}
            />
            
            <div className="d-flex justify-content-center">
              {props.username === username && (
                <button
                  onClick={openCloudinary}
                  type="button"
                  className="btn"
                  style={{
                    background: "#65293d",
                    color: "#d8d1bc",
                    padding: "0",
                    width: "6rem",
                    margin: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center"
                  }}
                >
                  Edit Photo
                </button>
              )}
              </div>
            </div>
          </div>

          {/* BIO */}

          <div className="col bio m-3" style={{padding:"30px"}}>
            <h1 style={{ fontSize: "3rem" }}>Bio</h1>
            <hr style={{color:"var(--accentLight)"}}></hr>

                    {/* BIO DEETS */}
            <div className="container">
              <div className="row">
                <div className="col">
              <ul>
                <li style={{ fontSize: "18px" }} className="username">
                  Username: <h2>{username}</h2>
                </li>
                <li style={{ fontSize: "18px" }} className="email">
                  Email: {email}
                </li>
                </ul> 
                </div>
                <div className="col ">
                <ul>
                  <div>
                <li style={{ fontSize: "18px" }} className="invest-type">
                  Type of investor:  <h3 style={{ fontSize: "19px"}}>{" "}</h3>
                  <h3 style={{ fontSize: "19px" }}>{investType}</h3>
                </li>
                </div>
                <li style={{ fontSize: "18px" }} className="invest-type">
                  Favorite Stock: <h3 style={{ fontSize: "20px" }}></h3>
                  {favStock}
                </li>
              </ul>
              </div>
                    <hr></hr>
              </div>
              <div className="row d-flex">
                  <ul className="text-center mt-4">
              <li
                style={{
                  fontFamily: "basic-sans, sans-serif",
                  fontWeight: "400",
                  fontStyle: "normal",
                  listStyleType: "none",
                  marginLeft: "80px",
                  fontSize: "1.5rem"
                  
                }}
                >
                About me
              </li>
              </ul>
                  <div className="about" style={{ background: "var(--cardGrn)", borderRadius:"4px", marginBottom:"10px", fontFamily: "basic-sans, sans-serif",
                  fontWeight: "400",
                  fontStyle: "normal",
                  listStyleType: "none",
                  color:"var(--primary)", 
                  padding: "20px"
                   }}>
              <li>{desc}</li>
              </div>
              {props.username === username && (
                <button
                onClick={handleShow}
                type="button"
                className="btn"
                style={{
                  background: "#65293d",
                  color: "var(--accentLight)",
                  padding: "0",
                  width: "8rem",
                  height: "27px",
                  alignItem: "center",
                  justifyContent: "center"
                }}
                >
                  Edit Bio
                </button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="watchlist ">
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginLeft: 0,
             padding: "20px",
              background:"var(--bgGrn)"
            }}
          >
            Watchlist:
          </h2>
          <div className="d-flex justify-content-end">  {props.username === username && (
            <button
              onClick={refreshWatchlist}
              type="button"
              className="btn"
              style={{
                background: "#65293d",
                color: "var(--accentLight)",
                padding: "4px",
                margin:"20px",
                width: "9rem",
                alignSelf: "center",
              }}
            >
              Update Watchlist
            </button>
          )}</div>
        
          {stocks.map((stock, i) => {
            return (
              <Watchlist
                key={i}
                currentUser={username}
                username={props.username}
                day_change={stock.day_change}
                price={stock.price}
                tickerName={stock.ticker}
                stockID={stock._id}
                userID={userID}
                setStocks={setStocks}
                currentList={stocks}
              />
            );
          })}
        </div>
      </div>
      <BioForm
        username={props.username}
        setInvestType={setInvestType}
        setFavStock={setFavStock}
        setDesc={setDesc}
        desc={desc}
        fav={favStock}
        itype={investType}
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        {" "}
      </BioForm>
      <Error errorMsg={errorMsg} show={errShow} setShow={setErrShow} />
    </div>
  );
}
