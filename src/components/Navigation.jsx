import React, { Fragment, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';
import SubNavigation from './SubNavigation';

const StyledNavigationLinksDiv = styled.nav`
  width: 100%;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 25rem;
  font-size: 2rem;
  margin-top: 4rem;

  a {
    align-self: center;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    flex-direction: row;
    height: unset;
    margin-top: 0;
  }
  
  @media screen and (max-width: 540px) {
    position: absolute;
    bottom: 0;
    flex-direction: column;
    bottom: 18rem;
    opacity: 0;
    transition: opacity .1s ease-in-out;
    left: 0;
    font-size: 1.6rem;

    &.open {
      background-color: white;
      height: 18rem;
      bottom: -16rem;
      opacity: 1;
      filter: drop-shadow(0px 2px 4px #6c6c6c);
    }

    a {
      width: 100%;
      text-align: center;
      padding: 1rem;
    }
  }
`;

const StyledMobileButton = styled.button`
  display: none;
  @media screen and (max-width: 540px) {
    font-family: 'Material Icons';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    font-size: 3rem;
    padding: 1.5rem;
  }
`;

const Navigation = ({path}) => {
  let timeoutId; 
  const [state, setState] = useState({
    isHover: false,
    isOpen: false,
  });

  const toggleOpen = () => {
    const isOpen = !state.isOpen;
    setState({isOpen});
  }

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
      <StyledMobileButton className="material-icons" onClick={toggleOpen}>menu</StyledMobileButton>
      <StyledNavigationLinksDiv className={state.isOpen ? 'open' : ''}>
        <Link to="/about" className={isCurrentPage(path, 'about')} >About</Link>
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