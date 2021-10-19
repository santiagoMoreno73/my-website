import React from "react"

import { Ul } from "./NavbarStyle"

// link
import { Link } from "gatsby"

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/#inicio">Inicio</Link>
      <Link to="/#about">AboutMe</Link>
      <Link to="/#projects">Proyectos</Link>
      <Link to="/#contact">Contact</Link>
      <div className="dot"></div>
    </Ul>
  )
}

export default RightNav
