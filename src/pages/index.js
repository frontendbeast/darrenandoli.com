import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import BudirChurchXS from "../images/budir-church-xs.jpg"
import BudirChurchSm from "../images/budir-church-sm.jpg"
import BudirChurchMd from "../images/budir-church-md.jpg"
import BudirChurchLg from "../images/budir-church-lg.jpg"
import BudirChurchXL from "../images/budir-church-xl.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="centred">
      <p>Eighteenth of July<br/>Two Thousand And Twenty One</p>
      <p>B&#xFA;&#xF0;ir, Iceland</p>
    </div>
    <div className="ratio">
      <div className="ratio__container">
        <div className="ratio__padding"></div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
