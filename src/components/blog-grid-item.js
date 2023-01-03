import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { 
  blogGridItem,
  blogGridText,
  excerpt,
  readMore,
  metaData,
 } from './blog-grid-item.module.css'

const BlogGridItem = ({ articleMetadata, children }) => {
  const image= getImage(articleMetadata.image);

  return (

    <div className={ blogGridItem }>
      <GatsbyImage
        image={ image }/>
      <div className={ blogGridText }>
        <h4>
          { articleMetadata.title }
        </h4>
        <p className={ excerpt }>
          { articleMetadata.summary }
        </p>
        <a className={ readMore } href={ articleMetadata.articleURL }>Read Full Post</a>
      </div>
      <div className={ metaData }>
        <span>{ articleMetadata.author }</span>
        <span>{ articleMetadata.date }</span>
      </div>
    </div>
  
  )
}

export default BlogGridItem
