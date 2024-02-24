import React from "react";
import CVCardStyle from "./Style.jsx";
import PropTypes from "prop-types";

// Components

function CVCard({ date, titre, entreprise, ville, description, basename }) {

  return (
    <CVCardStyle href={entreprise[1]}>
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
  description: PropTypes.string,
  basename: PropTypes.string
};

export default CVCard;