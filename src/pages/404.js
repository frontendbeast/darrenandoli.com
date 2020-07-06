import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="section">
      <h2>This page got cold feet</h2>
      <p>Sorry, no idea where this page has got to. It probably just needs a little time to get itself together. Try going <Link to="/">home</Link> and seeing if it&rsquo;s there.</p>
    </div>
  </Layout>
)

export default NotFoundPage
