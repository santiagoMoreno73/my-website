import React from "react"

// style
import { NavMenu } from "./NavbarStyle"

// link
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <NavMenu>
      <Link to="/#about">AboutMe</Link>
      <Link to="/#projects">Proyectos</Link>
      <Link to="/#contact">Contact</Link>
      <div className="dot"></div>
    </NavMenu>
  )
}

export default Navbar
