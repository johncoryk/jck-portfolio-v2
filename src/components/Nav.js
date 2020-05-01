import React from "react"
import { Link } from "gatsby"

import navStyles from "./modules/nav.module.scss"

function Nav() {
  return (
    <nav className={navStyles.navDiv}>
      <h1>Cory Kelley</h1>
      <ul className={navStyles.navLinks}>
        <li>
          <Link to="/" className={navStyles.link}>
            /Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={navStyles.link}>
            /Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" className={navStyles.link}>
            /Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
