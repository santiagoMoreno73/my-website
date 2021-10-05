import React from "react"

import { Container, Div1 } from "./ContactStyle"
import { IconGit, IconLinkdln } from "../../assets/icons/Config"

const Contact = () => {
  return (
    <Container id="contact">
      <Div1>
        <div>
          <p>Santiago Moreno</p>
        </div>
        <div>
          <button>
            <IconGit />
          </button>
          <button>
            <IconLinkdln />
          </button>
        </div>
      </Div1>
    </Container>
  )
}

export default Contact
