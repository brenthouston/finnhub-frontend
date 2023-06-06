import React from 'react';

function CardDetail(props) {
  return (
    <div style={{background: "var(--primary)", z_index:"-1"}}>
      <img 
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: '0 auto', background: "white"}}
      />
      <p style={{color:"var(--bgGrn)"}}>Source: {props.source}</p>
      <p style={{color:"var(--accentPlum)"}}>Summary: <p style={{color:"var(--bgGrn)", fontSize:"14px"}}>{props.summary}</p></p>
      <p style={{color:"var(--accentPlum)", fontSize:"1rem"}}>Sentiment: <h4>{props.sentiment}</h4></p>
      <a target = '_blank' href={props.url}style={{color:"var(--accentPlum)", font_size:"5px"}}>Go to article </a>
    </div>
  );
}

export default CardDetail;
