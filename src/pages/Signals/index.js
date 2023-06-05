import React from "react";
import "./style.css";
import Card from "../../Components/SignalsCard/index.js";
import { useState, useEffect } from "react";
import CardAPI from "../../utils/CardAPI";
import CardDetail from "../../Components/CardDetail";

export default function Signals() {
  const [result, setResult] = useState({
    title: "",
    url: "",
    summary: "",
    banner_image: "",
    source: "",
    overall_sentiment_label: "",
  });

  const populate = () => {
    CardAPI.FinancialMarkets()
      .then((res) => setResult(res.data.feed[0]))
      .catch((err) => console.log(err));
    console.log(result);
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
      <div className="col-6">
      {/* SignalCards */}
      {result.title ? (
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
      ) : null}
      </div>
      <div className="col-6">
      {/* SignalCards */}
      {result.title ? (
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
      ) : null}
      </div>
      </div>
    </div>
  );
}
