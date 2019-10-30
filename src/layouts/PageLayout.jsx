import React  from "react"
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 2rem 4rem;
  width: 75%;
  margin-left: 25%;

  p {
    margin-top: 2rem;
  }
  @media screen and (max-width: 820px) {
    width: unset;
    margin-left: unset;
  }

  @media screen and (max-width: 540px) {
    width: unset;
    margin: 1rem;
    padding: 0;
  }
`;


const PageLayout = (props) => {
  return (
    <StyledSection>
      {props.children}
    </StyledSection>
  );
}

export default PageLayout;