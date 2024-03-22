import React, { useContext } from "react";
import ProjectsStyle from "./Style.jsx";
import PropTypes from "prop-types";

import { MyContextForBasenameValue } from '../../index.js';

import ProjectListening from '../../Ressources/ProjectListing.json';

import ProjectCard from '../ProjectCard/Index.jsx';

const Projects = () => {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <ProjectsStyle >
      <div className="ProjectPage__titre">
        <h2> Mes projets</h2>
        <img src={`${basename}/Pictures/folder.png`} alt="Dossier" />
      </div>

      <div className="ProjectPage__gallery">
        {ProjectListening.map(array => (
          <ProjectCard key={`ProjectCard-${array.titre}`}
            basename={basename}
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

Projects.propTypes = {
  basename: PropTypes.string
};

export default Projects;