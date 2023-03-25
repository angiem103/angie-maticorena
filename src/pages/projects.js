import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareYoutube, faSquareGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
    return (
        <div>
            <div id="projects">
                <section>
                    <h2>Lotus Lucy</h2>
                    <StaticImage src="../images/lotuslucy.png"       placeholder="blurred"
                    className="projectimg"/>
                    <div style={{padding: 10}}>
                        < a href="https://github.com/angiem103" className="icon">
                            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                        </a>
                        < a href="https://github.com/angiem103" className="icon">
                            <FontAwesomeIcon icon={faSquareYoutube} size="2x"/>
                        </a>
                    </div>
                </section>
                <section>
                    <h2>Berry Social</h2>
                    <StaticImage src="../images/berrysocial.png"       placeholder="blurred"
                    transformOptions={{fit: "outside"}}
                    className="projectimg"/>
                    <div style={{padding: 10}}>
                        < a href="https://github.com/angiem103" className="icon">
                            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                        </a>
                        < a href="https://github.com/angiem103" className="icon">
                             <FontAwesomeIcon icon={faSquareYoutube} size="2x"/>
                        </a>
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default Projects; 