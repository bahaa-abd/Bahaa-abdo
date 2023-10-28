import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiNestjs, SiExpress} from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          <li className="software-skill-inline">
            <i>
              <SiNestjs />
            </i>
            <p>NestJs</p>
          </li>
          <li className="software-skill-inline">
            <i>
              <SiExpress />
            </i>
            <p>NestJs</p>
          </li>
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
