import React from "react";
import { Link } from "gatsby";

function Navbar() {

    return (
        <nav id="navbar" >
            <Link to="/" className="tabs">Home</Link>
            <Link to="/about" className="tabs">About Me</Link>
            <Link to="projects" className="tabs">Projects</Link>
            <Link to="contactme" className="tabs">Contact Me</Link>
        </nav>
    )

}

export default Navbar;