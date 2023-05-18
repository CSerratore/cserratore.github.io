import * as React from "react"
import { SEO } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Layout from '../components/layout'
import Subscribe from '../components/subscribe'

const IndexPage = ({ data }) => {
  const { title, description, url } = useSiteMetadata();
  return (
    <Layout>

      <Subscribe/>

    </Layout>
  )
}

export default IndexPage

export const Head = ({data}) => (
  <>
    <meta charset="uft-8"/>
    <meta name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />

    <SEO title="Subscribe"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&family=Poppins:wght@400;700;900&display=swap" rel="stylesheet"/>

  </>
)
