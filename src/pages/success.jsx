import React from "react";
import styled from 'styled-components';

import Layout from '../layouts/Layout';
import PageLayout from '../layouts/PageLayout';
import Seo from "../components/seo"

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  align-items: center;
`;

const SuccessPage = (props) => (
  <Layout path={props.path}>
    <PageLayout>
      <Seo title="Success Contact Jennifer Allor" />
      <StyledSuccess>
        <h1>Success!</h1>
        <p>Thank you for your message. I will respond as soon as I am able. Thank you!</p>
      </StyledSuccess>
    </PageLayout>
  </Layout>
)

export default SuccessPage;