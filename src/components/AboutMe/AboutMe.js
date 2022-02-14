import React from "react"

//style
import { DivLogos, Logo } from "./AboutMeStyled"

// data icons
import { DataIcons } from "../../utils/misc"

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
              I'm a React web developer, I have knowledge in Next.js and gatsby,
              I'm currently working with commercial web applications and I
              consider myself passionate about new technologies.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 my-5">
          <div className="d-flex justify-content-center">
            <DivLogos>
              {DataIcons.map(dataicon => (
                <Logo src={dataicon.img} alt={dataicon.name} />
              ))}
            </DivLogos>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
