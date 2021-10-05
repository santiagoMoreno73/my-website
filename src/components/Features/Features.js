import React from "react"

//Style
import { Container, Card, DataCard } from "./FeatureStyle"

//img
import RickandMorty from "../../assets/img/RickandMorty.png"
import CarritoVanilla from "../../assets/img/CarritoVanilla.png"

const Features = () => {
  return (
    <Container id="projects">
      <DataCard>
        <img src={CarritoVanilla} alt="img de Rick" />
        <h4>CARRITO DE COMPRAS</h4>
        <p>Carrito de compras en Vanilla JS</p>
        <a
          href="https://carrito-compras-ebon.vercel.app/"
          className="link-text"
        >
          Observa
        </a>
      </DataCard>
      <DataCard>
        <img src={RickandMorty} alt="img de Rick" />
        <h4>RICK AND MORTY</h4>
        <p>Consumo de API y filtrado de informacion</p>
        <a href="https://api-rickand-morty.vercel.app/" className="link-text">
          Observa
        </a>
      </DataCard>
      <DataCard>
        <h3>Proyecto</h3>
        <h4>CARE FACILITES</h4>
        <p>xxxxxxxxxx</p>
        <span className="link-text">Observa</span>
      </DataCard>
      <DataCard>
        <h3>Proyecto</h3>
        <h4>CARE FACILITES</h4>
        <p>xxxxxxxxxx</p>
        <span className="link-text">Observa</span>
      </DataCard>
    </Container>
  )
}

export default Features
