import React, { useContext } from "react";
import ProjectCardStyle from "./Style.jsx";
import PropTypes from "prop-types";

import { MyContextForBasenameValue } from '../../index.js';

/** Composant fonctionnel représentant une carte de projet.
* @params {string} titre - Le titre du projet.
* @params {string} date - La date de démarrage du projet.
* @params {string} description - Une description du projet.
* @params {string} datails - Détails relatifs au projet.
* @params {string} lien - Lien vers le repo ou le site relatif au projet.
* @params {array} techno - Liste des technologies majeures utilisées dans le projet.
*/
const ProjectCard = ({ titre, date, description, details, lien, techno }) => {

  const { basename } = useContext(MyContextForBasenameValue);

  return (
    <ProjectCardStyle href={lien} target="_blank" rel="noopener" className='ProjectPage__galleryCard' >
      <div className='ProjectPage__galleryCardTitre'>
        <h3> {titre} </h3>
        <p> {date} </p>
      </div>

      <div className='ProjectPage__galleryCardDescription'>
        <p> {description} </p>
        <p> {details} </p>
      </div>

      <div className='ProjectPage__galleryCardLogo'>
        {techno.map((technologie, index) => (
          <img key={`technologie-${index}`} src={`${basename}/Pictures/${technologie}.png`} alt={`logo ${technologie}`} />
        ))}
      </div>
    </ProjectCardStyle >
  );
}

ProjectCard.propTypes = {
  titre: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  lien: PropTypes.string,
  image: PropTypes.string,
  techno: PropTypes.array
};

export default ProjectCard;