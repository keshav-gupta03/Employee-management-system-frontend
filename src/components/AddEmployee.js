import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import EmployeeService from "../services/EmployeeService";
import React  from 'react';
function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [designation,setDesignation] =useState("");
  let navigate = useNavigate();
  function save() {
    if(firstName==""){
      document.getElementById("firstName").innerHTML="please enter first name";
      return
    }
    else if(lastName==""){
      document.getElementById("lastName").innerHTML="please enter last name";
      return
    }
    else if(emailId==""){
      document.getElementById("email").innerHTML="please enter email";
      return
    }
    const employee = { firstName, lastName, emailId ,designation};
    EmployeeService.createEmployee(employee).then(
      (res) => {
        console.log(res.data);
        console.log("Employee " + employee.emailId + " add successfully");
        alert("Employee " + employee.emailId + " add successfully");
        navigate("/employees");  
      },
      (err) => {
        alert(err);
        console.log(err);
      }
    );
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    onChange={(event) =>{ setFirstName(event.target.value); document.getElementById("firstName").innerHTML=""}}
                  ></input>
                  <p style={{color:"red"}} id="firstName"></p>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    onChange={(event) => {setLastName(event.target.value); document.getElementById("lastName").innerHTML=""}}
                  ></input>
                  <p style={{color:"red"}} id="lastName"></p>
                  <label>Email Id</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    onChange={(event) => {setEmailId(event.target.value); document.getElementById("email").innerHTML=""}}
                  ></input>
                  <p style={{color:"red"}} id="email"></p>

                  <label>designation</label>
                  <input
                    type="text"
                    placeholder="Designation"
                    name="designation"
                    className="form-control"
                    onChange={(event) => {setDesignation(event.target.value); document.getElementById("designation").innerHTML=""}}
                  ></input>
                  <p style={{color:"red"}} id="designation"></p>


                </div>

                <button className="btn btn-success mt-2"  type="button" onClick={save}>
                  Save
                </button>
                <Link to="/employees">
                  <button className="btn btn-danger mt-2 ms-3">Cancel</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddEmployee;
