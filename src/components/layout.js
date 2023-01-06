import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { 
    page,
 } from './layout.module.css'

const Layout = ({ children }) => {
  return (
    
    <div className={ page }>

      <Navbar/>
      
      <main>{children}</main>

      <Footer/>

    </div>

  )
}

export default Layout