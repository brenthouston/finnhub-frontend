import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function NavTabs(currentPage){
    let active = '';

    return(
        <div className="nav ">
            <h4 
                className="logo">FinHub
            </h4>
        <ul className="links col d-flex justify-content-end">
            <li className="nav-item px-4 mt-4">
                <Link className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#65293d' : '#7f7c3d'}} to="/">Home</Link>
            </li>
            <li className="nav-item px-4 mt-4">
                <Link className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#65293d' : '#7f7c3d'}} to="/Profile/noUser">Profile</Link>
            </li>
            <li className="nav-item px-4 mt-4">
                <Link className={currentPage === 'ChatHub' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#65293d' : '#7f7c3d'}} to="/ChatHub">ChatHub</Link>
            </li>
            <li className="nav-item px-4 mt-4">
                <Link className={currentPage === 'Signals' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#65293d' : '#7f7c3d'}} to="/Signals">Signals</Link>
            </li>
            
        </ul>
        </div>

    )
}

export default NavTabs;