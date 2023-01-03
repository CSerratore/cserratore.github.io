import * as React from 'react'
import { 
    container,
    blogGrid,
 } from './blog-grid.module.css'

const BlogGrid = ({ children }) => {
  return (

    <div className={ container }>

      <div className={ blogGrid }>

        {children}
  
      </div>

    </div>

  )
}

export default BlogGrid
