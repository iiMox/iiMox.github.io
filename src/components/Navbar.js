import React from "react"

import { useRef } from "react"

import "../styles/Navbar.css"

const Navbar = () => {
  const ulHover = useRef(null)

  const onHover = li => {
    ulHover.current.style.left = li.offsetLeft + "px"
    ulHover.current.style.width = li.offsetWidth + "px"
    ulHover.current.style.height = li.offsetHeight + "px"
    ulHover.current.style.bottom = 0
    li.style.color = "#fff"
  }

  const offHover = li => {
    ulHover.current.style.height = "0px"
    li.style.color = "#af4eff"
  }

  return (
    <nav>
      <div className="container">
        <div className="links text-center">
          <ul className="list-unstyled">
            <li
              data-scroll="about"
              onMouseEnter={e => onHover(e.target)}
              onMouseLeave={e => offHover(e.target)}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("about").offsetTop - 100,
                  behavior: "smooth",
                })
              }}
            >
              About
            </li>
            <li
              data-scroll="skills"
              onMouseEnter={e => onHover(e.target)}
              onMouseLeave={e => offHover(e.target)}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("services").offsetTop - 100,
                  behavior: "smooth",
                })
              }}
            >
              Services
            </li>
            <li
              data-scroll="gallery"
              onMouseEnter={e => onHover(e.target)}
              onMouseLeave={e => offHover(e.target)}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("gallery").offsetTop - 100,
                  behavior: "smooth",
                })
              }}
            >
              Gallery
            </li>
            <li
              data-scroll="contact"
              onMouseEnter={e => onHover(e.target)}
              onMouseLeave={e => offHover(e.target)}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("contact").offsetTop - 100,
                  behavior: "smooth",
                })
              }}
            >
              Contact us
            </li>
            <div className="ul-hover" ref={ulHover}></div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
