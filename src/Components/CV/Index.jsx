import React, { useContext } from "react";
import CVStyle from "./Style.jsx";

// Context
import { MyContextForBasenameValue } from '../../index.js';

// Components
import CVCard from "../CVCard/Index";

// Données
import CVDiplomes from "../../Ressources/CVDiplomes.json";
import CVExperiences from "../../Ressources/CVExperiences.json";
import CVPlus from "../../Ressources/CVPlus.json";

const CV = () => {

  const { basename } = useContext(MyContextForBasenameValue);

  return (
    <CVStyle>
      <div className='CVPage__PortraitPart'>
        <h2>Mon CV</h2>
        <img src={`${basename}/Pictures/Portrait.png`} alt='Portrait' />
      </div>

      <div className='CVPage__ExperiencePart'>
        <div className='CVPage__ExperiencePart--Titre'>
          <img src={`${basename}/Pictures/diploma2.png`} alt='Diplome' />
          <h3>Mes diplômes</h3>
        </div>
        {CVDiplomes.map((CVDiplomes, index) => (
          <CVCard key={`CVDiplomes-${index}`} basename={basename} titre={CVDiplomes.titre} entreprise={CVDiplomes.entreprise} ville={CVDiplomes.ville} date={CVDiplomes.date} description={CVDiplomes.description} />
        ))}

        <div className='CVPage__ExperiencePart--Titre'>
          <img src={`${basename}/Pictures/suitcase.png`} alt='Sac' />
          <h3>Mon expérience profesionnelle</h3>
        </div>
        {CVExperiences.map((CVExperiences, index) => (
          <CVCard key={`CVExperiences-${index}`} basename={basename} titre={CVExperiences.titre} entreprise={CVExperiences.entreprise} ville={CVExperiences.ville} date={CVExperiences.date} description={CVExperiences.description} />
        ))}

        <div className='CVPage__ExperiencePart--Titre'>
          <img src={`${basename}/Pictures/hand.png`} alt='Pouce vers le haut' />
          <h3>Mes petits plus</h3>
        </div>
        {CVPlus.map((CVPlus, index) => (
          <CVCard key={`CVPlus-${index}`} basename={basename} titre={CVPlus.titre} entreprise={CVPlus.entreprise} ville={CVPlus.ville} date={CVPlus.date} description={CVPlus.description} />
        ))}

      </div>
    </CVStyle >
  );
}

export default CV;