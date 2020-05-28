import React from "react"

import Head from "../components/Head"
import Headers from "../components/Headers"
import ProjectLinks from "../components/ProjectLinks"
import projectStyles from "../components/modules/project.module.scss"
import Layout from "../components/Layout"

function ProjectsPage() {
  const projects = [
    {
      name: "Hello Vino",
      desc:
        "Hello Vino is a web app made with React that offers helpful information about many types of wine varietals. I've also included a custom 'wine recommendation' component. Easy to use and useful for finding the perfect varietal quick!",
      url: "https://hello-vino.netlify.app/",
      code: "https://github.com/johncoryk/hello-vino",
    },
    {
      name: "Flix",
      desc:
        "Flix is a Netflix component clone. The simple interface asks for a movie title and returns it's genre, year released, an overview, and poster image if one is available.",
      url: "https://flix-movie-app.netlify.app/",
      code: "https://github.com/johncoryk/flix-app",
    },
    {
      name: "Petrol",
      desc:
        "Petrol is an app inspired by Brad Traversy. Petrol is a simple, clean, and easy to use expense tracker styled in a Material UI fashion. This application was built in React using vanilla CSS and the full version also features a full backend using Node/Express and MongoDB.",
      url: "https://jck-petrol-app.netlify.com",
      code: "https://github.com/johncoryk/expense-tracker",
    },
    {
      name: "Portfolio Website",
      desc:
        "This is version 2 of my portfolio site. Built with Gatsby and Sass for custom styling. I make use of a 'headless' CMS (Contentful) for blogging purposes.",
      code: "https://github.com/johncoryk/jck-portfolio-v2",
    },
    {
      name: "Sketchy",
      desc:
        "Sketchy is an 'Etch-a-Sketch' type app that lets the use paint with different colored pixels of varying sizes. This was made entirely with vanilla JavaScript, HTML, and CSS.",
      url: "https://johncoryk.github.io/etch-a-sketch/",
      code: "https://github.com/johncoryk/etch-a-sketch",
    },
  ]

  const projectsList = projects.map(project => {
    return (
      <div key={project.name} className={projectStyles.projectItemFlex}>
        <h2>{project.name}</h2>
        <p>{project.desc}</p>
        <div className={projectStyles.linksFlex}>
          <a href={project.url}>
            {project.url ? (
              <ProjectLinks text="Demo" />
            ) : (
              <ProjectLinks text="You're Here!" />
            )}
          </a>
          <a href={project.code}>
            <ProjectLinks text="Code" />
          </a>
        </div>
      </div>
    )
  })

  return (
    <Layout>
      <Head title="Projects" />
      <Headers text="projects" size="1.2rem" />
      <div className={projectStyles.projectsFlex}>{projectsList}</div>
    </Layout>
  )
}

export default ProjectsPage
