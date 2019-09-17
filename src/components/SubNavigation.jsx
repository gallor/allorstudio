import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';

// TODO: Figure out fade in method
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
      padding: 2rem 1rem
    }

    a:nth-child(even) {
      border-bottom: 1px solid #B7B7B7;
      border-top: 1px solid #B7B7B7;
    }

    a:hover {
      color: #6a6a6a;
    }
  }
`;

const SubNavigation = ({isPage, path, isHover}) => {
  return (
    <StyledNavigationSubLinksNav 
      className={`${isPage ? 'pageNav' : 'sideBarNav'} ${isHover ? 'hover' : 'noHover' }`}>
      <Link to="/teaching/lessons" className={isCurrentPage(path, 'lessons')}>Lessons</Link> 
      <Link to="/teaching/policies" className={isCurrentPage(path, 'policies')}>Policies</Link> 
      <Link to="/teaching/calendar" className={isCurrentPage(path, 'calendar')}>Calendar</Link> 
    </StyledNavigationSubLinksNav>
  )
}

export default SubNavigation;