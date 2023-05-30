import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function NavTabs(currentPage){
    let active = '';

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item px-4">
                <Link className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#a19f7a' : '#65293d'}} to="/">Home</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#a19f7a' : '#65293d'}} to="/">Profile</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'ChatHub' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#a19f7a' : '#65293d'}} to="/">ChatHub</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'Signals' ? 'nav-link active' : 'nav-link'} style={{color: active ? '#a19f7a' : '#65293d'}} to="/">Signals</Link>
            </li>
            
        </ul>
    )
}

export default NavTabs;