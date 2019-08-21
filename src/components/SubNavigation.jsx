import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { isCurrentPage } from '../utils';


const StyledNavigationSubLinksNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 2rem;
  margin: 3rem 0 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;

`;

const SubNavigation = ({isPage, path}) => {
  return (
    <StyledNavigationSubLinksNav 
      className={isPage ? 'pageNav' : '' }>
      <Link to="/teaching/lessons" className={isCurrentPage(path, 'lessons')}>Lessons</Link> 
      <Link to="/teaching/policies" className={isCurrentPage(path, 'policies')}>Policies</Link> 
      <Link to="/teaching/calendar" className={isCurrentPage(path, 'calendar')}>Calendar</Link> 
    </StyledNavigationSubLinksNav>
  )
}

export default SubNavigation;