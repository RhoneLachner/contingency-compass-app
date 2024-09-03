// src/pages/HomePage/Components/NavigationButtons/NavigationButtons.js

import React from "react";
import { Link } from "react-router-dom";
import "./navigationButtons.css";

const NavigationButtons = () => {
    return (
        <div className="navigationButtonsContainer">
            <div className="navigationButtons">
                <Link to="/SafetyTipsPage" className="navButton">Safety Tips</Link>
                <Link to="/ResourcesPage" className="navButton">Nearby Resources</Link>
                <Link to="/NotificationSettingsPage" className="navButton">Phone Notifications</Link>
            </div>
        </div>
    );
};

export default NavigationButtons;
