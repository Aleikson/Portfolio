import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Style from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'Aleikson';

  return (
    <div className={Style.footerContainer}>
      <div className={Style.contactContainer}>
        <div className={Style.content}>
          <a href="mailto:aleiksonsilva@hotmail.com">
            <FaEnvelope className={Style.contactIcon} />
            <spam className={Style.contactText}>aleiksonsilva@hotmail.com</spam>
          </a>
        </div>
        <div className={Style.content}>
          <a href="https://www.linkedin.com/in/aleikson-frontend/">
            <BsLinkedin className={Style.contactIcon} />
            <spam className={Style.contactText}>linkedin/Aleikson</spam>
          </a>
        </div>
        <div className={Style.content}>
          <a href="https://github.com/Aleikson">
            <FaGithub className={Style.contactIcon} />
            <spam className={Style.contactText}>github.com/Aleikson</spam>
          </a>
        </div>
      </div>
      <p className={Style.footerText}>&copy; {currentYear} {authorName} - Todos os direitos reservados</p>
    </div>
  );
};

export default Footer;