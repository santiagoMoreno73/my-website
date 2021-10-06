import React from "react"

// style
import { NavMenu } from "./NavbarStyle"

const Navbar = () => {
  return (
    <NavMenu>
      <a>AboutMe</a>
      <a>Proyectos</a>
      <a>Contact</a>
      <div className="dot"></div>
    </NavMenu>
  )
}

export default Navbar
