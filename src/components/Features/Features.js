import React from "react"

// style
import { DataCard } from "./FeatureStyle"

// mics
import { DataCards } from "../../utils/misc"

const Features = () => {
  return (
    <div id="projects" className="d-flex flex-wrap justify-content-center mt-5">
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
    </div>
  )
}

export default Features
