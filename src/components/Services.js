import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Skill from "./Skill"
import Service from "./Service"

import skills from "../../data/skills.json"
import services from "../../data/services.json"

import "../styles/Services.css"

const Services = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "services" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  let i = -1
  return (
    <div className="services" id="services">
      <div className="container">
        <h2>SERVICES</h2>
        <div className="holder-box">
          <div className="skills-box">
            {skills.map(skill => {
              return (
                <Skill
                  skill={skill.skill}
                  level={skill.level}
                  icon={skill.icon}
                />
              )
            })}
          </div>
          <div className="services-box">
            {services.map(service => {
              i++
              return (
                <Service
                  title={service.title}
                  description={service.description}
                  icon={data?.allFile.nodes[i].childImageSharp.gatsbyImageData}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
