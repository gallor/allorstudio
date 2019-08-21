import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import SEO from "../components/seo"
import SubNavigation from '../components/SubNavigation';

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <SEO title="Teaching" />
      <AboutImage />
      <SubNavigation isPage='true'/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </PageLayout>
  </Layout>
)


export default AboutPage

export const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "headshot-behind.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img className='' fluid={data.about.childImageSharp.fluid} />
};