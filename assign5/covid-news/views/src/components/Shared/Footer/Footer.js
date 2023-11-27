import React from "react";
import "./Footer.css";
import { FaFacebook,FaInstagram,FaYoutube  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-style">
      <p>© All rights reserved by Covid News, 2023</p>
      <div>
        <FaFacebook className="icons" />
        <FaInstagram className="icons" />
        <FaYoutube className="icons" />
      </div>
    </div>
  );
};

export default Footer;
