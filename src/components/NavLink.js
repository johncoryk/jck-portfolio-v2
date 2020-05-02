import React from "react"
import { Link } from "gatsby"

import navLinkStyles from "./modules/navLink.module.scss"

function NavLink({ to, children, slash }) {
  return (
    <div>
      <Link
        to={to}
        slash={slash}
        className={navLinkStyles.navLink}
        activeClassName={navLinkStyles.activeNavLink}
      >
        {slash && <span>/</span>}
        {children}
      </Link>
    </div>
  )
}

export default NavLink
