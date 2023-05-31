import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
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
            <input type="text" placeholder="Username" className="inputGroup-sizing-lg"></input>
            </div>
            <button type="button" className="btn" style={{background: "#65293d", color: "#d8d1bc", display:"flex", padding:"0"}}>Search</button>
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
