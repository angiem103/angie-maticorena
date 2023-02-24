import React from "react";
import {render} from "react-dom";
import {Router, Link} from "@reach/router";

function Navbar() {

    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="aboutme">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="contactme">Contact Me</Link>
        </div>
    )

}

export default Navbar;