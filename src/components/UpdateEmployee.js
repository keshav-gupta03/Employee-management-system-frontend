import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import EmployeeService from "../services/EmployeeService";
import React from "react";
function UpdateEmployee(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [emp, setEmp] = useState([]);
  const [id, setId] = useState("");
  const [profileImage,setprofileImage] =useState("");
  const [designation,setDesignation]=useState("");
  
  let navigate = useNavigate();
  var url = new URL(window.location.href);
  let param = url.searchParams.get("a");
  useEffect(() => {
    EmployeeService.getEmployeeById(param).then(
      (res) => {
        setEmp(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
        setId(res.data.id);
        setDesignation(res.data.designation);

      },
      (err) => console.log(err)
    );
  }, []);

  function upload(){
   
    EmployeeService.uploadFile(profileImage,id);
   
  }

  function update() {

    const employee = { firstName, lastName, emailId,designation};
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.emailId = emailId;
    employee.designation=designation;

    if (
      !window.confirm(
        "do you want to update " + firstName + " with id=" + param
      )
    ) {
      return;
    }
    
    EmployeeService.updateEmployee(employee, param).then((res)=>{
      alert("Employee updated successfully");
    },(err)=>{
      console.log("error in update employee : " + err);
    });
    navigate("/employees"); 
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  ></input>
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  ></input>
                  <label>Email Id</label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(event) => setEmailId(event.target.value)}
                  ></input>

                  <label>Designation</label>
                  <input
                    type="text"
                    placeholder="Designation"
                    name="designation"
                    className="form-control"
                    value={designation}
                    onChange={(event) => setDesignation(event.target.value)}
                  ></input>

                  <label>Image</label>
                  <div className="row">
                    <div className="col-10">
                    <input
                    type="file"
                    placeholder="Image "
                    name="image"
                    className="form-control"
                    onChange={(event) => setprofileImage(event.target.files[0])}
                  ></input>
                    </div>
                    <div className="col-2">
                  <button className="btn btn-sm btn-info" type="button" onClick={() => upload()}> upload</button>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-success mt-2"
                  type="button"
                  onClick={() => update()}
                >
                  update
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
export default UpdateEmployee;
