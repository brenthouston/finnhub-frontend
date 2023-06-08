import axios from 'axios';
import dayjs from 'dayjs'



async function getSearch(query) {
let date = dayjs().format("YYYY-MM-DD")
console.log(query);
try{
  const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${query}/range/1/day/2022-05-05/${date}?adjusted=true&sort=desc&limit=120&apiKey=${process.env.REACT_APP_CHART_API}`);  
console.log('API response: ',response);


return(response)
} catch (error) {
  console.error(error);
}
} 



export default { getSearch };