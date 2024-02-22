import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ErrorStyle from "./Style.jsx";

// Components

function Error() {

  // Initialisation de la valeur du state pour l'alien
  const [CurrentAlienPosition, setCurrentAlienPosition] = useState(0);

  // Fonctions de MAJ de la valeur du state entre 0 et 1
  function AlienUp() {
    setCurrentAlienPosition((prevPosition) => (prevPosition === 0 ? prevPosition + 1 : prevPosition = 0));
  }
  function AlienDown() {
    setCurrentAlienPosition((prevPosition) => (prevPosition === 1 ? prevPosition - 1 : prevPosition = 0));
  }

  return (
    <ErrorStyle>
      <>
        <img src='/Pictures/404-error.png' alt='Soucoupe volante 404' />
        <h2>Oh non, la page d&apos;erreur !!! </h2>
        <Link to="/"> Retour vers l&apos;accueil </Link>

        <div className="MiniGame" onMouseDown={AlienUp} onMouseUp={AlienDown} >
          <div className="MiniGame__road1" >
            {(CurrentAlienPosition) === 0 ?
              <div></div> :
              <img className='Alien' src='/Pictures/alien.png' alt='Alien violet' />
            }
          </div>
          <div className="MiniGame__road2">
            {(CurrentAlienPosition) === 1 ?
              <div></div> :
              <img className='Alien' src='/Pictures/alien.png' alt='Alien violet' />
            }
            <img className='Obstacle Obstacle--1' src='/Pictures/security.png' alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--2' src='/Pictures/security.png' alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--3' src='/Pictures/security.png' alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--4' src='/Pictures/security.png' alt='Barrière de sécurité' />
          </div>
        </div>
      </>
    </ErrorStyle >
  );
}

export default Error;