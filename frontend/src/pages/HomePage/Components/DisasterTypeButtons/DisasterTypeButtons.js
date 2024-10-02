// src/pages/HomePage/Components/DisasterTypeButtons/DisasterTypeButtons.js

import React from "react";
import "./disasterTypeButtons.css";

const DisasterTypeButtons = ({ allDisasterTypes, selectedDisasterTypes, handleDisasterTypeChange }) => {
    return (
        <div className="disasterTypeButtonContainer">
            <div className="disasterTypeButtons">
                <button
                    onClick={() => handleDisasterTypeChange("all")}
                    className={selectedDisasterTypes.includes("all") ? "active" : ""}
                >
                    All Disasters
                </button>
                {allDisasterTypes.map(type => (
                    <button
                        key={type}
                        onClick={() => handleDisasterTypeChange(type)}
                        className={selectedDisasterTypes.includes(type) ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DisasterTypeButtons;