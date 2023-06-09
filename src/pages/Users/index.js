import React, {useEffect, useState} from "react";
import "./style.css";
import UsersCard from "../../Components/Users";
import API from '../../utils/API'


export default function Users() {

  const [allUsers, setAllUsers] = useState([])
  

  useEffect(()=>{
    findUsers()
    console.log(allUsers)
    
  },[])

  async function findUsers(){
    try{
      const response = await API.getAllUsers()
      setAllUsers(response.data)
    }catch(err){
      console.log(err)
    }
  
  }


  return (
    <div className="container">
         <div className="col-9">
        <h1 style={{ fontWeight: "lighter" }}>Users</h1>
        <h3 style={{marginBottom: "10px"}}>Explore the Community!</h3>
      </div>
      <hr style={{color: "var(--primary)"}}></hr>
      <div className="row">
      {allUsers.map((user, i) => {
            return (
              <UsersCard key = {user._id} profilePic= {user.profile_pic} username={user.username} investType = {user.investor_type}/>
           );
          })}
     
          </div>

    </div>
  );
}
