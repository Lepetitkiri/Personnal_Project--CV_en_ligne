import React, { useContext } from "react";
import ProjectsStyle from "./Style.jsx";
import CategorySwitch from '../../Components/CategorySwitch/Index.jsx';

import { MyContextForBasenameValue } from '../../index.js';

import ProjectListening from '../../Ressources/ProjectListing.json';

import ProjectCard from '../ProjectCard/Index.jsx';

const Projects = () => {

  const { basename, activeCategory } = useContext(MyContextForBasenameValue);

  // Filtre les projets avant de les afficher
  const filteredProjects = ProjectListening.filter(project => {
    // Si le type est un tableau, on regarde s'il contient activeCategory
    if (Array.isArray(project.Type)) {
      return project.Type.includes(activeCategory);
    }
    return project.Type === activeCategory;
  });

  return (
    <ProjectsStyle >
      <div className="ProjectPage__titre">
        <h2> Mes projets</h2>
        <img src={`${basename}/Pictures/folder.png`} alt="Dossier" />
      </div>
      <CategorySwitch />

      <div className="ProjectPage__gallery">
        {filteredProjects.map(array => (
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

export default Projects;