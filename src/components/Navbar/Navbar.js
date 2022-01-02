import React from "react"
import Burger from "./Burger"

// style
import { Nav } from "./NavbarStyle"

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo">Logo</div>
        <Burger />
      </Nav>
    </>
  )
}

export default Navbar
