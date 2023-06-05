import React from 'react'
import './style.css';
import axios from 'axios'
const URL = 'http://localhost:3001'

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
     <div className="d-flex justify-content-between">
        <div className="ticker"><h4>{props.tickerName}</h4></div>
        <div className="price"><h4 className="text-success">$60.35</h4></div>
        <div className="percent_change text-danger"><h4>0.46%</h4></div>
        {/* <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button> */}
        <button onClick = {dltBtn} id = {props.stockID} type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
    </div>
  </div>
  )
}





