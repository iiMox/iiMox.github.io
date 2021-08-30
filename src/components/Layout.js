import React from "react"
import { useEffect } from "react"

import Navbar from "./Navbar"
import Slider from "./Slider"
import About from "./About"

import "../styles/main.css"

const Layout = () => {
  useEffect(() => {
    const mySlider = document.querySelector(".layout .slider")
    const myNav = document.querySelector(".layout nav")

    console.log(mySlider.clientHeight)
    mySlider.style.height = window.innerHeight - myNav.offsetHeight + "px"
    console.log(mySlider.clientHeight)
  }, [])
  return (
    <div className="layout">
      <Navbar />
      <Slider />
      <About />
    </div>
  )
}

export default Layout
