module.exports = {
  siteMetadata: {
    title: "Cory Kelley",
    name: "Cory Kelley",
    nameTag: "johncoryk",
    twitterUrl: "http://twitter.com/johncoryk",
    githubUrl: "https://github.com/johncoryk",
    codepenUrl: "https://codepen.io/johncoryk",
    emailAddress: "coryk0789@gmail.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
