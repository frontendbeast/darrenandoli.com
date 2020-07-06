import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import SEO from "../seo"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <SEO title="" />
          <main>{children}</main>
          <div className="bordered--top">
            <div className="section footer">
                <p>If you have any questions at all, just drop us a text or a call, or you can email <a href="mailto:do@darrenandoli.com">do@darrenandoli.com</a>.</p>
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
