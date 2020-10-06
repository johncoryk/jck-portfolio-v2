import React from "react"

import Head from "../components/Head"
import Layout from "../components/Layout"
import Headers from "../components/Headers"
import contentSyles from "../components/modules/content.module.scss"

export default () => {
  return (
    <>
      <Head />
      <Layout>
        <Headers text="hi there!" size="1.2rem" />
        <h1 className={contentSyles.intro}>
          My name is Cory
          <span className={contentSyles.lighter}>
            {" "}
            and I'm a graphic designer turned full stack web developer. I've
            always had a creative itch to scratch and design & development is
            the perfect 'peanut butter & jelly' sorta combo I've been searching
            for my entire life. I use tools like{" "}
            <span className={contentSyles.colored}>
              React, PostgreSQL, Node and Express, Gatsby,
            </span>
            {"  "}
            and a few other things to build fun and nice looking websites for
            myself and others!
          </span>
        </h1>
      </Layout>
    </>
  )
}
