/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"

import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="bordered--top">
        <div className="section footer">
            <p>If you have any questions at all, just drop us a text or a call, or you can email <a href="mailto:do@darrenandoli.com">do@darrenandoli.com</a>.</p>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
