import React from "react"

//style
import { DivLogos, Logos } from "./AboutMeStyled"

import ImgGatsby from "../../assets/img/gatsby.png"
import ImgJs from "../../assets/img/javascript.png"
import ImgMaterial from "../../assets/img/material-ui.png"
import ImgReact from "../../assets/img/react.png"
import ImgStyled from "../../assets/img/styled-components.png"

const AboutMe = () => {
  return (
    <div className="container my-5" id="about">
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <div className="col-12">
            <h2>About Me</h2>
          </div>
          <div>
            <p>
              I'm a web developer with React, I have knowledge in Next.js and
              gatsby, I currently work with commercial web applications and I
              consider myself passionate about new technologies
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 my-5">
          <div>
            <DivLogos>
              <Logos src={ImgJs} alt="ImgJs" />
              <Logos src={ImgReact} alt="ImgReact" />
              <Logos src={ImgGatsby} alt="ImgGatsby" />
              <Logos src={ImgMaterial} alt="ImgMaterial" />
              <Logos src={ImgStyled} alt="ImgStyled" />
            </DivLogos>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
