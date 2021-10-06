import React from "react"

// style
import { Container, DataCard } from "./FeatureStyle"

// mics
import { DataCards } from "../../utils/misc"

const Features = () => {
  return (
    <Container id="projects">
      {DataCards.map(({ img, name, description, link }) => (
        <DataCard key={`project-${name}-${Math.random()}`}>
          <img src={img} alt="img" />
          <h4>{name}</h4>
          <p>{description}</p>
          <a href={link} className="link-text">
            Observa
          </a>
        </DataCard>
      ))}
    </Container>
  )
}

export default Features
