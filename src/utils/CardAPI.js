import axios from "axios";

async function FinancialMarkets() {
  try {
    const response =  await axios.get(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=finacial_markets&sort=LATEST&limit=8&apikey=${process.env.REACT_APP_SIGNALS_API}`
    );
     
    return response;
  } catch (error) {
    console.error(error);
  }
}

// const FinancialMarkets = async ()=>
// axios.get(
//         `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=finacial_markets&sort=LATEST&limit=8&apikey=B69YYGDXTYZTC5W0`
//       );
     

export default { FinancialMarkets };

// APIKEY/Insider trading info ALetheia/ 30ACDAD2C423493EA5BAA6B72B997A18

// ALPHA VANTAGE APIKEY B69YYGDXTYZTC5W0
