import React from "react"

//Style
import { Container, Div1, Divimg } from "./HeaderStyle"
import { IconDevelop } from "../../assets/icons/Config"

const Header = () => {
  return (
    <Container id="inicio">
      <Div1>
        <p>
          Hello, my name is Santiago<br></br>I'm developer
        </p>
      </Div1>
      <Divimg>
        <IconDevelop />
      </Divimg>
    </Container>
  )
}

export default Header
