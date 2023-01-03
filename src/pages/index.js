import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useArticlesMetadata } from "../hooks/use-articles-metadata";
import Layout from '../components/layout'
import Header from '../components/header'
import Section from '../components/section'
import BlogGrid from '../components/blog-grid'
import BlogGridItem from "../components/blog-grid-item"
import Profile from '../components/profile'

const IndexPage = ({ data }) => {
  const { title, description, url } = useSiteMetadata();
  const articlesMetadata = useArticlesMetadata();
  return (
    <Layout>

      <Header/>

      <Section id="articles">
        <h1>ARTICLES</h1>
        <h2>Feed Your Curiosity</h2>
        <p>
          Explorations of personal and professional software development patterns, practices and platforms.
        </p>
      </Section>
      <BlogGrid>
        {articlesMetadata.map((metaData) => (
          <BlogGridItem articleMetadata={metaData}/>

        ))}

      </BlogGrid>

      <Section id="about">
        <h1>ABOUT ME</h1>
        <h2>Who Is Cory Serratore?</h2>
        <p>
          A software creator with a passion for personal and professional development.
        </p>
      </Section>

      <Profile/>

    </Layout>
  )
}

export default IndexPage

export { Head } from "../components/head.js"
