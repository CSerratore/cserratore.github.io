import * as React from 'react'
import { 
    sectionHeader,
 } from './section.module.css'

const Section = ({ id, children }) => {
  return (

    <section id={ id }>

      <div className={ sectionHeader }>

        {children}
  
      </div>

    </section>

  )
}

export default Section