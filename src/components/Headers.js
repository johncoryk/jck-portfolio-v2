import React from "react"

import headersStyles from "./modules/headers.module.scss"

function Headers({ text, size }) {
  return (
    <p className={headersStyles.headers} style={{ fontSize: `${size} ` }}>
      {text}
    </p>
  )
}

export default Headers
