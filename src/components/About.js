import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/About.css"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>ABOUT</h2>
        <div className="content">
          <div className="img-holder">
            {" "}
            <StaticImage src="../images/about.png" alt="About Image" />
          </div>
          <p>
            Hi. I'm NiMou, it's a pleasure to meet you. I'm a young man who
            loves to code and enjoys creating websites and templates. You can
            check my latest projects below.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
