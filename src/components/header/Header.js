import React, {useContext, useEffect, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  skillsSection,
  openSource,
  bigProjects,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isLogoBooting, setIsLogoBooting] = useState(true);
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewBigPro = bigProjects.display;
  const viewEducation = educationInfo.display;

  useEffect(() => {
    const logoTimer = setTimeout(() => setIsLogoBooting(false), 1600);
    return () => clearTimeout(logoTimer);
  }, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-prompt">$</span>
          <span className={isLogoBooting ? "logo-name logo-command" : "logo-name"}>
            {isLogoBooting ? "cat name" : "Bahaa Eddin Abdo"}
          </span>
          <span className="logo-cursor"></span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewBigPro && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
