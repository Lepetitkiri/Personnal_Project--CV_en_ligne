import React, { useContext } from "react";
import CVCardStyle from "./Style.jsx";
import PropTypes from "prop-types";

import { MyContextForBasenameValue } from '../../index.js';

/** Composant fonctionnel représentant une carte de CV.
* @params {string} date - La date de l'expérience professionnelle.
* @params {string} titre - Le titre du poste occupé.
* @params {string} entreprise - Le nom de l'entreprise ou de l'organisation.
* @params {string} ville - Le nom de la ville où l'expérience professionnelle a eu lieu.
* @params {string} description - Une description de l'expérience professionnelle.
*/
const CVCard = ({ date, titre, entreprise, ville, description }) => {

  const { basename } = useContext(MyContextForBasenameValue);

  return (
    <CVCardStyle href={entreprise[1] === "" ? "" : entreprise[1]} target={entreprise[1] === "" ? "" : "_blank"} rel="noopener" >
      <div className="CVCard__datePart">
        <p>{date[0]}</p>
        <p>-</p>
        <p>{date[1]}</p>
        <p>{date[2]}</p>
      </div>

      <div className="CVCard__ExperiencePart">
        <div>
          <h3>{titre}</h3>
          {entreprise[2] === "" ?
            <div></div> :
            <img src={`${basename}${entreprise[2]}`} alt={entreprise[0]} />
          }
        </div>
        <p>{entreprise[0]} </p>
        <p>{ville}</p>
        <p>{description}</p>
      </div>
    </CVCardStyle >
  );
}

CVCard.propTypes = {
  date: PropTypes.array,
  titre: PropTypes.string,
  entreprise: PropTypes.array,
  ville: PropTypes.string,
  description: PropTypes.string
};

export default CVCard;