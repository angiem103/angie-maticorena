import React from "react";
import { Link} from "@reach/router";

function Navbar() {

    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="about">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="contactme">Contact Me</Link>
        </div>
    )

}

export default Navbar;