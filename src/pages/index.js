import * as React from "react"
import Layout from "../../src/layout/layout"

// components
import Features from "../components/Features/Features"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <AboutMe />
      <Features />
      <Contact />
    </Layout>
  )
}

export default IndexPage
