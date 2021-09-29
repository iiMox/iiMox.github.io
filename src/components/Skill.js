import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

import "../styles/Skill.css"

const Skill = ({ skill, level, icon }) => {
  return (
    <div className="skill-box">
      <div className="skill-title">
        <i className={`fab fa-${icon}`}></i>
        <h5>{skill}</h5>
      </div>
      <div className="progress">
        <span style={{ width: level }}></span>
      </div>
    </div>
  )
}

export default Skill
