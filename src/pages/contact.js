import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import Layout from "../layouts/Layout";
import PageLayout from '../layouts/PageLayout';
import SEO from "../components/seo"

const StyledForm = styled.form`
  margin-top: 2rem;
  font-size: 1.5rem;
  padding-bottom: 5rem;

  input, textarea, button {
    margin: .5rem 0;
    height: 4rem;
    padding: 0 .5rem;
    border: #dfdfdf solid 1px;

    &:focus {
      outline: none;
      background-color: #f9f9f9;
      border-color: #dfdfdf;
    }
  }
  
  button {
    padding: 1.5rem;
    height: auto;

    &:focus {
      background-color: #fff;
      border-color: #0f0f0f;
    }

    &:active {
      background-color: #f9f9f9;
      border-color: #0f0f0f;
    }
  }

  textarea {
    padding: .5rem;
    resize: none;
    height: 15rem;
  }

  legend {
    margin-bottom: 1rem;
  }
  .labelTitle {
    display: block;
  }
  .flexWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .col-6 {
    width: 49%;
  }
  .col-3 {
    width: 32%;
  }
  .col-9 {
    width: 66%;
  }
  .col-12, .fullWidth {
    width: 100%;
  }

  .inputWrapper {
    margin-bottom: 1rem;
  }

  .buttonWrapper {
    position: relative;

    button {
      background-color: #dddddd;

      &:active {
        background-color: #d3d3d3;
      } 

      &:focus {
        border-color: #dddddd;
      }
    }
  }

  .putLeft {
    position: absolute;
    right: 10rem;
  }

  .putRight {
    position: absolute;
    right:0;
  }
  .hidden {
    visibility: hidden;
    height: 0;
    display: block;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.2rem; 

    input, button {
      height: 3rem;
      padding: 1rem;
    }
    button {
      padding: 1rem 2rem;
    }
  }
`;

const AboutPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <SEO title="Contact Jennifer Allor" />
      <AboutImage />
      <StyledForm name="contact" method="POST" data-netlify="true" action="/contact/success" netlify-honeypot="bot-field">
          <label class="hidden">Honeypot field. Do not fill in if human<input name="bot-field" /></label>
        <fieldset className="inputWrapper">
          <legend className="bold">Name*</legend>
          <div className="flexWrapper">
            <label className="col-6"><span className="labelTitle">First Name</span><input name="fname" type="text" maxlength="30" className="fullWidth" required="true" /></label> 
            <label className="col-6"><span className="labelTitle">Last Name</span><input name="lname" type="text" maxlength="30" className="fullWidth" required="true" /></label> 
          </div>
        </fieldset>
        <fieldset className="inputWrapper">
          <div className="flexWrapper">
            <label className="col-3"><span className="labelTitle">Phone</span><input name="phone" type="number" maxlength="30" className="fullWidth" /></label> 
            <label className="col-9"><span className="labelTitle">Email</span><input name="email" type="email" maxlength="30" className="fullWidth" /></label> 
          </div>
        </fieldset>
        <div className="inputWrapper">
          <label for="subject" className="labelTitle" required="true">Subject*</label>
          <input type="text" id="subject" name="subject" className="col-12" /> 
        </div>
        <div className="inputWrapper">
          <label for="message" className="labelTitle" required="true">Message*</label>
          <textarea type="textarea" id="message" name="message" className="col-12" /> 
        </div>
        <div class="buttonWrapper">
          <button type="reset" className="putLeft">Clear</button>
          <button type="submit" formmethod="post" className="putRight">Submit</button>
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