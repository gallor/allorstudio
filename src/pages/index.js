import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/Layout';
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageImage />
  </Layout>
)

export default IndexPage

export const HomePageImage = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "headshot-in-front.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, srcSetBreakpoints: [200, 340, 540, 890, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img className='fullScreen homeImage' fluid={data.home.childImageSharp.fluid} />
};