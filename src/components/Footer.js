import React from "react"

import footerStyles from "./modules/footer.module.scss"

function Footer() {
  return (
    <footer>
      <div className={footerStyles.footerNav}>
        <div className={footerStyles.footerFlex}>
          <div>
            <p className={footerStyles.navHeaders}>Site</p>
            <ul className={footerStyles.footerNavItem}>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>

          <div>
            <p className={footerStyles.navHeaders}>Links</p>
            <ul className={footerStyles.footerNavItem}>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>

          <div>
            <p className={footerStyles.navHeaders}>Latest Blog Post</p>
            <div className={footerStyles.footerNavItem}>
              <h3>Blog Post</h3>
              <p>Some sort of sample of the blog post!</p>
            </div>
          </div>
        </div>
        <p>Trademark info!</p>
      </div>

      {/* <p className={footerStyles.footerContent}>
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
      </p> */}
    </footer>
  )
}

export default Footer
