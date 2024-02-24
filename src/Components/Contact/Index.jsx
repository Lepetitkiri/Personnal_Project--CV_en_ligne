import React from "react";
import ContactStyle from "./Style.jsx";
import PropTypes from "prop-types";

// Components

function Contact({ basename }) {

  return (
    <ContactStyle className='ContactPage'>
      <h2> Comment me contacter ?</h2>
      <div className="ContactPage__EmailPart">
        <p> Le plus simple c&apos;est par içi </p>
        <a href="mailto:domitille.regnault@hotmail.fr"><img src={`${basename}/Pictures/email.png`} alt='Email' className="EmailLogo"></img></a>
      </div>

      <div className='ContactPage__SocialNetworkPart'>
        <p> Mais vous pouvez aussi passer par là </p>
        <a href="https://www.linkedin.com/in/domitille-r-7b9862150/"><img src={`${basename}/Pictures/linkedin.png`} alt='Logo Linkedin'></img></a>
        <a href="https://github.com/Lepetitkiri"><img src={`${basename}/Pictures/github.png`} alt='Logo Github'></img></a>
      </div>
    </ContactStyle>
  );
}

Contact.propTypes = {
  basename: PropTypes.string
};

export default Contact;