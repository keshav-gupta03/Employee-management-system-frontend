import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,navigate } from "react-router";
import {NavLink, Link } from "react-router-dom";
import React, { Component }  from 'react';
import EmployeeService from "../services/EmployeeService";

function Login() {
  var emp = {};
  var navigate=useNavigate();
  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emp.emailId.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  
  function getEmail(event) {
    emp.emailId = event.target.value;
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("email1").innerHTML = "";
  }
  function getPassword(event) {
    emp.password = event.target.value;
    document.getElementById("password").style.border = "1px solid black";
    document.getElementById("pass").innerHTML = "";
  }
  function login() {
    if (document.getElementById("email").value == "") {
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("email1").innerHTML = "Enter Email";
      return;
    } else if (document.getElementById("password").value == "") {
      document.getElementById("password").style.border = "1px solid red";
      document.getElementById("pass").innerHTML = "Enter Password";
      return false;
    }
    else{
      if(ValidateEmail(emp.emailId)){
        
        EmployeeService.getEmployeeByEmailId(emp.emailId).then(
          (res)=>{
           if(res.data.emailId==null){
            alert("email does not existttt");
           }
           else{
             if(emp.password==res.data.password){
               alert("login successful");
               localStorage.setItem("id",res.data.id);
              navigate("/home");
             }
             else{
               alert("wrong password");
             }
             
           }
            
        },
        (err) => {
          alert(err);
        });
      }
      else{
        alert("please enter a valid email address");
      }
    }
    
    
    
  }
  function onClick(e) {
    login();
    
  }

  return (
    <div>
      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" , backgroundColor: "LightGrey"}}
                
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-3">Login</h3>

                  <div className="form-outline ">
                  
                  <label className="form-label d-flex justify-content-start" for="typeEmailX-2">
                      
                    <b> Email</b>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      onChange={getEmail}
                    />
                   <div className="d-flex justify-content-start" >
                   <span id="email1" style={{ color: "red" }}></span> 
                   </div>
                    
                   
                  </div>

                  <div className="form-outline mb-4 mt-3">
                  <label className="form-label d-flex justify-content-start" for="typePasswordX-2">
                    <strong> Password </strong> 
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      onChange={getPassword}
                    />
                    <div className="d-flex justify-content-start">
                    <p id="pass" style={{ color: "red" }}></p>
                    </div>
                    
                    
                  </div>
                  <div className="">
                    <NavLink className="nav-link active fs-5 " to="/create-account">
                     Create Account   
                    </NavLink> 
                    </div>
                    <div>
                      <NavLink className="nav-link active " to="/add-employee">
                    <p>Forgot Password </p>
                    </NavLink>
                    </div>
                    
                  
                  

                  <button
                    className="btn btn-primary btn- btn-block"
                    type="submit"
                    onClick={onClick}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default  Login;
