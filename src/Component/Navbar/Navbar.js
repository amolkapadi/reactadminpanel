import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React Form</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to='/multiform'>Multiple Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/loginform'>Login Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/registerform'>Register Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/api'>Fetch API</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/searchproduct'>Search Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/price'>Price Section</NavLink>
        </li>
       
    
      </ul>
   
    </div>
  </div>
</nav>
    </>
  );
}
