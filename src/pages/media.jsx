
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Lightbox from '../components/lightbox';

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import Seo from "../components/seo"
import Videos from "../components/videos";
import Footer from '../components/Footer';

const AllImages = () => {
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

const MediaPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
    <Seo title="Media" />
    <AllImages />
    <Videos />
    </PageLayout>
    <Footer />
  </Layout>
)

export default MediaPage;
