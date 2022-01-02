import * as React from "react"
import PropTypes from "prop-types"

import { Container } from "./LayoutStyle"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import Theme from "../styles/theme"

const Layout = ({ children, width }) => {
  return (
    <Theme>
      <Navbar />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
