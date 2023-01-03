import * as React from "react"

const SEO = ({ children }) => (
  <>
    <title>Hello World</title>
    <link id="icon" rel="icon" href="global-icon" />
    {children}
  </>
  )
  
  export const Head = ({pageContext}) => (
    <>
      <meta charset="uft-8"/>
      <meta name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />

      <title>{pageContext.title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Georama:wght@800&family=Montserrat+Alternates:wght@200&family=Raleway:wght@300;400&display=swap" rel="stylesheet"/>
    </>
  )