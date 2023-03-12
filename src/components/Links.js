import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareGithub, faMedium } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
function Links() {
    return (
        <div id="socialmedia">
            <a href="https://www.linkedin.com/in/angiematicorena" className="icon">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            < a href="https://github.com/angiem103" className="icon">
                <FontAwesomeIcon icon={faSquareGithub} size="3x"/>
            </a>
            < a href="https://medium.com/@amaticorena103" className="icon">
                <FontAwesomeIcon icon={faMedium} size="3x"/>
            </a>
            <a href="mailto:amaticorena3@gmail.com" className="icon">
                <FontAwesomeIcon icon={faSquareEnvelope} size="3x"/>
            </a>
        </div>
    );
};

export default Links;