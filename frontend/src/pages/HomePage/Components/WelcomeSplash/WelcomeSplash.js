import React from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import "./welcomeSplash.css";

const WelcomeSplash = () => {
  // Scroll to LocationSearch section
  const scrollToLocationSearch = () => {
    const locationSearchElement = document.getElementById("locationSearchID");
    if (locationSearchElement) {
      locationSearchElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="welcomeSplashContainer">
      <div className="splashBody">
        <NavigationButtons />
        <h1 className="splashTitle">Contingency Compass</h1>
        <p className="splashText">
          A compass to help empower, protect,
          <br /> and prepare for the unexpected.
        </p>
        <button onClick={scrollToLocationSearch} className="scrollButton">
          Real-Time Disaster Map
        </button>
      </div>
    </div>
  );
};

export default WelcomeSplash;