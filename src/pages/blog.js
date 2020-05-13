import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Headers from "../components/Headers"
import Layout from "../components/layout"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM, Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout text="blog">
      <Headers text="blog" size="1.2rem" />
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <div>
            <h1>{edge.node.title}</h1>
            <h3>{edge.node.publishedDate}</h3>
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogPage
