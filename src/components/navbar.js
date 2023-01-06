import * as React from 'react'
import { Link } from 'gatsby'
import { 
  navbar
} from './navbar.module.css'

const Navbar = ({ children }) => {
  return (
    
    <div className={ navbar }>

      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/#articles'>Articles</Link></li>
          <li><Link to='/#about'>About</Link></li>
        </ul>
      </nav>

    </div>
  
  )
}

export default Navbar