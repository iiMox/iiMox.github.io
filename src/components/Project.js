import React from "react"
import { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "../styles/Project.css"

const Project = ({ title, link, imageURL }) => {
  const hoverRef = useRef(null)

  return (
    <div
      className="project"
      onMouseEnter={() => {
        hoverRef.current.classList.add("active")
        hoverRef.current.parentNode.classList.add("animation")
      }}
      onMouseLeave={() => {
        hoverRef.current.classList.remove("active")
        hoverRef.current.parentNode.classList.remove("animation")
      }}
    >
      <div className="img-overflow " ref={hoverRef}>
        <div>
          <h5>{title}</h5>
          <button>
            <a href={link} target="_blank" rel="noreferrer">
              To Website
            </a>
          </button>
        </div>
      </div>
      <GatsbyImage image={imageURL} alt={title} />
    </div>
  )
}

export default Project
