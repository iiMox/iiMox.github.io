import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Project from "./Project"

import "../styles/Projects.css"

import projects from "../../data/projects.json"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery1 {
      allFile(
        filter: { sourceInstanceName: { eq: "projects" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  let i = 0
  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <h2>PROJECTS</h2>
        <div className="projects">
          {projects.map(project => {
            i++
            return (
              <Project
                title={project.title}
                link={project.link}
                imageURL={
                  data?.allFile.nodes[i].childImageSharp.gatsbyImageData
                }
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
