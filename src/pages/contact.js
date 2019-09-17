import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import SEO from "../components/seo"

const StyledForm = styled.form`

`;

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <SEO title="Contact Jennifer Allor" />
      <AboutImage />
      <StyledForm>
        <fieldset>
          <legend>Name*</legend>
          <label>First Name <input name="fname" type="text" maxlength="30" /></label> 
          <label>Last Name <input name="lname" type="text" maxlength="30" /></label> 
        </fieldset>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email"/> 
        </div>
        <div>
          <label for="subject">Subject*</label>
          <input type="text" id="subject" name="subject"/> 
        </div>
        <div>
          <label for="message">Message*</label>
          <input type="textarea" id="message" name="message"/> 
        </div>
      </StyledForm>
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