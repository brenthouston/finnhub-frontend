import React from "react";
import "./style.css";

export default function Profile() {
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
              <li className="username">Username: @conservativeinvestor</li>
              <li className="email">Email: brent.houston@gmail.com</li>
              <li className="invest-type">
                Type of investor: Conservative, Swing Trader
              </li>
            </ul>
            <p>
              “Hi Everyone, I’m a conservative investor tand have reapeatedly
              out preformed the market. Would love to share ideas and
              communicate.:
            </p>
          </div>
        </div>
      </div>

      <div className="container.fluid">
        <div className="watchlist my-4">
          <h1 style={{fontSize:"2.5rem", textAlign:"center", marginLeft:0, margin:"25px"}}>My Watchlists</h1>
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="ticker"><h4>Apple Inc.AAPL</h4></div>
          <div className="price"><h4 className="text-success">$60.35</h4></div>
          <div className="percent_change text-danger"><h4>0.46%</h4></div>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
        </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="ticker"><h4>Apple Inc.AAPL</h4></div>
          <div className="price"><h4 className="text-success">$60.35</h4></div>
          <div className="percent_change text-danger"><h4>0.46%</h4></div>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
        </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="ticker"><h4>Apple Inc.AAPL</h4></div>
          <div className="price"><h4 className="text-success">$60.35</h4></div>
          <div className="percent_change text-danger"><h4>0.46%</h4></div>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
        </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="ticker"><h4>Apple Inc.AAPL</h4></div>
          <div className="price"><h4 className="text-success">$60.35</h4></div>
          <div className="percent_change text-danger"><h4>0.46%</h4></div>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
        </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-between">
          <div className="ticker"><h4>Apple Inc.AAPL</h4></div>
          <div className="price"><h4 className="text-success">$60.35</h4></div>
          <div className="percent_change text-danger"><h4>0.46%</h4></div>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Edit</button>
              <button type="button" className="btn" style={{background: "#65293d", width:"6rem",color: "#d8d1bc", margin:"15px"}}>Delete</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
