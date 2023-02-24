import React from "react";
import { Link } from "gatsby";

function Navbar() {

    return (
        <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="contactme">Contact Me</Link>
        </nav>
    )

}

export default Navbar;