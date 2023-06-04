import TickSearch from '../../utils/TickSearch'
import "./style.css";
import { useState, useEffect } from "react";


const TickerSearch = () => {
  
  

  const [search, setSearch] =useState('')
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
    setName(response.data.data[0].name);
    setPrice(response.data.data[0].price);
    setDay_high(response.data.data[0].day_high);
    setDay_low(response.data.data[0].day_low);
    setDay_open(response.data.data[0].day_open);
    setDay_change(response.data.data[0].day_change);
    setVolume(response.data.data[0].volume);
   

  }catch(err){
    console.log(err)
  }
  

}

  // useEffect(() => {
  //  const result=searchTicker('AAPL')
  //  console.log("RESULT",result);
  // },[]);


const handleInputChange = event =>{
   setSearch(event.target.value)
}

  const handleButton =(event)=>{
    event.preventDefault();
   searchTicker(search)
  }



  // const{ data:[{name}] } = name;
  // const{ data:[{price}] } = price;
  // const{ data:[{day_high}] } = day_high;
  // const{ data:[{day_low}] } = day_low;
  // const{ data:[{day_open}] } = day_open;
  // const{ data:[{day_change}] } = day_change;
  // const{ data:[{volume}] } = volume;

  // const{data: [{name, price, day_high ,day_low,day_open, day_change,volume}]}=result;



  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h1 style={{ fontWeight: "lighter" }}>Ticker Search</h1>
          <h3>Get Today's Report</h3>
        </div>

        <div className="col">
          <div className="d-flex justify-content-end">
            <form className="col card" style={{ background: "var(--cardGrn)" }}>
              <div className="form-group p-2">
                <p style={{ padding: "0", color: "#7f7c3d", fontSize: "22px" }}>
                  Search for Ticker
                </p>

                <input
                  onChange={handleInputChange}
                  value={search}
                  type="text"
                  className="form-control"
                  placeholder="AAPL"
                ></input>
                <button
                  onClick={handleButton}
                  type="submit"
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
        </div>
      </div>

      {/* Chart & Ticker info */}

      <div className="row ">
        {/* Chart */}
        <div className="col-8 card mt-5" style={{height:"348px", background:"var(--cardGrn"}}>
          
        </div>
        {/* Ticker Info */}
        <div className="col p-4 g-4 ">
            
          <div className="text-center">
          <h1 style={{ fontWeight: "lighter", fontSize:"2rem", marginLeft:"0"}}>{name}</h1>
         
          <div className="row " style={{padding:"0", marginTop:"0", marginRight:"0"}}>
            <div className="col text-start">
          <ul>
            <li><p>Price</p></li>
            <li><p>High</p></li>
            <li><p>Low</p></li>
            <li><p>Open</p></li>
            <li><p>Day change</p></li>
            <li><p>Volume</p></li>
           
          </ul>
          </div>
          <div className="col text-end">
            <ul>
                <li><p>{price}</p></li>
                <li><p>{day_high}</p></li>
                <li><p>{day_low}</p></li>
                <li><p>{day_open}</p></li>
                <li><p>{day_change}</p></li>
                <li><p>{volume}</p></li>
              
            </ul>
          </div>
          <button    className="btn"
                  style={{
                    background: "#65293d",
                    color: "#d8d1bc",
                    display: "flex",
                    padding: "0",
                  }}>Save</button>
          </div>
          </div>
          
        </div>
      </div>
      <p style={{color: "#7f7c3d", fontSize: "14px"}}>Disclaimer: Trading in equities is risky. Information provided on this website does not constitute investment advice. There is no guarantee of profits and we will not be responsible for any losses incurred or decisions made based on the information provided here. Past performance is not an indicator of future returns. Take trading advice at your own risk. </p>
    </div>
  );
}
export default TickerSearch