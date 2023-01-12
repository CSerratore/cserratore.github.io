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
          No band-aid fixes and workarounds. I get to the root of the problem and put systems in place to solve them.
        </p>
        <p>
          I apply over 25 years of experience in software development as a developer, architect, business analyst and team manager,
          to develop effective systems to solve problems.
        </p>
        <p>
          I help software creators earn a reputation as irreplaceable problem solvers and value creators instead of replaceable commodities.
        </p>
      </div>
      
    </div>

  )
}

export default Profile