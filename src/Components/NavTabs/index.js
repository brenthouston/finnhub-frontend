import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function NavTabs(props) {
  const[currentPage, setCurrentPage] = useState()


  return (
    <div className="nav container-fluid ">
      <h4 className="logo">FinHub</h4>
      <ul className="links col d-flex flex-wrap justify-content-end">
        <li className="nav-item px-4 mt-4">
          <Link
            className={
              currentPage === "home" ? "nav-link active" : "nav-link"
            }
            onClick={()=>setCurrentPage("home")}
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="nav-item px-4 mt-4">
          {props.username &&<Link
            className={
              currentPage === "profile" ? "nav-link active" : "nav-link"
            }
            onClick={()=>setCurrentPage("profile")}
            to={`/profile/${props.username}`}
          >
            Profile
          </Link>}
        </li>
        <li className="nav-item px-4 mt-4">
          {props.username && <Link className={currentPage === "chathub" ? "nav-link active" : "nav-link" }onClick={()=>setCurrentPage("chathub")} to="/chathub">
            ChatHub
          </Link>}
        </li>
        <li className="nav-item px-4 mt-4">
          <Link
            className={
              currentPage === "signals" ? "nav-link active" : "nav-link"
            }
            onClick={()=>setCurrentPage("signals")}
            to="/signals"
          >
            Signals
          </Link>
        </li>
        <li className="nav-item px-4 mt-4">
          <Link
            className={
              currentPage === "tickersearch"
                ? "nav-link active"
                : "nav-link"
            }
            onClick={()=>setCurrentPage("tickersearch")}
            to="/tickersearch"
          >
            Ticker Search
          </Link>
        </li>
        <li className="nav-item px-4 mt-4">
          {props.username ? (<Link className={currentPage === "logout" ? "nav-link active" : "nav-link" } to="/login"onClick={props.logout}>Logout</Link>) : (<Link
              className={
                currentPage === "login" ? "nav-link active" : "nav-link"
              }
              onClick={()=>setCurrentPage("login")}
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
