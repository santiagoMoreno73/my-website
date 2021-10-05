import * as React from "react"
import Layout from "../../src/layout/layout"
import '../components/index.css'

//components
import Features from "../components/Features/Features"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout >
      <AboutMe/>
      <Features/>      
      <Contact/>
  </Layout>
)

export default IndexPage
