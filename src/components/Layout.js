import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import "/styles/styles.css";


function Layout ( {children}) {
  return (

    <section >
    <div className="layout">
      <div id="introduction">
        <h2 className="title">Hi! My name is</h2>
        <h1 id="name">ANGIE MATICORENA</h1>
        <h2 className="title">Full Stack Software Engineer</h2>
      </div>
        <Links/>
      </div>
      <div className="layout">
         <Navbar />
         <div id="container">
             {children}
         </div>
      </div>
    </section>
  );
};

export default Layout;