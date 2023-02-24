import React from "react";
import Navbar from "./navbar";
import About from "./about";
import Router from "@reach/router";
import "/styles/styles.css";

function App () {
  return (
    <div id="introduction">
      <h2 className="title">Hi! I am</h2>
      <h1 id="name">Angie Maticorena</h1>
      <h2 className="title">Full Stack Software Engineer with an eye for creativity</h2>
      <Navbar />
      {/* <Router>
        <App path="/"></App>
        <About path="aboutme"></About>
      </Router> */}
    </div>
  );
};

export default App;