import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';

const StyledNavigationSubLinksNav = styled.nav`
  display: flex;
  justify-content: space-around;

  &.hover {
    opacity: 1
  }

  &.pageNav {
    flex-direction: row;
    font-size: 2rem;
    margin: 3rem 0 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;

    @media screen and (max-width: 480px) {
      margin: 2rem 0;
      font-size: 1.6rem;
    }
  }

  &.sideBarNav {
    position: absolute;
    flex-direction: column;
    top: -100rem;
    left: 16rem;
    font-size: 2rem;
    background: white;
    border: 1px solid #333;
    border-radius: 6px;
    filter: drop-shadow(0px 2px 4px #6c6c6c);
    z-index: 2;

    visibility: visible;
    transition: opacity .1s ease-in-out;

    &.hover  {
      top: 34rem;
      opacity: 1;
    }

    &.noHover {
      opacity: 0;
    }

    &:hover {
      top: 34rem;
      opacity: 1;
    }

    a {
      margin: 0 1.5rem;
      padding: 2rem 1rem;

      &::nth-child(even) {
        border-bottom: 1px solid #B7B7B7;
        border-top: 1px solid #B7B7B7;
      }

      &:hover {
        color: #6a6a6a;
      }
    }

    @media screen and (max-width: 820px) {
      flex-direction: row;
      left: unset;
      right: 2rem;

      &.hover {
        top: 10rem;
        opacity: 1;
      }

      &.noHover {
        opacity: 0;
      }

      a {
        margin: 0.5rem 0;
        padding: 1rem 2rem;

      }

      a:nth-child(even) {
        border-bottom: none;
        border-top: none;
        border-right: 1px solid #B7B7B7;
        border-left: 1px solid #B7B7B7;
      }
    }

    @media screen and (max-width: 820px) {
      flex-direction: column;
    }

  }
`;

const SubNavigation = ({isPage, path, isHover}) => {
  return (
    <StyledNavigationSubLinksNav 
      className={`${isPage ? 'pageNav' : 'sideBarNav'} ${isHover ? 'hover' : 'noHover' }`}>
      <NavLinks path={path} />
    </StyledNavigationSubLinksNav>
  )
}



const NavLinks = ({path}) => {
  return (
    <Fragment>
      <Link to="/teaching/lessons" className={isCurrentPage(path, 'lessons')}>Lessons</Link> 
      <Link to="/teaching/policies" className={isCurrentPage(path, 'policies')}>Policies</Link> 
      <Link to="/teaching/calendar" className={isCurrentPage(path, 'calendar')}>Calendar</Link> 
    </Fragment>
  )
}

export default SubNavigation;