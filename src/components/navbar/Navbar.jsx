import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/Digital Spaniel logo.png";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu.svg";
import { ReactComponent as Close } from "../../assets/icon/close.svg";
import Link from "./Link";

const navbarStyles = (visible, prevScrollPos) => ({
  backgroundColor: visible && prevScrollPos > 0 ? "white" : "transparent",
  top: visible ? "0" : "-120px",
});

const Menu = (color) => {
  return (
    <>
      <p>
        <Link url="#services" text="Services" color={color} />
      </p>
      <p>
        <Link url="#work" text="Work" color={color} />
      </p>
      <p>
        <Link url="#about" text="About" color={color} />
      </p>
      <p>
        <Link url="#blog" text="Blog" color={color} />
      </p>
      <p>
        <Link url="#contact" text="Contact" color={color} />
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [textColor, setTextColor] = useState("white");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
    if (window.scrollY > 1) {
      setTextColor("black");
    } else {
      setTextColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="navbar" style={navbarStyles(visible, prevScrollPos)}>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div
        className="navbar-links_container"
        style={{ color: textColor }}
      >
        <Menu color={textColor} />
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <Close
            className=""
            color="#000"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <MenuIcon
            className=""
            color="#000"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
