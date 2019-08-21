
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import SEO from "../components/seo"

export const AllImages = () => {
  const allImages = useStaticQuery(graphql`
   {
      media: allFile(filter: {extension: {regex: "/(jpg)/"}, sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth:1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
`);
  return allImages.media.edges.map(image => ( 
    <Img 
      key={image.node.childImageSharp.fluid.src}
      fluid={image.node.childImageSharp.fluid}
      style={{}}
    />
  ))
}

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
    <div className="mediaWrapper">
      <SEO title="Media" />
      <AllImages />
    </div>

    </PageLayout>
  </Layout>
)

export default AboutPage
