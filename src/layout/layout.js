import * as React from "react"
import PropTypes from "prop-types"

import { Container } from "./LayoutStyle"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import {GlobalStyles} from '../styles/globals'

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyles></GlobalStyles>
      <Navbar />
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
