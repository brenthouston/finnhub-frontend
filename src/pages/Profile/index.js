import React, {useState,useEffect} from "react";
import "./style.css";
import axios from 'axios'
import Watchlist from "../../Components/Watchlist";
import API from "../../utils/API"
import BioForm from "../../Components/BioForm";
import TickSearch from "../../utils/TickSearch";
import Error from '../../Components/Error'
// const URL = 'http://localhost:3001'

const ianAPIKey = '9FGEWT5F3EERGO89'

export default function Profile(props) {

const [username, setUserName] = useState('')
const [userID,setUserID] = useState('')
const [email, setEmail] = useState('')
const [desc, setDesc] = useState('')
const [investType, setInvestType] = useState('')
const [stocks, setStocks] = useState([])
const [profilePic,setProfilePic] = useState('')
const [favStock,setFavStock] = useState('')
const [userSearch, setUserSearch] = useState('')
let url 

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [errorMsg, setErrMsg] = useState('')
const [errShow, setErrShow] = useState(false);


const [name, setName]= useState('')
const [price, setPrice]= useState('')
const [day_high, setDay_high]= useState('')
const [day_low, setDay_low]= useState('')
const [day_open, setDay_open]= useState('')
const [day_change, setDay_change]= useState('')
const [volume, setVolume]= useState('')




async function searchTicker (query){
try{
  const response = await TickSearch.search(query)
  console.log('reponse', response)
  if(response.data.data.length !=0){
    setName(response.data.data[0].name);
    setPrice(response.data.data[0].price);
    setDay_high(response.data.data[0].day_high);
    setDay_low(response.data.data[0].day_low);
    setDay_open(response.data.data[0].day_open);
    setDay_change(response.data.data[0].day_change);
    setVolume(response.data.data[0].volume);
    console.log('price',price)
    createOrupdate(query,response.data.data[0].price,response.data.data[0].day_high,response.data.data[0].day_low,response.data.data[0].day_open,response.data.data[0].day_change,response.data.data[0].volume)
  }else{
    alert('That was not a valid stock')
    return
  }  
}catch(err){
  console.log(err)
}

}
async function createOrupdate(sr,p,dh,dl,d_o,c,v){
try{
  const response = await API.findStockTicker(sr)
  console.log('already in the database')
  const updatedStock = await API.updateStock(sr,p,dh,dl,d_o,c,v)
  console.log('updated stock response',updatedStock)
}catch(err){
  if(err.toString() === 'Error: That stock wasnt in the database'){
    const createdStock = await API.createStock(sr,p,dh,dl,d_o,c,v)
  }
  console.log(err)
}

}

var myWidget = window.cloudinary.createUploadWidget(
  {
    cloudName: 'dykifpnqi',
    // make sure we have a preset that allows unsigned uploads! Go to your cloudinary dashboard -> settings -> upload -> upload presets to create a new preset
    uploadPreset: 't6tmwe9g',
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      // do something with the image url
      url = result.info.url;
      uploadAPI(url)
    }
  }
  );
async function uploadAPI(url){
  const response = await API.updateProfilePic(props.username,url)
  console.log(response)
  findUser(username)

}  
function openCloudinary(e){
  e.preventDefault()
  myWidget.open()

}

async function findUser(username){
    try {
      const response = await API.getUserByName(username)
      const userData = response.data
      setUserName(userData.username)
      setEmail(userData.email)
      setDesc(userData.description)
      setInvestType(userData.investor_type)
      setStocks(userData.stocks)
      setUserID(userData._id)
      setProfilePic(userData.profile_pic)
      setFavStock(userData.fav_stock)
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
    setErrShow(true)
    setErrMsg('No user found with that username')
    console.error(error);
  }
  setUserSearch('')
}
function handleChange(e){
  if(e.target.name === 'userSearch'){
    setUserSearch(e.target.value)
  }
}

useEffect(()=>{
// console.log(window.location.pathname.split('/')[2])
const username = window.location.pathname.split('/')[2]
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
              Search for Users
            </p>
            <input
            onChange = {handleChange} 
            name = 'userSearch' 
            value={userSearch}
              type="text"
              className="form-control"
              placeholder="Username"
            ></input>
            <button
              type="button"
              onClick={handleUserSearch}
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
              {/* <p>photo here</p> */}
              <img src = {profilePic} />
            </div>
            <div className="d-flex justify-content-center">
              {props.username === username && <button onClick={openCloudinary} type="button" className="btn"style={{background: "#65293d",color: "#d8d1bc",padding: "0", width:"6rem", margin:"10px"}}>Edit photo</button>}
          </div>
          </div>
          <div className="col bio w_card">
            <h1 style={{ fontSize:"3rem" }}>Bio</h1>
            <div className="">
            <ul>
              <li className="username">Username: <h2>{username}</h2></li>
              <li className="email">Email: {email}</li>
              <li className="invest-type">Type of investor: {investType}</li>
              <li className="invest-type">Favorite Stock: {favStock}</li>
            </ul>
            <p>
              {desc}
            </p>
            {props.username === username && <button onClick={handleShow} type="button" className="btn"style={{background: "#65293d",color: "#d8d1bc",padding: "0", width:"8rem", alignSelf:"center"}}>Edit Bio</button>}
          </div>
          </div>
        </div>
      </div>

      <div className="container.fluid">
        <div className="watchlist my-4">
          <h1 style={{fontSize:"2.5rem", textAlign:"center", marginLeft:0, margin:"25px"}}>Watchlists</h1>
          {props.username === username && <button onClick={refreshWatchlist} type="button" className="btn"style={{background: "#65293d",color: "#d8d1bc",padding: "0", width:"8rem", alignSelf:"center"}}>Update watchlist data</button>}
          {stocks.map((stock, i ) =>{
          return <Watchlist key = {i} currentUser = {username} username = {props.username} day_change = {stock.day_change} price = {stock.price} tickerName = {stock.ticker} stockID = {stock._id} userID = {userID} setStocks = {setStocks} currentList = {stocks}/> 
         })}
        </div>
      </div>
        <BioForm username = {props.username} setInvestType = {setInvestType} setFavStock = {setFavStock} setDesc = {setDesc} desc = {desc} fav = {favStock} itype = {investType} show = {show} setShow = {setShow} handleClose = {handleClose} handleShow = {handleShow}> </BioForm>
        <Error errorMsg = {errorMsg} show = {errShow} setShow = {setErrShow}/>
    </div>
  );
}
