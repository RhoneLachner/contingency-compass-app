// src/pages/HomePage/Components/AlertDashboard/AlertDashboard.js

import React from "react";
import "./alertDashboard.css";

const AlertDashboard = ({ disasters, selectedLocation, proximity }) => {
    const locationText = selectedLocation === "all" ? "All Locations" : `${selectedLocation} - within ${proximity} miles`;

    return (
        <div className="alertDashboard">
            <h2>Real-Time Disaster Notification Dashboard</h2>
            <p>{locationText}</p>
            <ul>
                {disasters.map((disaster) => (
                    <li key={disaster.id}>
                        <strong>{disaster.type}</strong>: {disaster.message} (<em>{disaster.location}, {disaster.state}</em>)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertDashboard;
