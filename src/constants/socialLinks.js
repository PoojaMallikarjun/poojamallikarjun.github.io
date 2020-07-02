import React from "react"
import {
  FaLinkedin,
  FaDribbbleSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/PoojaMallikarjun",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/pooja-m-112165171/",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://dribbble.com/pooja_m",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/pooja_m702",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <span>
        <a href={link.url} className="social-link">
          {link.icon}
        </a>
      </span>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
