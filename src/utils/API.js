import axios from 'axios'

const URL_PREFIX = "http://localhost:3001"

const API = {
    getUserByName:async(username)=>{
        console.log('username in util',username)
        try{
            const response = await axios.get(`${URL_PREFIX}/api/users/username/${username}`)
            console.log(response)
            return (response)
        }catch (err){
            console.log(err)
        }
    },

    verifyToken:(token)=>{
     return axios.get(`${URL_PREFIX}/api/users/verifytoken`,{
        headers:{
            "authorization":`Bearer ${token}`
        }
    }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("falied signup");
        }
      });
  },
    login:async (username, password)=>{
        try{
         const response = await axios.post(`${URL_PREFIX}/api/users/login`,
         {
            username: username,
            password:password
            })
        return response
        }
        catch(err){
            throw new Error("falied login");

        }
        }
  }






export default API