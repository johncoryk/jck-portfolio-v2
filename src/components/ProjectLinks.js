import React from "react"

import projectLinkStyles from "./modules/projectLinks.module.scss"

function ProjectLinks({ text }) {
  return <p className={projectLinkStyles.projectLinks}>{text}</p>
}

export default ProjectLinks
