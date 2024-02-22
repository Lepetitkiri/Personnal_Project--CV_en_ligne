import React from "react";
import ProjectsStyle from "./Style.jsx";

import ProjectListening from '../../Ressources/ProjectListing.json';

// Components
import ProjectCard from '../ProjectCard/Index.jsx';

function Projects() {

  return (
    <ProjectsStyle>
      <div className="ProjectPage__titre">
        <h2> Mes projets</h2>
        <img src='/Pictures/folder.png' alt="Dossier" />
      </div>

      <div className="ProjectPage__gallery">
        {ProjectListening.map(array => (
          <ProjectCard key={`ProjectCard-${array.titre}`}
            titre={array.titre}
            date={array.date}
            description={array.description}
            details={array.detail}
            lien={array.lien}
            image={array.image}
            techno={array.techno} />
        ))}
      </div>
    </ProjectsStyle >
  );
}

export default Projects;