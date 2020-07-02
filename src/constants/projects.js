import React from "react"
import { FaGithubSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    title: "MyManager",
    description: "A ToDo app built using ReactJs and Firebase.",
    stack: ["ReactJs", "Firebase"],
    link: "https://github.com/PoojaMallikarjun/Mymanager",
  },
  {
    id: 2,
    title: "Results Management System",
    description:
      "A DBMS project that provides the examination results to students in a simple way.",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/PoojaMallikarjun/ResultsManagementSystem",
  },
  {
    id: 3,
    title: "InfoCorona",
    description:
      "A website that gives the stats of Covid-19 cases in india and from around the world along with various precautionary measures.",
    stack: ["ReactJs", "nodeJs"],
    link: "https://github.com/PoojaMallikarjun/InfoCorona-1",
  },
]

const projectslist = data.map(project => {
  return (
    <article className="project">
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map(item => {
            return <span>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={project.link}>
            <FaGithubSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
})

export default () => {
  return (
    <div className="project-page">
      <h1>Projects</h1>
      {projectslist}
    </div>
  )
}
