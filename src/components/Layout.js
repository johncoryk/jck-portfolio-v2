import React from "react"

import Nav from "./Nav"
import Footer from "./Footer"
import Content from "./Content"
import "../styles/index.scss"
import layoutStyles from "./modules/layout.module.scss"

function Layout({ children }) {
  return (
    <>
      <div className={layoutStyles.mainContainer}>
        <div className={layoutStyles.content}>
          <Nav />
          <Content children={children} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
