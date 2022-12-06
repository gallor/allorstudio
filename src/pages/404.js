import React from "react"

import Layout from "../layouts/Layout"
import Seo from "../components/seo"
import PageLayout from "../layouts/PageLayout"

const NotFoundPage = () => (
  <Layout>
    <PageLayout>
      <Seo title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageLayout>
  </Layout>
)

export default NotFoundPage
