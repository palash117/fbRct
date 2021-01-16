import React from "react";
import Login from "./Login";

const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">Google signin test</div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Login></Login>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
