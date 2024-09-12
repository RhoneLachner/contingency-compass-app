// src/pages/HomePage/Components/AlertDashboard/AlertDashboard.js

import React from "react";
import "./alertDashboard.css";

const AlertDashboard = ({ disasters, selectedLocation, proximity, error }) => {
    const locationText = selectedLocation === "all" ? "All Locations" : `${selectedLocation} - within ${proximity} miles`;

    return (
        <div className="alertDashboard">
            <h2>Real-Time Disaster Alerts</h2>
            <p>{locationText}</p>
            
            {error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <ul>
                    {disasters.map((disaster, index) => {
                        
                        const [incidentType, ...rest] = disaster.split(':');

                        return (
                            <li key={index}>
                                <strong>{incidentType}:</strong> {rest.join(':')}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default AlertDashboard;

