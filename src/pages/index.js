// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage 
      alt="Clifford with Emily-Elizabeth"
      src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/06/clifford-the-big-red-book-book-feature-scaled.jpg"
    />
  </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
