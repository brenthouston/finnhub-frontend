import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <section>
          <h1>Dashboard</h1>
          <h3>What is FinHub?</h3>
          <div className="w_card"></div>
        </section>
      </div>
    <div className="row">
        <aside className="col-4">
          <div className="user_search"></div>

          <div className="ticker_search"></div>
        </aside>
        </div>
    </div>
  );
}
