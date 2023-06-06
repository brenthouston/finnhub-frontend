import React from 'react'
import './style.css';



export default function Card(props) {

  return (
    <div className="card" style={{border:"var(--bgGrn)"}}>
      <div className="card-header" style={{background:"var(--cardGrn)", color:"var(--primary)"}}>
        <h4 style={{fontSize:"1rem"}}>{props.heading}</h4>
      </div>
      <div className="card-body" style={{background:"var(--primary)"}}>{props.children}</div>
    </div>
  );
  
}