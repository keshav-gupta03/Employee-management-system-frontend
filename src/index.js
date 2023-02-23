import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";
import Login from "./components/Login";
import { Toast } from "bootstrap";
import CreateAccount from "./components/CreateAccount";
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/" element={<Login/>}/>
      <Route path="/create-account" element={<CreateAccount/>}/>
      <Route path="/employees" element={<ListEmployeeComponent />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/update-employee" element={<UpdateEmployee />} />
      <Route path="/view-employee" element={<ViewEmployee />} />
    </Routes>
    {/* <Footer />   */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
