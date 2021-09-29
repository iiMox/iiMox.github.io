import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="socials text-center">
          <ul class="list-unstyled">
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/YaiciNassim"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nassimyaici/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~01544a9e14bfeb0d6a"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage src="../images/upwork-icon.svg" alt="Upwork" />
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright text-center">
          NASSIM YAICI <span>&copy; 2021</span>
        </div>
      </div>
      <div
        class="arrow-up"
        onClick={() => {
          window.scroll({ top: 0, behavior: "smooth" })
        }}
      >
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDUgNTEyLjAwNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY2LjIyLDIwNS43ODdMMjYzLjU1MywzLjEyYy00LjE2LTQuMTYtMTAuOTIzLTQuMTYtMTUuMDgzLDBMNDUuODA0LDIwNS43ODdjLTIxLjgwMywyMS44MDMtMjEuODAzLDU3LjI4LDAsNzkuMDgzICAgIHM1Ny4yOCwyMS44MDMsNzkuMDgzLDBsNzcuNzgxLTc3Ljc4MXYyNTEuNTg0YzAsMjkuMzk3LDIzLjkzNiw1My4zMzMsNTMuMzMzLDUzLjMzM3M1My4zMzMtMjMuOTM2LDUzLjMzMy01My4zMzNWMjA3LjA4OCAgICBsNzcuNzgxLDc3Ljc4MWMyMS44MDMsMjEuODAzLDU3LjI4LDIxLjgwMyw3OS4wODMsMEM0ODguMDAxLDI2My4wODgsNDg4LjAwMSwyMjcuNTg5LDQ2Ni4yMiwyMDUuNzg3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
      </div>
    </footer>
  )
}

export default Footer
