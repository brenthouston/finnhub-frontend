import React from 'react';

function CardDetail(props) {
  return (
    <div style={{}}>
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: '0 auto' }}
      />
      <p>Source: {props.source}</p>
      <p>Summary: {props.summary}</p>
      <p>Sentiment: {props.sentiment}</p>
      <p>Url: {props.url}</p>
    </div>
  );
}

export default CardDetail;
