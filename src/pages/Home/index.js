import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <section className="col-8">
          <h1 className="">Dashboard</h1>
          <h3 className="mt-1">What is FinHub?</h3>
          <div className="w_card">
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
        <aside className="col-4">
          <div className="user_search">
            <p style={{color: "#7f7c3d", fontSize: "18px"}}>Search for User</p>
            <input type="text" className=""></input>
            <button type="button" className="btn btn-sm" style={{background: "#65293d"}}>Submit</button>
            </div>

          <div className="ticker_search">
            <p style={{color: "#7f7c3d", fontSize: "18px"}}>Search for Ticker</p>
            <input className=""></input>
            <button type="button" className="btn btn-sm" style={{background: "#65293d"}}>Submit</button>
          </div>
        </aside>
      </div>
      <p style={{color: "#7f7c3d", fontSize: "14px"}}>Disclaimer: Trading in equities is risky. Information provided on this website does not constitute investment advice. There is no guarantee of profits and we will not be responsible for any losses incurred or decisions made based on the information provided here. Past performance is not an indicator of future returns. </p>
    </div>
  );
}
