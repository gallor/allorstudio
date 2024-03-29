import React  from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Navigation from "../components/Navigation";
import Header from '../components/Header';

const StyledWrapper = styled.div`
  position: relative;
  max-width: 130rem;
  margin: 0 auto;
  min-height: 55rem;
  min-width: 80rem;

  @media screen and (max-width: 820px) {
    min-width: unset;
    min-height: unset;
  }

  @media screen and (max-width: 540px) {
    min-width: 20rem;
  }
`;

const StyledSidebar = styled.div`
  position: fixed;
  width: 30%;
  max-width: 26rem;
  top: 0;
  bottom: 0;
  background: #000;
  padding-right: 2rem;
  background: transparent;
  z-index: 1;
  min-width: 20rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 820px) {
    display: flex;
    height: 12rem;
    width: 100%;
    max-width: 100%;
    padding: 0;
    background: transparent;
  }

  @media screen and (max-width: 540px) {
    height: 8rem;
    position: sticky;
    padding-left: 1.5rem;
  }
`;

const StyledMain = styled.main`
  overflow: auto;

  scrollbar-width: thin

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 820px) {
    margin-top: 11rem;
  }

  @media screen and (max-width: 540px) {
    margin-top: -1rem;
  }

`;
const Layout = (props) => {
  return  (
    <StyledWrapper>
      <StyledSidebar>
          <Header />
          <Navigation path={props.path} />
      </StyledSidebar>
      <StyledMain>{props.children}</StyledMain>
    </StyledWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
