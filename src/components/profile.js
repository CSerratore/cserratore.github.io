import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    container,
    profile,
    profileImage,
 } from './profile.module.css'

const Profile = ({ children }) => {
  return (

    <div className={ container }>

      <div className={ profileImage }>
        <StaticImage 
          src="../content/images/profile.jpg"
          width="300"/>
      </div>
      <div className={ profile }>
        <h3>Hi, I'm Cory.</h3>
        <p>
          <strong>I'm a software creator, consultant, and career coach.</strong>
        </p>
        <p>
          My passion is software development, specifically in practices and patterns used to build systems 
          that are operationally and organizationally responsive.
        </p>
        <p>
          I also write about my interests in the one-person online business model and mental and physical self-development.
        </p>
        <p>
          In the span of my career, I've been a software developer, product and solution architect, business analyst, and development manager.
          I apply the intersection of my skills, experience, and interests—using a learn/build/teach system—to help software
          creators accelerate their careers, make more money, and attract more opportunities in life. 
        </p>
        <p>
          I balance growth across all three pillars of software, business, and self-development.
          This is the key to building effective systems that lead to working smarter, not harder and a balanced life that will ultimately
          pave a path towards personal freedom and self-fulfillment.
        </p>
        <p>
          It is my mission in life to raise the standard of software development by helping software creators through a
          transformational journey from commodity coders to irreplaceable problem solvers.
        </p>
      </div>
      
    </div>

  )
}

export default Profile