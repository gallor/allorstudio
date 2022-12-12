import React from "react";
import styled from 'styled-components';

import Layout from '../layouts/Layout';
import PageLayout from '../layouts/PageLayout';
import Seo from "../components/seo"

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  align-items: center;
`;

const ErrorPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <Seo title="Error Trying to Contact Jennifer Allor" />
      <StyledError>
        <h1>Uh Oh!!</h1>
        <p>Something happened when trying to submit the form. Please try again</p>
      </StyledError>
    </PageLayout>
  </Layout>
)

export default ErrorPage;