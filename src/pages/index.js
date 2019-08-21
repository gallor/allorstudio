import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from '../components/Footer';

import Layout from "../layouts/Layout";
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageImage />
    <Footer />
  </Layout>
)

export default IndexPage

export const HomePageImage = () => {
  const data = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "headshot-in-front.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img className='fullScreen' fluid={data.home.childImageSharp.fluid} style={{marginLeft: '15%', minHeight: '54rem' }} />
};