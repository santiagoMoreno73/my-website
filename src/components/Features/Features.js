import React from "react"

// link
import { Link } from "gatsby"

// style
import { DataCard } from "./FeatureStyle"

// mics
import { DataCards } from "../../utils/misc"

// icons
import { IconGit } from "../../assets/icons/Config"

const Features = () => {
  return (
    <div id="projects" className="d-flex flex-wrap justify-content-center mt-5">
      {DataCards.map(({ img, name, description, link, linkGit }) => (
        <DataCard key={`project-${name}-${Math.random()}`}>
          <img src={img} alt="img" />
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-end">
              <a href={link} target="_blank" className="link-text">
                See project
              </a>
            </div>
            <div>
              <Link target="_blank" rel="noopener" to={linkGit}>
                <button>
                  <IconGit />
                </button>
              </Link>
            </div>
          </div>
        </DataCard>
      ))}
    </div>
  )
}

export default Features
