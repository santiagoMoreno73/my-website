import React, { useState } from "react"

import { StyledBurguer } from "./NavbarStyle"

// components
import RightNav from "./RightNav"

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} />
    </>
  )
}

export default Burger
