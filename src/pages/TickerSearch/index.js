import TickSearch from "../../utils/TickSearch";
import API from "../../utils/API";
import "./style.css";
import Error from "../../Components/Error";
import { useState } from "react";
import Chart from "react-apexcharts";
import ChartAPI from "../../utils/ChartAPI";

const TickerSearch = (props) => {
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [day_high, setDay_high] = useState("");
  const [day_low, setDay_low] = useState("");
  const [day_open, setDay_open] = useState("");
  const [day_change, setDay_change] = useState("");
  const [volume, setVolume] = useState("");
  const [show, setShow] = useState(false);
  const [errorMsg, setErrMsg] = useState("");

  async function searchTicker(query) {
    try {
      const response = await TickSearch.search(query);

 
      if (response.data.data.length != 0) {
        setName(response.data.data[0].name);
        setPrice(response.data.data[0].price);
        setDay_high(response.data.data[0].day_high);
        setDay_low(response.data.data[0].day_low);
        setDay_open(response.data.data[0].day_open);
        setDay_change(response.data.data[0].day_change);
        setVolume(response.data.data[0].volume);
       
        createOrupdate(
          search,
          response.data.data[0].price,
          response.data.data[0].day_high,
          response.data.data[0].day_low,
          response.data.data[0].day_open,
          response.data.data[0].day_change,
          response.data.data[0].volume
        );
      } else {
        setShow(true);
        setErrMsg("Not a valid stock");
        setSearch("");
        return;
      }
    } catch (err) {
      console.log(err);
    }
    loadChart(query);
  }
  // Chart api pull

  async function loadChart(query) {
    try {
      const data = await ChartAPI.getSearch(query);

      const results = data.data.results;

      results.forEach((obj) => {
        const { o, h, l, c, t } = obj;
        const open = `${o}`;
        const close = `${c}`;
        const low = `${l}`;
        const high = `${h}`;

        const prices = {
          x: t,
          y: [open, high, low, close],
        };
        const myPrices = Object.values(prices);

        setSeries((prevState) => [...prevState, myPrices]);

       
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createOrupdate(sr, p, dh, dl, d_o, c, v) {
    try {
      const response = await API.findStockTicker(sr);
      console.log("already in the database");
      const updatedStock = await API.updateStock(sr, p, dh, dl, d_o, c, v);
      console.log("updated stock response", updatedStock);
    } catch (err) {
      if (err.toString() === "Error: That stock wasnt in the database") {
        const createdStock = await API.createStock(
          search,
          p,
          dh,
          dl,
          d_o,
          c,
          v
        );
      }
      console.log(err);
    }
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value.toUpperCase());
  };

  function handleButton(event) {
    event.preventDefault();
    if (search != "") {
      searchTicker(search);
    } else {
      setShow(true);
      setErrMsg("Please enter a stock");
    }
  }

  async function saveStock() {
    try {
      if (search != "") {
        const response = await API.findStockTicker(search);
        const stockId = response.data._id;
        const addStock = await API.addStock(props.userId, stockId);
      } else {
        setShow(true);
        setErrMsg("Please search for a stock first");
      }
    } catch (err) {
      console.log(err);
    }
  }
  const chart = {
    series: [
      {
        data: [],
      },
    ],
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#253f30',
          downward: '#65293d'
        },
        wick: {
          useFillColor: true,
        }
      }
    },
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart (DAILY)",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h1 style={{ fontWeight: "lighter" }}>Ticker Search</h1>
          <h3>Get Today's Report</h3>
        </div>

        <div className="col">
          <div className="d-flex justify-content-end">
            <form className="col card" style={{ background: "var(--cardGrn)" }}>
              <div className="form-group p-2">
                <p style={{ padding: "0", color: "#7f7c3d", fontSize: "22px" }}>
                  Search for Ticker
                </p>
                <input
                  onChange={handleInputChange}
                  value={search}
                  type="text"
                  className="form-control"
                  placeholder="Enter Ticker"
                ></input>
                <button
                  onClick={handleButton}
                  type="submit"
                  className="btn"
                  style={{
                    background: "#65293d",
                    color: "#d8d1bc",
                    display: "flex",
                    padding: "0",
                  }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Chart & Ticker info */}

      <div className="row ">
        {/* Chart */}

        <div
          className="col-6 card mt-5"
          style={{ height: "348px", background: "var(--accentLight)" }}
        >
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={chart.options}
                  series={[{
                    data: series
                  }]}
                  type="candlestick"
                  width="100%"
                  height="320px"
                  
                />
              </div>
            </div>
          </div>
        </div>
        {/* Ticker Info */}
        <div className="col p-4 g-4 ">
          <div className="text-center">
            <h1
              style={{
                fontWeight: "lighter",
                fontSize: "2rem",
                marginLeft: "0",
              }}
            >
              {name}
            </h1>

            <div
              className="row "
              style={{ padding: "0", marginTop: "0", marginRight: "0" }}
            >
              <div className="col text-start">
                <ul>
                  <li>
                    <p>Price</p>
                  </li>
                  <li>
                    <p>High</p>
                  </li>
                  <li>
                    <p>Low</p>
                  </li>
                  <li>
                    <p>Open</p>
                  </li>
                  <li>
                    <p>Day change</p>
                  </li>
                  <li>
                    <p>Volume</p>
                  </li>
                </ul>
              </div>
              <div className="col text-end">
                <ul>
                  <li>
                    <p>{price}</p>
                  </li>
                  <li>
                    <p>{day_high}</p>
                  </li>
                  <li>
                    <p>{day_low}</p>
                  </li>
                  <li>
                    <p>{day_open}</p>
                  </li>
                  <li>
                    <p>{day_change}</p>
                  </li>
                  <li>
                    <p>{volume}</p>
                  </li>
                </ul>
              </div>
              {props.username && (
                <button
                  onClick={saveStock}
                  className="btn"
                  style={{
                    background: "#65293d",
                    color: "#d8d1bc",
                    display: "flex",
                    padding: "0",
                  }}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <p style={{ color: "#7f7c3d", fontSize: "14px" }}>
        Disclaimer: Trading in equities is risky. Information provided on this
        website does not constitute investment advice. There is no guarantee of
        profits and we will not be responsible for any losses incurred or
        decisions made based on the information provided here. Past performance
        is not an indicator of future returns. Take trading advice at your own
        risk.{" "}
      </p>
      <Error errorMsg={errorMsg} show={show} setShow={setShow} />
    </div>
  );
};
export default TickerSearch;
