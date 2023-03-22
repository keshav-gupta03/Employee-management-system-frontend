import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import React from 'react';
function ViewEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [designation,setDesignation]=useState("");
  const [id, setId] = useState("");
  const [profileImage,setprofileImage] = useState("");

  var url = new URL(window.location.href);
  let param =url.searchParams.get("a");

  useEffect(() => {
    console.log(param);
    EmployeeService.getEmployeeById(param).then(
      (res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
        setDesignation(res.data.designation);
        setId(res.data.id);
        setprofileImage(res.data.profileImage);
        console.log(res.data.profileImage);
      },
      (err) => console.log(err)
    );
  },[]);

  function download(){
    EmployeeService.downloadInformation(param).then((res)=>{
      console.log( "res    -----"+ res.data);
    },
    (err) => {
      console.log("Error" + err);
    });
  }

  

  return <div>
    <h3 className="text-center mt-3">View Employee Details</h3>


          <div className="col-md-4 offset-md-4 mt-3" style={{"border":"1px solid black","maxWidth":"400px" }}>
            <div className="row d-flex justify-content-center" >
            <div className="d-flex justify-content-center  " ><img alt="Profile image" src={profileImage} class="img-fluid"  height={100} width={100}   style={{"borderRadius":"100/2"}} /></div>
            </div>
            <div className="row mt-3">
            <div className="d-flex justify-content-center ">
                  <label>First Name :<b> {firstName} </b></label>
              </div>
              <div className="d-flex justify-content-center mt-2">
                  <label>Last Name :<b> {lastName} </b></label>
              </div>
              <div className="d-flex justify-content-center mt-2 ">
                  <label> Email id :<b> {emailId} </b></label>
              </div>
              <div className="d-flex justify-content-center mt-2 mb-3">
                  <label>Designation :<b> {designation} </b></label>
              </div>
            </div>
          </div>

          <div className="my-2 mx-2 d-flex justify-content-center">
            <button className="btn btn-info btn-sm" onClick={download}> Download information</button>
          </div>
  </div>;
}
export default ViewEmployee;
