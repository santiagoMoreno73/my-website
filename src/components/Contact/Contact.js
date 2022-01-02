import React from "react"

// style
import { Button } from "./ContactStyle"
import { IconGit, IconLinkdln } from "../../assets/icons/Config"

// link
import { Link } from "gatsby"

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <p>Santiago Moreno</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link to="https://github.com/Santiago-testing">
            <Button>
              <IconGit />
            </Button>
          </Link>
        </div>
        <div className="col-6">
          <Link to="https://www.linkedin.com/in/santiago-moreno-acosta-a0550b188/">
            <Button>
              <IconLinkdln />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
