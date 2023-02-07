import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/tiengtrungphontheACE">
          <FaFacebookF />
        </a>
        <a href="https://zalo.me/0764808967">
          <SiZalo />
        </a>
        <a href="mailto: tiengtrungace@gmail.com">
          <SiGmail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; VyChan All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
