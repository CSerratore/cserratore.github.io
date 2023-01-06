import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>

      <Article 
        title={ frontmatter.title } 
        date={ frontmatter.date }
        html={ html }>
      </Article>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export { Head } from "../components/head.js"