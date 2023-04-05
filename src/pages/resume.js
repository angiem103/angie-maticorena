import React from "react";
import PDF from "../images/resume.pdf";
import packageJson from "/package.json"
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume(){ 

    
const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
console.log(pdfjsVersion)

    return (
        <div className="resume" >
            <h1>Resume</h1>   
                <div className="pdf-container" >
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={PDF} />  
                    </Worker>       
                </div>
            <a href={PDF} type="button" id="resume-btn" target="_blank"  rel="noreferrer">View Resume</a> 
        </div>
    )
};

export default Resume;