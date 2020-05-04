import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IoMdMail } from "react-icons/io"

import ckLogo from "../../images/ckLogo_v1.svg"
import NavLink from "./NavLink"
import navStyles from "./modules/nav.module.scss"

function Nav() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          emailAddress
        }
      }
    }
  `)

  return (
    <nav className={navStyles.navDiv}>
      <NavLink to="/">
        <div className={navStyles.ckLogo}>
          <img src={ckLogo} width="40" height="40" alt="ck logo"></img>
        </div>
      </NavLink>
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
        <li>
          <a
            className={navStyles.iconFlex}
            href={`mailto:${data.site.siteMetadata.emailAddress}`}
          >
            <IoMdMail title="Email Me" className={navStyles.mailIcon} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
