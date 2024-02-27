import React from "react";
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';
import SectionStyle from "./Style.jsx";

// Components
import Home from '../Home/Index.jsx';
import Projects from '../Projects/Index.jsx';
import CV from '../CV/Index.jsx';
import Contact from '../Contact/Index.jsx';

function Section({ pageTitle, basename }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <Home basename={basename} />
      );
      break;
    case 'Projects':
      content = (
        <Projects basename={basename} />
      );
      break;
    case 'CV':
      content = (
        <CV basename={basename} />
      );
      break;
    case 'Contact':
      content = (
        <Contact basename={basename} />
      );
      break;
    default:
      return <Navigate to="/Error" />
  }

  return (
    <SectionStyle >
      {content}
    </SectionStyle>
  );
}

Section.propTypes = {
  pageTitle: PropTypes.string,
  basename: PropTypes.string
};

export default Section;