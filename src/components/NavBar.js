import React from "react";

function NavBar({onLogoClick, onProfileClick}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between">
          <div onClick={() => onLogoClick()}> 
            <h4><i className="fa fa-flash"></i> three pics</h4>
          </div>
          <div onClick={() => onProfileClick()}>
            <span><i className="fa fa-user-circle-o" style={{ fontSize: "30px" }}></i></span>
          </div>
        </div>
      </nav>
    );
  }
export default NavBar;
