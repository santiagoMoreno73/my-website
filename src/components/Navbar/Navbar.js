import React from "react"
import { useRef } from "react"
//misc
import { navLinks } from "../../utils/misc"
//style
import { NavMenu} from "./NavbarStyle"

const Navbar = () => {
  
  const link = useRef();

  const {menu} = navLinks

  return (
    <NavMenu>
      <a>AboutMe</a>
      <a>Proyectos</a>
      <a>Proyectos</a>  
      <div className='dot'></div>           
    </NavMenu>    
  )
}

export default Navbar
