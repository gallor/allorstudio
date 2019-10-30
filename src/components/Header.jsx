import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

const StyledLogo = styled.header`
  font-size: 1.5rem;
  margin: 4rem 0 0 2rem;
  z-index: 2;
  display: inline-block;

  span {
    display: block;
    margin: 1rem 0;
  }

  .title {
    font-size: 4rem;
    white-space: nowrap;
  }

  .subtitle {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 820px) {
    margin: 1rem 0 0 2rem;

    .title {
      font-size: 3.25rem;
      margin-bottom: 0;
    }
    .subtitle {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 540px) {
    margin: 0;

    .title {
      font-size: 2.5rem;
    }
    .subtitle {
      font-size: 1.25rem;
    }
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