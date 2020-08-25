import React from "react"

import Head from "../components/Head"
import Headers from "../components/Headers"
import stackStyles from "../components/modules/stacks.module.scss"
import Layout from "../components/Layout"

function StacksPage() {
  const setup = [
    `2019 MacBook Air 13" - Space Grey`,
    "Magic Mouse 2 - Space Grey",
    `LG IPS LED 27" Monitor`,
    "REDRAGON - Kumara K552 Mechanical Keyboard w/ Back Lighting - Black",
    "Visual Studio Code",
    "Google Chrome",
    "Spotify Premium - Lofi or Study music",
  ]
  const tools = [
    "HTML5",
    "CSS/SCSS",
    "Bootstrap & Tailwind CSS",
    "JavaScript",
    "React",
    "Gatsby",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Express",
    "A few other things...",
  ]

  const setupMapped = setup.map(item => <h3 key={item}>{item}</h3>)
  const toolsMapped = tools.map(item => <h3 key={item}>{item}</h3>)

  return (
    <Layout>
      <Head title="Stacks" />
      <Headers text="stacks" size="1.2rem" />
      <div className={stackStyles.stacksFlex}>
        <div>{setupMapped}</div>
        <div className={stackStyles.stackHeader}>
          <Headers text="setup" size=".9rem" />
        </div>
      </div>
      <hr className={stackStyles.rule} />
      <div className={stackStyles.stacksFlex}>
        <div>{toolsMapped}</div>
        <div className={stackStyles.stackHeader}>
          <Headers text="tools" size=".9rem" />
        </div>
      </div>
    </Layout>
  )
}

export default StacksPage
