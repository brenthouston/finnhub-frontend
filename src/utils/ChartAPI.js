import axios from 'axios';

async function getSearch(query) {
console.log(query);
try{
  const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&apikey=B69YYGDXTYZTC5W0`);  
console.log('API response: ',response);


return(response)
} catch (error) {
  console.error(error);
}
} 



export default { getSearch };