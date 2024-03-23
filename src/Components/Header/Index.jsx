import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

const Header = ({ pageTitle }) => {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <HeaderStyle>
      <h1> Domitille REGNAULT - Développeuse d'applications web</h1>

      <nav>
        <Link to='/' >
          <div className='Navigation__icon'>
            <img src={`${basename}/Pictures/home.png`} alt='Accueil'></img>
            <p>Accueil</p>
          </div>
          <div className="Section__trianglePart">
            {pageTitle === 'Home' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/Projects' >
          <div className='Navigation__icon'>
            <img src={`${basename}/Pictures/projects.png`} alt='Projects'></img>
            <p>Projets</p>
          </div>
          <div className="Section__trianglePart">
            {pageTitle === 'Projects' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/CV' >
          <div className='Navigation__icon'>
            <img src={`${basename}/Pictures/diploma.png`} alt='Diplome'></img>
            <p>C V</p>
          </div>
          <div className="Section__trianglePart">
            {pageTitle === 'CV' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/Contact' >
          <div className='Navigation__icon'>
            <img src={`${basename}/Pictures/contacts.png`} alt='Contact'></img>
            <p>Contact</p>
          </div>
          <div className="Section__trianglePart">
            {pageTitle === 'Contact' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>
      </nav>
    </HeaderStyle >
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string
};

export default Header;