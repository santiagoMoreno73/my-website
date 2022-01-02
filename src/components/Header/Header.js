import React from "react"

//Style
import { IconDevelop } from "../../assets/icons/Config"
import { Container } from "./HeaderStyle.js"

const Header = () => {
  return (
    <Container className="container" id="home">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <div className="col-12 title">
            <h2>Hello, my name is Santiago</h2>
          </div>
          <div className="col-12 title">
            <h2>I'm developer</h2>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
          <IconDevelop />
        </div>
      </div>
    </Container>
  )
}

export default Header
