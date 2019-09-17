import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';
import SubNavigation from './SubNavigation';

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
    align-self: center;\
  }
`;

const Navigation = ({path}) => {
  let timeoutId; 
  const [state, setState] = useState({
    isHover: false,
  })

  const toggleHover = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      return;
    }
    timeoutId = setTimeout(() => {
      const isHover = !state.isHover;
      setState({isHover});
      clearTimeout(timeoutId);
    },250);
  }

  return (
    <Fragment>
      <StyledNavigationLinksDiv>
        <Link to="/about" className={isCurrentPage(path, 'about')}>About</Link>
        <Link to="/media" className={isCurrentPage(path, 'media')}>Media</Link>
        <Link to="/teaching"
          className={isCurrentPage(path, 'teaching')}
          onMouseEnter={() => toggleHover()}
          onMouseLeave={() => toggleHover()}>Teaching</Link>
        <Link to="/contact" className={isCurrentPage(path, 'contact')}>Contact</Link>
      </StyledNavigationLinksDiv>
      <SubNavigation isHover={state.isHover} />
    </Fragment>
  )
}

export default Navigation;