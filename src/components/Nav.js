import React from "react"

import NavLink from "./NavLink"
import navStyles from "./modules/nav.module.scss"

function Nav() {
  return (
    <nav className={navStyles.navDiv}>
      <h1>Cory Kelley</h1>
      <ul className={navStyles.navLinks}>
        <li>
          <NavLink to="/" slash="true" className={navStyles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" slash="true" className={navStyles.link}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" slash="true" className={navStyles.link}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/stacks" slash="true" className={navStyles.link}>
            Stacks
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
