import React from "react";
import "./style.css";

export default function Profile() {
  return (
    <div className="profile container">
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
            
    <div className="container picBio">
            <div className="row">
                <div className="col pic ">

                </div>
                <div className="col bio ">
                    <h1>Bio</h1>
                </div>
            </div>
    </div>


    </div>
  );
}
