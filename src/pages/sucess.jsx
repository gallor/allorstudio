import React from "react";
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import PageLayout from '../layouts/PageLayout';

import Seo from "../components/seo"

const SuccessPage = (props) => {
  <Layout path={props.path}>
    <PageLayout>
      <Seo title="Contact Jennifer Allor" />
      <H1>Success</H1>
      <p>Thank you for your message. I will respond as soon as I am able. Thank you!</p>
    </PageLayout>
  </Layout>
}