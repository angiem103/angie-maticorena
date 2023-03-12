import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
function Links() {
    return (
        <div className="socialmedia">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
            &nbsp;
            <FontAwesomeIcon icon={faSquareGithub} size="3x"/>
            &nbsp;
            <FontAwesomeIcon icon={faSquareEnvelope} size="3x"/>
        </div>
    );
};

export default Links;