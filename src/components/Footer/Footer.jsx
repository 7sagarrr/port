import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div id="FooterContainer">
      <div id="FooterWrapper">
        <h1 id="Logo">SAGAR</h1>
        <div id="SocialMediaIcons">
          <a
            id="SocialMediaIcon"
            href="https://www.linkedin.com/in/sagar-suri-961a07305/"
            target="display"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            id="SocialMediaIcon"
            href="https://github.com/7sagarrr"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a id="SocialMediaIcon" href="mailto:sagarsuri7009@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div id="Copyright">
          &copy; 2024 Sagar. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
