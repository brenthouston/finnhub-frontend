import React from "react";
import "./style.css";
import UsersCard from "../../Components/Users";


export default function Users() {
  



  return (
    <div className="container">
         <div className="col-9">
        <h1 style={{ fontWeight: "lighter" }}>Users</h1>
        <h3>Explore the Community!</h3>
      </div>
      <div className="row">
        <UsersCard/>
          </div>

    </div>
  );
}
