import React from "react"
import Burger from "./Burger"

// style
import { Nav } from "./NavbarStyle"

import { IoRocketSharp } from "@react-icons/all-files/io5/IoRocketSharp"

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo">
          <IoRocketSharp />
        </div>
        <Burger />
      </Nav>
    </>
  )
}

export default Navbar
