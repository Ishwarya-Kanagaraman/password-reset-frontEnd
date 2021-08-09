import React,{useState} from "react";
import "./register.css";
import {Link} from "react-router-dom"
export default function Register() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');
 const handleLogin=()=>{
   const user={
     email,
     password
   }
   console.log(user)
   fetch("https://password-reset-my-server.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => setMessage(res.message));
 }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 col-sm-12 form">
         
          <div className="row">
            <div  className="col-md-6 col-sm-12">
            <th>
                <label htmlFor="FirstName">
                  <h3>Email-Id:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
            <td>
                {" "}
                <input onInput={(e)=>setEmail(e.target.value)}type="text" />
              </td>
            </div>
          </div>
          <div className="row">
            <div  className="col-md-6 col-sm-12">
            <th>
                <label htmlFor="FirstName">
                  <h3>Password:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
            <td>
                {" "}
                <input  onInput={(e)=>setPassword(e.target.value)}type="password" />
              </td>
            </div>
          </div>
          <div className="row">
              <div className="col-md-2 col-sm-12"></div>
              <div className="col-md-8 col-sm-12">
                  <button type="button" onClick={handleLogin}className="btn btn-block btn-success">Login</button>
              </div>
              <div className="col-md-2 col-sm-12"></div>
          </div>
          <div className="row">
         
              <div className="col-md-12 col-sm-12">
                  <Link className="loginLink" to="/forgot-password">Forgot Password ?  </Link>
              </div>
             
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="message">{message}</h2>
            </div>
          </div>
         
        </div>
        <div className="col-md-4 col-sm-12">
      </div>
      </div>
     
    </div>
  );
}
