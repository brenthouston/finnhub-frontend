import React from "react";
import "./style.css";
import Card from "../../Components/Signals/index.js";

export default function Signals() {
  return (
    <div className="container">
             <div className="col-9">
          <h1 style={{ fontWeight: "lighter" }}>Signals</h1>
          <h3>Market News and Sentiment</h3>
        </div>

{/* SignalCards */}

     
            <Card/>
        
    </div>
  );
}
