import * as React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Subscribe from '../components/subscribe'
import Article from "../components/article"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { pageContext } = markdownRemark.frontmatter
  return (
    <Layout>

      <Article 
        title={ frontmatter.title } 
        date={ frontmatter.date }
        html={ html }>
      </Article>

      <Subscribe/>

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

export const Head = ({data}) => (
  <>
    <meta charset="uft-8"/>
    <meta name='viewport'
        content='width=device-width, initial-scale=1.0' />

    <SEO title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.frontmatter.description}/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&family=Poppins:wght@400;700;900&display=swap" rel="stylesheet"/>

  </>
)