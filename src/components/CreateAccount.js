import "./CreateAccount.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateAccount() {
  var emp = {};
  let navigate = useNavigate();
  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emp.emailId.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  function getFirstName(event) {
    emp.firstName = event.target.value;
    document.getElementById("FirstName").innerHTML = "";
    document.getElementById("FirstName1").style.border = "1px solid black";
  }

  function getLastName(event) {
    emp.lastName = event.target.value;
    document.getElementById("LastName").innerHTML = "";
    document.getElementById("LastName1").style.border = "1px solid black";
  }

  function getEmail(event) {
    emp.emailId = event.target.value;
    document.getElementById("Email").innerHTML = "";
    document.getElementById("Email1").style.border = "1px solid black";
  }

  function getDesignation(event) {
    emp.designation = event.target.value;
    document.getElementById("designation").innerHTML = "";
    document.getElementById("designation1").style.border = "1px solid black";
  }

  function getPassword(event) {
    emp.password = event.target.value;
    document.getElementById("password").innerHTML = "";
    document.getElementById("password1").style.border = "1px solid black";
  }

  function getPassword1(event) {
    emp.password1 = event.target.value;
    document.getElementById("conpassword").innerHTML = "";
    document.getElementById("conpassword1").style.border = "1px solid black";
  }

  function register() {
    if (document.getElementById("FirstName1").value == "") {
      document.getElementById("FirstName1").style.border = "1px solid red";
      document.getElementById("FirstName").innerHTML = "Enter Last Name";
      return;
    } else if (document.getElementById("LastName1").value == "") {
      document.getElementById("LastName1").style.border = "1px solid red";
      document.getElementById("LastName").innerHTML = "Enter Last Name";
      return;
    } else if (document.getElementById("Email1").value == "") {
      document.getElementById("Email1").style.border = "1px solid red";
      document.getElementById("Email").innerHTML = "Enter Email";
      return;
    }else if (document.getElementById("designation1").value == "") {
      document.getElementById("designation1").style.border = "1px solid red";
      document.getElementById("designation").innerHTML = "Enter Designation";
      return;
    }
     else if (document.getElementById("password1").value == "") {
      document.getElementById("password1").style.border = "1px solid red";
      document.getElementById("password").innerHTML = "Enter First Name";
      return;
    } else if (document.getElementById("conpassword1").value == "") {
      document.getElementById("conpassword1").style.border = "1px solid red";
      document.getElementById("conpassword").innerHTML = "Enter First Name";
      return;
    } else {
      if(ValidateEmail(emp.emailId)){
        if(emp.password==emp.password1){
          EmployeeService.createEmployee(emp).then(
            (res) => {
              // console.log(res.data+'HI'+res.status);
              // console.log("Employee " + emp.emailId + " add successfully");
              alert(res.data);
              navigate("/");
            },
            (err) => {
              alert(err);
              console.log(err);
            }
          );
        }
        else{
          alert("password should be same")
        }
      }
      else{
        alert("You have entered an invalid email address!");
      }
      
    }
  }
  return (
    <section className="vh-100 ">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ border_radius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example1cg"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="FirstName1"
                        class="form-control form-control-lg"
                        onChange={getFirstName}
                      />
                      <div>
                        <p id="FirstName" style={{ color: "red" }}></p>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example1cg"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="LastName1"
                        class="form-control form-control-lg"
                        onChange={getLastName}
                      />
                      <div>
                        <p id="LastName" style={{ color: "red" }}></p>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example3cg"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="Email1"
                        className="form-control form-control-lg"
                        onChange={getEmail}
                      />
                      <div>
                        <p id="Email" style={{ color: "red" }}></p>
                      </div>
                    </div>


                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example3cg"
                      >
                        Designation
                      </label>
                      <input
                        type="email"
                        id="designation1"
                        className="form-control form-control-lg"
                        onChange={getDesignation}
                      />
                      <div>
                        <p id="designation" style={{ color: "red" }}></p>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example4cg"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password1"
                        className="form-control form-control-lg"
                        onChange={getPassword}
                      />
                      <div>
                        <p id="password" style={{ color: "red" }}></p>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        className="form-label fw-bold"
                        for="form3Example4cdg"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="conpassword1"
                        className="form-control form-control-lg"
                        onChange={getPassword1}
                      />
                      <div>
                        <p id="conpassword" style={{ color: "red" }}></p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={register}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <NavLink to="/">
                          <u>Login here</u>
                        </NavLink>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CreateAccount;
