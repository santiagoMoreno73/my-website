import * as React from "react"
import Layout from "../../src/layout/layout"
import "../components/index.css"

//components
import Features from "../components/Features/Features"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
      <AboutMe />
      <Features />
      <Contact />
    </Layout>
  )
}

export default IndexPage
