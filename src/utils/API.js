import axios from 'axios'

const URL_PREFIX = "http://localhost:3001"

const API = {
    getUserByName:async(username)=>{
        try{
            const response = await axios.get(`${URL_PREFIX}/api/users/username/${username}`)
            console.log(response)
            return (response)
        }catch (err){
            console.log(err)
        }
    },

    verifyToken:async(token)=>{
    try{
        const response = await axios.get(`${URL_PREFIX}/api/users/verifytoken`,{
          headers:{
              "authorization":`Bearer ${token}`
          }
      })
      return(response)

    }catch(err){
        console.log(err)
    }
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
    },
    signup:async (username,password,email)=>{
        try{
         const response = await axios.post(`${URL_PREFIX}/api/users/`,
         {
            username: username,
            password:password,
            email:email
            })
        return response
        }
        catch(err){
            throw new Error("falied login");

        }
    },
  }






export default API