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
    //<NavMenu>
    //  <Link to="/#about">AboutMe</Link>
    //  <Link to="/#projects">Proyectos</Link>
    //  <Link to="/#contact">Contact</Link>
    //  <div className="dot"></div>
    //</NavMenu>
  )
}

export default Navbar
