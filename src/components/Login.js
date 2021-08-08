import React from "react";
import "./register.css";
import {Link} from "react-router-dom"
export default function Register() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-md-3 col-sm-12"></div> */}
        <div className="col-md-8 col-sm-12 form">
          {/* <table>
            <tr>
              <th>
                <label htmlFor="FirstName">
                  <h3>First Name:</h3>
                </label>
              </th>
              <td>
                {" "}
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label htmlFor="lastName">
                  <h3>Last Name:</h3>
                </label>
              </th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label htmlFor="Email">
                  <h3>Email:</h3>
                </label>
              </th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label htmlFor="Password">
                  <h3>Password:</h3>
                </label>
              </th>
              <td>
                {" "}
                <input type="password" />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="Mobile">
                  <h3>Mobile:</h3>
                </label>
              </th>
              <td>
                {" "}
                <input type="number" />
              </td>
            </tr>
          </table> */}
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
                <input type="text" />
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
                <input type="password" />
              </td>
            </div>
          </div>
          <div className="row">
              <div className="col-md-2 col-sm-12"></div>
              <div className="col-md-8 col-sm-12">
                  <button type="button" className="btn btn-block btn-success">Login</button>
              </div>
              <div className="col-md-2 col-sm-12"></div>
          </div>
          <div className="row">
          {/* <div className="col-md-2 col-sm-12"></div> */}
              <div className="col-md-12 col-sm-12">
                  <Link className="loginLink" to="/login">Forgot Password ?  </Link>
              </div>
              {/* <div className="col-md-2 col-sm-12"></div> */}
          </div>
          {/* <div className="row">
              <div className="col-md-4 col-sm-12"></div>
              <div className="col-md-4 col-sm-12">
                  <button type="button" className="btn btn-success btn-block">Login</button>
              </div>
              <div className="col-md-4 col-sm-12"></div>
          </div> */}
          {/* <div className="row">
          <div className="col-md-4 col-sm-12"></div>
              <div className="col-md-4 col-sm-12">
                  <Link to="/login"> Forgot Password ?  </Link>
              </div>
              <div className="col-md-4 col-sm-12"></div>
          </div> */}
        </div>
        <div className="col-md-4 col-sm-12">
      </div>
      </div>
     
    </div>
  );
}
