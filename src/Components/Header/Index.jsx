import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyle from "./Style.jsx";

function Header(pageTitle) {

  return (
    <HeaderStyle>
      <h1> Domitille REGNAULT - Developpeuse web</h1>

      <nav>
        <Link to='/' >
          <div className='Navigation__icon'>
            <img src='/Pictures/home.png' alt='Accueil'></img>
            <p>Accueil</p>
          </div>
          <div className="Section__trianglePart">
            {(pageTitle.pageTitle) === 'Home' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/Projects' >
          <div className='Navigation__icon'>
            <img src='/Pictures/projects.png' alt='Projects'></img>
            <p>Projets</p>
          </div>
          <div className="Section__trianglePart">
            {(pageTitle.pageTitle) === 'Projects' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/CV' >
          <div className='Navigation__icon'>
            <img src='/Pictures/diploma.png' alt='Diplome'></img>
            <p>C V</p>
          </div>
          <div className="Section__trianglePart">
            {(pageTitle.pageTitle) === 'CV' ?
              <div className="Section__triangle"></div> :
              <div></div>
            }
          </div>
        </Link>

        <Link to='/Contact' >
          <div className='Navigation__icon'>
            <img src='/Pictures/contacts.png' alt='Contact'></img>
            <p>Contact</p>
          </div>
          <div className="Section__trianglePart">
            {(pageTitle.pageTitle) === 'Contact' ?
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