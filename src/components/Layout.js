import React from "react";
import Navbar from "./Navbar";
import "/styles/styles.css";

function Layout ( {children}) {
  return (
    <section>
      <div id="introduction">
        <h2 className="title">Hi! My name is</h2>
        <h1 id="name">Angie Maticorena</h1>
        <h2 className="title">Full Stack Software Engineer</h2>
      </div >
      <div id="navsec">
         <Navbar />
         <div id="container">
             {children}
         </div>
      </div>
    </section>
  );
};

export default Layout;