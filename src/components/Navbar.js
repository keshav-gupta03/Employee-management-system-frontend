import Nav from "react-bootstrap/Nav";
import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
function Navbar() {
  const [bool, setBool] = useState(false);
  let navigate = useNavigate();
  const [id,setId]=useState();
  useEffect(() => {
    if (localStorage.id) {
      setId(localStorage.getItem("id"))
      setBool(true);
    }
  });
  function logout() {
    if(!window.confirm("do you want to logout")){
      return
    }
    
    setBool(false);
    localStorage.clear();
    navigate("/");
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "relative" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./Employee_managment_logo.jpg" width={100} height={50} style={{borderRadius:90}}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/home">
                {" "}
                Home
              </NavLink>
            </li>
            {bool && (
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/employees">
                  {" "}
                  Employees List{" "}
                </NavLink>
              </li>
            )}

            {bool && (
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/add-employee">
                  Add Employee{" "}
                </NavLink>
              </li>
            )}
            {bool && (
              <li className="nav-item ">
                <NavLink className="nav-link active" to={`/view-employee?a=${id}`}>
                  view profile{" "}
                </NavLink>
              </li>
            )}
          </ul>
          <form className="d-flex">
            {bool && (
              <a
                className="btn btn-danger"
                onClick={logout}
                aria-current="page"
              >
                Log out
              </a>
            )}
            {!bool && (
              <NavLink className="nav-link active" to="/">
                <a className="btn btn-success" aria-current="page">
                  Login
                </a>
              </NavLink>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
