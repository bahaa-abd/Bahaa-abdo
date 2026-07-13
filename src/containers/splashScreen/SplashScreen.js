import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-terminal" aria-label="Loading portfolio">
        <div className="terminal-header">
          <span></span>
          <span></span>
          <span></span>
          <p>portfolio.sh</p>
        </div>
        <div className="terminal-body">
          <p>
            <span className="terminal-prompt">$</span> cat name
          </p>
          <h1 className="splash-title" aria-label={greeting.username}>
            {greeting.username.split("").map((letter, index) => (
              <span
                aria-hidden="true"
                className="splash-title-letter"
                key={`${letter}-${index}`}
                style={{animationDelay: `${0.12 + index * 0.045}s`}}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <p>
            <span className="terminal-prompt">$</span> npm run build-profile
          </p>
          <p className="terminal-muted">Compiling backend developer portfolio...</p>
          <div className="splash-progress">
            <span></span>
          </div>
          <p className="terminal-success">Ready. Launching UI...</p>
        </div>
      </div>
    </div>
  );
}
