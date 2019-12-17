import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CFP from "../components/CFP"
import Speakers from "../components/Speakers"
import Venue from "../components/Venue"
import About from "../components/About"
import Team from "../components/Team"
import ContactUs from "../components/ContactUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CFP />
    <Speakers />
    <Venue />
    <About />
    <Team />
    <ContactUs />
  </Layout>
)

export default IndexPage
