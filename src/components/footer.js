import * as React from 'react'
import { Link } from 'gatsby'
import { 
  footer,
} from './footer.module.css'

const Footer = ({ children }) => {
  return (
  
  <div className={ footer }>
      <footer>
      © All Rights Reserved
    </footer>
  </div>

    
  )
}

export default Footer
