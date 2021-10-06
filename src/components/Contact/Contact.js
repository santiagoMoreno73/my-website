import React from "react"

// style
import { Container, Div1, DivLinks } from "./ContactStyle"
import { IconGit, IconLinkdln } from "../../assets/icons/Config"
import { Slings } from "../../assets/icons/Config"
// link
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Container id="contact">
      <Div1>
        <div>
          <p>Santiago Moreno</p>
        </div>
        <DivLinks>
          <Link to="https://github.com/Santiago-testing">
            <button>
              <IconGit />
            </button>
          </Link>

          <Link to="https://www.linkedin.com/in/santiago-moreno-acosta-a0550b188/">
            <button>
              <IconLinkdln />
            </button>
          </Link>
        </DivLinks>
      </Div1>
    </Container>
  )
}

export default Contact
