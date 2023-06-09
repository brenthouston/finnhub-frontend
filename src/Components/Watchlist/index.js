import React from 'react'
import './style.css';
import axios from 'axios'
// const URL = 'http://localhost:3001'
const URL_PREFIX = "https://finhub.herokuapp.com"

export default function Watchlist(props) {

    async function deleteStock(userID, stockID){
        try {
          const response = await axios.delete(`${URL}/api/users/${userID}/stock/${stockID}`);
        } catch (error) {
          console.error(error);
        }
    }

    function dltBtn(e){
        const user2dlt = props.userID
        const stock2dlt = e.target.id
        for (let i = 0; i < props.currentList.length; i++) {
            const stock = props.currentList[i];
            const id = stock._id
            if(id === stock2dlt){
                const newArray = props.currentList.filter(item=> item._id !== stock2dlt )
                props.setStocks(newArray)
            }
            
        }
        deleteStock(user2dlt,stock2dlt)
    }


  return (
    <div className="row">
      
     <div className="d-flex justify-content-around">
        <div className="ticker"><p style={{ fontFamily: "basic-sans, sans-serif", fontWeight:"100", fontSize:"2rem", margin:"0"}}><p >Ticker</p>{props.tickerName}</p>
        </div>
        <div className="price"><h4 style={{fontSize: "2rem", color: "var(--primary)"}} > <p>Price</p>${props.price}</h4>
        </div>


        <div className={props.day_change.includes('-')?"percent_change_neg":"percent_change_pos"}><h4 style={{fontSize:"2rem"}}><p>Change</p>{props.day_change}%</h4>
        </div>
     
        {props.username === props.currentUser && <button onClick = {dltBtn} id = {props.stockID} type="button" className="btn delete" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px", height: "38px"}}>Delete</button>}
    </div>
  </div>
  )
}





