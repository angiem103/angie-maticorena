import React from "react";
import Pdf from "../images/resume.pdf";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume(){ 


    return (
        <div className="resume" >
            <h1>Resume</h1>   
                <div className="pdf-container" >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer fileUrl={Pdf} />  
                    </Worker>       
                </div>
            <a href={Pdf} type="button" id="resume-btn" target="_blank"  rel="noreferrer">View Resume</a> 
        </div>
    )
};

export default Resume;