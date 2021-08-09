import React,{useState} from 'react'
import { useParams } from 'react-router';
import './register.css'
export default function ResetPassword() {
   const {token}=useParams();
    const [message,setMessage]=useState('');
    const [newPassword,setNewPassword]=useState('');
    
   const handleReset=()=>{
    const userData={
        token,
        newPassword
    }
    console.log(userData)
     fetch("https://password-reset-my-server.herokuapp.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then((res) => res.json())
        .then((res) => setMessage(res.message))
   }
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-12 form">
            <div className="row">
              <div  className="col-md-6 col-sm-12">
              <th>
                  <label htmlFor="FirstName" placeholder="Enter new password">
                    <h3>New Password:</h3>
                  </label>
                </th>
              </div>
              <div className="col-md-6 col-sm-12">
              <td>
                  {" "}
                  <input  onInput={(e)=>setNewPassword(e.target.value)}type="password" />
                </td>
              </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-sm-12"></div>
                <div className="col-md-8 col-sm-12">
                    <button type="button" onClick={handleReset}className="btn btn-block btn-success">Reset Password</button>
                </div>
                <div className="col-md-2 col-sm-12"></div>
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
    )
}
