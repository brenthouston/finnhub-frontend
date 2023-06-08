import axios from 'axios';

async function search(query) {
console.log(query);
try{
  const response = await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=${query}&api_token=${process.env.REACT_APP_TICKER_API}`);  
console.log('API response: ',response);


return(response)
} catch (error) {
  console.error(error);
}
} 



export default { search };

// wLJzNuB6aqvHUSJqnuS90h3kW5AXSm6FAObVPzEY
// NGW0og3skFFNb4s1HIUyo3kxQCoOb6CFAZRpFdQ3
// bmcYegFuvEDUqj5wvMuc3kUQ7ksdttVgMDIEbTUF