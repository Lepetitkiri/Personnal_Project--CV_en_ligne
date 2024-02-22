import React from "react";
import PropTypes from "prop-types";
import SectionStyle from "./Style.jsx";

// Components
import Home from '../Home/Index.jsx';
import Projects from '../Projects/Index.jsx';
import CV from '../CV/Index.jsx';
import Error from '../Error/Index.jsx';
import Contact from '../Contact/Index.jsx';

function Section({ pageTitle }) {

  let content;

  switch (pageTitle) {
    case 'Home':
      content = (
        <Home />
      );
      break;
    case 'Projects':
      content = (
        <Projects />
      );
      break;
    case 'CV':
      content = (
        <CV />
      );
      break;
    case 'Contact':
      content = (
        <Contact />
      );
      break;
    default:
      content = (
        <Error />
      );
  }

  return (
    <SectionStyle>
      {content}
    </SectionStyle>
  );
}

Section.propTypes = {
  pageTitle: PropTypes.string
};

export default Section;