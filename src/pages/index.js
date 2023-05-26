import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "/styles/styles.css";

function App () {
  return (

      <div className="aboutme">
        <h3 id="about-me">Hi, my name is Angie :) . I live in Union City, New Jersey. I recently graduated Flatiron School with a certification in Software Engineering. During my time at school, I learned HTML, CSS, REACT.JS, RUBY, and RUBY ON RAILS. I am looking for my next career opportunity while learning Python. I like to spend my free time with family and friends, learning a new creative hobby, or trying new foods/experiences. Please feel free to check out my resume or contact me for more information, or just to chat.</h3>
        <StaticImage src="../images/angie.png" width={550} height={750} placeholder="blurred" className="angie"  />
      </div>


  );
};

export default App;