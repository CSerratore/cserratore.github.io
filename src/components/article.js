import * as React from 'react'
import { 
  articleContainer,
 } from './article.module.css'

const Article = ({ title, date, html }) => {
  return (

    <div className={ articleContainer }>
      <article>

        <h1>{ title }</h1>
        <h2>{ date }</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  )
}

export default Article