import React from "react";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    <div className=" row navigation" id="navigation">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">portfolio </NavLink>
        <NavLink to="/contact">contact </NavLink>
        <NavLink to="/resume">resume</NavLink>
    </div>
}
export default Navigation