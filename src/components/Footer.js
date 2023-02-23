import "../App.css";
import React from 'react';
import "./Footer.css"
function Footer() {
  return (
    <footer className="font-small blue bg-dark footer">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div claclassNamess="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase text-white">keshav Gupta</h5>
            <p className="text-white">
              Welcome to Employee management System
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-white text-center ">
        © 2020 Copyright:
        <a href=""> keshavGupta.com</a>
      </div>
    </footer>
  );
}
export default Footer;
