import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
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

export default AboutImage;