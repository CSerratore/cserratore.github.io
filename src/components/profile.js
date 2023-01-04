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
          <strong>I'm a software creator and advisor.</strong>
        </p>
        <p>
          I'm the guy they come to when they want to solve their problems effectively and efficiently.
          No band-aid fixes and workarounds to symptoms, I get to the root of the problem.
        </p>
        <p>
          I help them make the important strategic decisions that enable an agile approach towards intentional goals instead of chaotic results.
        </p>
        <p>
          I apply my experience in software development for 25 years as a developer, architect, business analyst and team manager,
          to solve problems.
        </p>
        <p>
          I've developed effective systems to help other software creators create value and earn a reputation as problem solvers.
        </p>
      </div>
      
    </div>

  )
}

export default Profile