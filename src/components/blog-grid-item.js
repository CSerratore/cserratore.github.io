import * as React from 'react'
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { 
  blogGridItem,
  articleTitle,
  articleExcerpt,
  readMore,
  metaData,
 } from './blog-grid-item.module.css'

const BlogGridItem = ({ articleMetadata, children }) => {
  const image= getImage(articleMetadata.image?.childImageSharp?.gatsbyImageData);

  return (

    <div className={ blogGridItem }>
      <GatsbyImage
        image={ image }/>
      <div className={ articleTitle }>
        <h4>
          { articleMetadata.title }
        </h4>
        <p className={ articleExcerpt }>
          { articleMetadata.summary }
        </p>
        <Link className={ readMore} to={`${articleMetadata.slug}`}>Read Full Post</Link>
      </div>
      <div className={ metaData }>
        <span>{ articleMetadata.author }</span>
        <span>{ articleMetadata.date }</span>
      </div>
    </div>
  
  )
}

export default BlogGridItem
