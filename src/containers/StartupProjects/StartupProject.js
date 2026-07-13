import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="project-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                    ) : (
                      <div className="project-terminal-preview">
                        <span>$ npm run start</span>
                        <span>{project.projectName.toLowerCase()}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.technologies ? (
                      <div className="project-tech-stack">
                        {project.technologies.map((technology, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode tech-tag" : "tech-tag"
                              }
                            >
                              {technology}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                    {project.keyContributions ? (
                      <ul
                        className={
                          isDark
                            ? "dark-mode project-contributions"
                            : "project-contributions"
                        }
                      >
                        {project.keyContributions.map((contribution, i) => {
                          return <li key={i}>{contribution}</li>;
                        })}
                      </ul>
                    ) : null}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
