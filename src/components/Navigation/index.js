import React from "react";
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
    <div className="row navigation" id="navigation">
        <Link to="/about">About</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/contact">contact</Link>
        <Link to="/resume">resume</Link>
    </div>
    )
}
export default Navigation