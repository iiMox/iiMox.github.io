import React from "react"

import "../styles/Slider.css"

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="content">
          <h1>YOU ASKED FOR A WEB DEVELOPER ?</h1>
          <p>
            We are here to help you develop your own website, it will be a full
            responsive site using the last technology in the field.
          </p>
        </div>
        <div className="image-box">
          <img src="/images/slider_image_3.png" alt="Slider Image" />
        </div>
      </div>
    </div>
  )
}

export default Slider
