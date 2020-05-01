import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Headers from "./Headers"
import footerStyles from "./modules/footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubUrl
          name
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
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>

          <div>
            <Headers text="Links" size=".85rem" />
            <ul className={footerStyles.footerNavItem}>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>

          <div>
            <Headers text="Latest Post" size=".85rem" />
            <div className={footerStyles.footerNavItem}>
              <h3>Blog Post</h3>
              <p>Some sort of sample of the blog post!</p>
            </div>
          </div>
        </div>
        <p>
          Made with{" "}
          <a className={footerStyles.gatsbyLink} href="http://gatsbyjs.org">
            Gatsby
          </a>{" "}
          & lots of coffee by
          <a
            className={footerStyles.coryLink}
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
