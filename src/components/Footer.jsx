import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  z-index: 2;
  font-size: 1.3rem;
  line-height: 1.3rem;

  a {
    display: inline-block;
    margin-left: .55rem;
    font-weight: bold;
    margin-top: .5rem;
  }

  @media screen and (max-width: 820px) {
    position: unset;
    margin: 1rem;
    text-align: right;
  }


  @media screen and (max-width: 480px) {
   font-size: 0.8rem;
   margin: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Photographs by
      <a href="https://www.elliotmandelphoto.com" target="_blank" alt="Elliot Mandel Photography" rel="noopener noreferrer">
      Elliot Mandel Photography
      </a>
    </StyledFooter>
  )
}

export default Footer;
