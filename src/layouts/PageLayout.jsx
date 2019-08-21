import React  from "react"
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 2rem 4rem;
  width: 75%;
  margin-left: 25%;

  p {
    margin-top: 2rem;
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