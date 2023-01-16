import * as React from "react"
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

export { Head } from "../components/head.js"
