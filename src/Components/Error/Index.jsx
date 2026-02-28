import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ErrorStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

const Error = () => {

  const { basename } = useContext(MyContextForBasenameValue);

  // Initialisation de la valeur du state pour l'alien
  const [CurrentAlienPosition, setCurrentAlienPosition] = useState(0);

  // Fonctions de MAJ de la valeur du state entre 0 et 1
  const AlienUp = () => {
    setCurrentAlienPosition((prevPosition) => (prevPosition === 0 ? prevPosition + 1 : prevPosition = 0));
  }
  const AlienDown = () => {
    setCurrentAlienPosition((prevPosition) => (prevPosition === 1 ? prevPosition - 1 : prevPosition = 0));
  }

  return (
    <ErrorStyle>
      <>
        <img src={`${basename}/Pictures/404-error.png`} alt='Soucoupe volante 404' />
        <h2>Oh non, la page d&apos;erreur !!! </h2>
        <Link to="/"> Retour vers l&apos;accueil </Link>

        <div className="MiniGame" onMouseDown={AlienUp} onMouseUp={AlienDown} >
          <div className="MiniGame__road1" >
            {(CurrentAlienPosition) === 0 ?
              <div></div> :
              <img className='Alien' src={`${basename}/Pictures/alien.png`} alt='Alien violet' />
            }
          </div>
          <div className="MiniGame__road2">
            {(CurrentAlienPosition) === 1 ?
              <div></div> :
              <img className='Alien' src={`${basename}/Pictures/alien.png`} alt='Alien violet' />
            }
            <img className='Obstacle Obstacle--1' src={`${basename}/Pictures/security.png`} alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--2' src={`${basename}/Pictures/security.png`} alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--3' src={`${basename}/Pictures/security.png`} alt='Barrière de sécurité' />
            <img className='Obstacle Obstacle--4' src={`${basename}/Pictures/security.png`} alt='Barrière de sécurité' />
          </div>
        </div>
      </>
    </ErrorStyle >
  );
}

export default Error;