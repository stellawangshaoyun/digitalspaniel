import React from "react";
import "./footer.css";
const closerText = { fontWeight: 400, paddingTop: 0, marginTop: 0 };
const Footer = () => (
  <div className="footer section__padding" id="contact">
    <div className="footer-links">
      <div className="footer-links_header">
        <h1 className="header__text__dark header__font__family__size">
          We’re a brands
        </h1>
        <h1 className="header__text__light header__font__family__size">
          best friend
        </h1>
        <div className="footer-links_btn">
          <button className="talk_button wobble-hor-bottom" type="button">
            Let’s talk
          </button>
        </div>
      </div>
      <div className="footer-links_div">
        <h4>EXPLORE</h4>
        <p>Services</p>
        <p>Work</p>
        <p>About</p>
        <p>Blog</p>
        <p>Careers</p>
      </div>
      <div className="footer-links_div">
        <h4>SERVICES</h4>
        <p>Brand</p>
        <p>Development</p>
        <p>Marketing</p>
      </div>
      <div className="footer-links_div">
        <h4>QUESTIONS?</h4>
        <p>Call Us </p>
        <p style={closerText}>0121 345 678</p>
        <p>Email Us</p>
        <p style={closerText}>info@digitalspaniel.co.uk</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>Copyright © Digital Spaniel 2023. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
