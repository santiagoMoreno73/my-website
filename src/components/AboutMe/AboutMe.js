import React from "react"

//style
import { Container, Div1, DivImg, DivLogos, Img, Logos } from "./AboutMeStyled"

import ImgDevelop from "../../assets/img/develop.jpg"
import ImgGatsby from "../../assets/img/gatsby.png"
import ImgJs from "../../assets/img/javascript.png"
import ImgMaterial from "../../assets/img/material-ui.png"
import ImgReact from "../../assets/img/react.png"
import ImgStyled from "../../assets/img/styled-components.png"

const AboutMe = () => {
  return (
    <Container id="about">
      <Div1>
        <h2>About Me</h2>
        <p>
          Es simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desk
        </p>
        <p>Tecnologias</p>
        <DivLogos>
          <Logos src={ImgJs} alt="ImgJs" />
          <Logos src={ImgReact} alt="ImgReact" />
          <Logos src={ImgGatsby} alt="ImgGatsby" />
          <Logos src={ImgMaterial} alt="ImgMaterial" />
          <Logos src={ImgStyled} alt="ImgStyled" />
        </DivLogos>
      </Div1>
      <DivImg>
        <Img src={ImgDevelop} alt="developer"></Img>
      </DivImg>
    </Container>
  )
}

export default AboutMe
