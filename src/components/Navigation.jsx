import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';


const StyledNavigationLinksDiv = styled.nav`
  position: absolute;
  top: 16rem;
  left: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  height: 35rem;
  font-size: 2rem;

  a {
    align-self: center;
  }
`;

const Navigation = ({path}) => {
  return (
    <Fragment>
      <StyledNavigationLinksDiv>
        <Link to="/about" className={isCurrentPage(path, 'about')}>About</Link>
        <Link to="/media" className={isCurrentPage(path, 'media')}>Media</Link>
        <Link to="/teaching" className={isCurrentPage(path, 'teaching')}>Teaching</Link>
        <Link to="/contact" className={isCurrentPage(path, 'contact')}>Contact</Link>
      </StyledNavigationLinksDiv>
    </Fragment>
  )
}

export default Navigation;