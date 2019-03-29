import React from "react";
import logo from "./images/space-invaders-svgrepo-com.svg";
import "./style.css";


const Nav = () => 
    <nav className="nav nav-justified navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-primary">
        <span className="nav-item" id="title"> RETRO-CLICK</span>
        <img className="nav-item" src={logo} id="logo" alt="logo" />
        <div className="nav-item" >Score: 0 | Top Score: 0</div>
    </nav>

export default Nav;
