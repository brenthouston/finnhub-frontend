import React, {useState,useEffect} from "react";
import "./style.css";
import axios from 'axios'
import API from '../../utils/API'



export default function Login(props) {


  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setemail] = useState('')

  function handleChange(e){
    if(e.target.name === 'username'){
      setUsername(e.target.value)
    }else if (e.target.name === 'password'){
      setPassword(e.target.value)
    }else if (e.target.name === 'email'){
      setPassword(e.target.value)
    }
  }

  async function handleLogin(e){
    console.log('pressed the login button')
    e.preventDefault()
    try{
      const response = await API.login(username,password)
      console.log(response)
      props.setToken(response.data.token)
      props.setUsername(response.data.user.username)
      props.setUserId(response.data.user._id)
      localStorage.setItem("token", response.data.token);


    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="col">
      <div className="container">
        <h3 style={{ marginLeft: "0", textAlign: "center", margin: "50px", fontSize:"4rem"}}>
          Welcome Back!
        </h3>
      </div>

      <div className="container col-lg-6 mb-5 mb-lg-0">
        <div className="card" style={{ background: "var(--cardGrn)" }}>
          <div
            className="card-body py-5 px-md-5"
            style={{ background: "var(--cardGrn)" }}
          >
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      name = 'username'
                      value = {username}
                      onChange={handleChange}
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label
                      className="form-label"
                      for="form3Example1"
                      style={{ color: "var(--primary)" }}
                    >
                      Username
                    </label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              {/* <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "var(--primary)" }}
                >
                  Email address
                </label>
              </div> */}

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  name = 'password'
                  value = {password}
                  onChange={handleChange}
                  type="password"
                  id="form3Example4"
                  className="form-control"
                />
                <label
                  className="form-label"
                  for="form3Example4"
                  style={{ color: "var(--primary)" }}
                >
                  Password
                </label>
              </div>

              {/* Submit */}
              <div className="d-flex justify-content-center">
                <button
                  onClick={handleLogin}
                  style={{
                    backgroundColor: "var(--accentPlum)",
                    color: "var(--primary)",
                  }}
                  type="submit"
                  className="btn mb-4"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
              <h3
                style={{ marginLeft: "0", textAlign: "center", color:"var(--accentDark)", margin:"20px", fontSize:"1.5rem"  }}
              >
                Trading. Connecting. Thriving.
              </h3>
            </div>
    </div>
  );
}