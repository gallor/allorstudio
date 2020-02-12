
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Lightbox from '../components/lightbox';

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import SEO from "../components/seo"

export const AllImages = () => {
  const allImages = useStaticQuery(graphql`
   {
      images: allFile(filter: {extension: {regex: "/(jpg)/"}, sourceInstanceName: {eq: "images"}}) {
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
  return <Lightbox images={allImages.images} />
}

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
    <SEO title="Media" />
    <AllImages />

    </PageLayout>
  </Layout>
)

export default AboutPage
