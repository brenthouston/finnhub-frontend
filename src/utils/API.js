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
    updateProfilePic:async (username,url)=>{
        try{
         const response = await axios.put(`${URL_PREFIX}/api/users/username/profilepic/${username}`,
         {
            profile_pic: url,
            })
        return response
        }
        catch(err){
            throw new Error("falied login");

        }
    },
    updateProfileBio:async (username,bio,itype,fav)=>{
        try{
         const response = await axios.put(`${URL_PREFIX}/api/users/bio/${username}`,{
            investor_type:itype,
            fav_stock:fav,
            description:bio
         })
        return response
        }
        catch(err){
            throw new Error("falied login");

        }
    },
    createStock:async (stock)=>{
        try{
         const response = await axios.post(`${URL_PREFIX}/api/stocks/`,{
            ticker:stock
         })
        return response
        }
        catch(err){
            throw new Error("falied login");

        }
    },
    findStockTicker:async(ticker)=>{
        try{
         const response = await axios.get(`${URL_PREFIX}/api/stocks/ticker/${ticker}`,{
         })
        return response
        }
        catch(err){
            throw new Error("That stock wasnt in the database");

        }
    },
    addStock:async(user,stock)=>{
        try{
         const response = await axios.post(`${URL_PREFIX}/api/users/${user}/stock/${stock}`,{
         })
        return response
        }
        catch(err){
            throw new Error("That stock wasnt in the database");

        }
    },
  }






export default API