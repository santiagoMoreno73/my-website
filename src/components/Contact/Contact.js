import React from "react"

// link
import { Link } from "gatsby"

// style
import { Button } from "./ContactStyle"
import { IconGit, IconLinkdln } from "../../assets/icons/Config"

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <p>Santiago Moreno</p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link target="_blank" to="https://github.com/Santiago-testing">
            <Button>
              <IconGit />
            </Button>
          </Link>
        </div>
        <div className="col-6">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/santiago-moreno-acosta-a0550b188/"
          >
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
