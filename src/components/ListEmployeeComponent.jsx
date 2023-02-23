import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router";
import React from 'react';
function ListEmployeeComponent(props) {
  let navigate = useNavigate();
  const [emp,setEmp]=useState([]);
  useEffect(() => {
    EmployeeService.getEmployees().then(
      (res) => {
        setEmp(res.data);
      },
      (err) => console.log(err)
    );
  },[]);

  function update(id) {
    navigate(`/update-employee?a=${id}`)
    // console.log(id);
  }

  function deleteEmp(id){
    EmployeeService.deleteEmployee(id);
    window.confirm("do you want to delete !!")
    emp.filter(employee => employee.id !== id);
    navigate("/employees");
  }

  function viewEmployee(id){
    navigate(`/view-employee?a=${id}`)
  }
  return (
    <div className="container bg-light mt-2">
      <h2 className="text-center">Employees List</h2>
      <div className="row mt-3">
        <table className="table table-striped table-bordered ">
          <thead>
            <tr align="center">
              <th>Employee First Name</th> 
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Employee Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((employee) => (
              <tr align="center" key={employee.id}>
                <td>{employee.firstName}</td>
                <td> {employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-success btn-sm"
                        type="button"
                        onClick={()=>update(employee.id)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-danger btn-sm" type="button" onClick={()=>deleteEmp(employee.id)}>
                        Delete 
                      </button>
                    </div>
                    <div className="col">
                      <button className="btn btn-info btn-sm" type="button" onClick={()=>viewEmployee(employee.id)}>view</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListEmployeeComponent;
