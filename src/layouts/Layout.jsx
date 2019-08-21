import React  from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Navigation from "../components/Navigation";
import Header from '../components/Header';


// TODO: Figure out how to support the expanding of the page to full height of window yet stopping at bottom
const StyledSidebar = styled.div`
  position: absolute;
  left: 0;
  width: 25%;
  max-width: 26rem;
  top: 0;
  bottom: 0;
  background: #000;
  padding-right: 2rem;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%);
  z-index: 1;
  min-width: 20rem;
`;

const StyledWrapper = styled.div`
  position: relative;
  max-width: 130rem;
  margin: 0 auto;
  min-height: 54rem;
  min-width: 80rem;
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
