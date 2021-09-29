import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "../styles/Service.css"

const Service = ({ title, description, icon }) => {
  return (
    <div className="service-box">
      <GatsbyImage image={icon} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Service
