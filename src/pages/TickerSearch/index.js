import React from "react";
import "./style.css";

export default function TickerSearch() {
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
          <h1 style={{ fontWeight: "lighter", fontSize:"2rem", marginLeft:"0"}}>AAPL</h1>
         
          <div className="row " style={{padding:"0", marginTop:"0", marginRight:"0"}}>
            <div className="col text-start">
          <ul>
            <li><p>Open</p></li>
            <li><p>High</p></li>
            <li><p>Low</p></li>
            <li><p>Mkt cap</p></li>
            <li><p>P/E ratio</p></li>
            <li><p>Div yield</p></li>
            <li><p>52-wk high</p></li>
            <li><p>52-wk low</p></li>
          </ul>
          </div>
          <div className="col text-end">
            <ul>
                <li><p>$176.97</p></li>
                <li><p>$178.97</p></li>
                <li><p>$176.57</p></li>
                <li><p>$2.79T</p></li>
                <li><p>30.10</p></li>
                <li><p>0.54%</p></li>
                <li><p>$178.97</p></li>
                <li><p>$124.17</p></li>
            </ul>
          </div>
          </div>
          </div>
          
        </div>
      </div>
      <p style={{color: "#7f7c3d", fontSize: "14px"}}>Disclaimer: Trading in equities is risky. Information provided on this website does not constitute investment advice. There is no guarantee of profits and we will not be responsible for any losses incurred or decisions made based on the information provided here. Past performance is not an indicator of future returns. Take trading advice at your own risk. </p>
    </div>
  );
}
