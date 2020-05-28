import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Headers from "./Headers"
import NavLink from "./NavLink"
import footerStyles from "./modules/footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubUrl
          name
          twitterUrl
          codepenUrl
          emailAddress
        }
      }
    }
  `)

  return (
    <footer>
      <div className={footerStyles.footerNav}>
        <div className={footerStyles.footerFlex}>
          <div>
            <Headers text="Site" size=".85rem" />
            <ul className={footerStyles.footerNavItem}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/stacks">Stacks</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <Headers text="Social" size=".85rem" />
            <ul className={footerStyles.footerNavItem}>
              <li>
                <a
                  className={footerStyles.extLink}
                  href={`mailto:${data.site.siteMetadata.emailAddress}`}
                >
                  Email Me
                </a>
              </li>
              <li>
                <a
                  className={footerStyles.extLink}
                  href={data.site.siteMetadata.githubUrl}
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className={footerStyles.extLink}
                  href={data.site.siteMetadata.twitterUrl}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className={footerStyles.extLink}
                  href={data.site.siteMetadata.codepenUrl}
                >
                  Codepen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Made with{" "}
          <a className={footerStyles.gatsbyLink} href="http://gatsbyjs.org">
            Gatsby
          </a>{" "}
          & lots of ☕️ by
          <a
            className={footerStyles.extLink}
            href={data.site.siteMetadata.githubUrl}
          >
            {" "}
            {data.site.siteMetadata.name}
          </a>
          , © 2020
        </p>
      </div>
    </footer>
  )
}

export default Footer
