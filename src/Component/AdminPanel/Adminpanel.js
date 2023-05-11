import React,{useState} from "react";
import { NavLink } from "react-router-dom";

import "./admin.css";

export default function Adminpanel() {  
    const [toggle,setToggle]=useState(true)
  const Toggle=()=>{  
    setToggle(!toggle)
  }
  return (
    <div className="container-fluid">
      <div className="row" >
      {toggle &&  <div  className="col-md-3 sticky-top"  >
          <i
            className="bi bi-bar-chart-steps"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          ></i>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header text-center">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                <i className="bi bi-back"></i> React Admin
              </h5>
         <div>
         <i className="bi bi-back" onClick={Toggle}></i> 
         </div>
              <button
                type="button"
                className="btn-close text-reset d-lg-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="nav flex-column">
                <li className="nav-item d-flex align-items-center">
                <i class="bi bi-speedometer"></i>
                  <NavLink className="nav-link"  to="/">
                   Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/userlist"> 
                  <i class="bi bi-person-lines-fill"></i>  User List
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/adduser">
                  <i class="bi bi-person-add"></i>  Add User
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/settings">
                  <i class="bi bi-sliders"></i>  Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mr-4" to="/table">
                  <i class="bi bi-table "></i>  Tables
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/userprofile">
                  <i class="bi bi-person-bounding-box"></i>  User Profile
                  </NavLink>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  );
}
