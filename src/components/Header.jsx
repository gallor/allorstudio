import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const StyledLogo = styled.header`
  font-size: 1.5rem;
  position: absolute;
  top: 4rem;
  left: 2rem;
  z-index: 2;

  span {
    display: block;
    margin: 1rem 0;
  }

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title,
          subtitle1,
          subtitle2
        }
      }
    }
  `)
  return (
  <StyledLogo>
    <h1>
      <Link to="/">
        <span className='title'>{`${data.site.siteMetadata.title}`}</span>
        <span className='subtitle'>{`${data.site.siteMetadata.subtitle1}`}</span>
        <span className='subtitle'>{`${data.site.siteMetadata.subtitle2}`}</span>
      </Link>
    </h1>
  </StyledLogo>
  )
}

export default Header;