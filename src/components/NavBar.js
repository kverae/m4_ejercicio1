import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between">
          <div onClick={() => navigate("/")}> 
            <h4><i className="fa fa-flash"></i> three pics</h4>
          </div>
          <div onClick={() => navigate("/profile")}>
            <span><i className="fa fa-user-circle-o" style={{ fontSize: "30px" }}></i></span>
          </div>
        </div>
      </nav>
    );
  }
export default NavBar;
