import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 2;
  font-size: 1.3rem;
  line-height: 1.3rem;

  a {
    font-weight: bold;
    display: block;
    margin-top: .5rem;
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
