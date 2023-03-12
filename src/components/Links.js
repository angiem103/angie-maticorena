import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
function Links() {
    return (
        <div className="socialmedia">
            <a href="https://www.linkedin.com/in/angiematicorena">
                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            </a>
            &nbsp;
            < a href="https://github.com/angiem103">
                <FontAwesomeIcon icon={faSquareGithub} size="3x"/>
            </a>
            &nbsp;
            <a href="mailto:amaticorena3@gmail.com">
                <FontAwesomeIcon icon={faSquareEnvelope} size="3x"/>
            </a>
        </div>
    );
};

export default Links;