import React from "react";
import "./style.css";
import Card from "../../Components/SignalsCard/index.js";
import { useState, useEffect } from "react";
import CardAPI from "../../utils/CardAPI";
import CardDetail from "../../Components/CardDetail";

export default function Signals() {
  const [results, setResults] = useState([]);

  const populate = () => {

    
    CardAPI.FinancialMarkets()
      .then((res) => {
        console.log(res.data.feed);
        setResults(res.data.feed);
      })
      .catch((err) => console.log(err));
   
   
 
};
  useEffect(() => {
    populate();
  }, []);



  return (
    <div className="container">
      <div className="col-9">
        <h1 style={{ fontWeight: "lighter" }}>Signals</h1>
        <h3>Market News and Sentiment</h3>
      </div>
       <div className="row">
        {results.slice(1,10).map((result, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
            {result.title && (
              <Card heading={result.title}>
                <CardDetail
                  title={result.title}
                  src={result.banner_image}
                  source={result.source}
                  summary={result.summary}
                  sentiment={result.overall_sentiment_label}
                  url={result.url}
                />
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
