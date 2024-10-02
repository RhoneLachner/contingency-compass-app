import React from "react";
import "./alertDashboard.css";

const AlertDashboard = ({ matchingDisasters = [], selectedLocation, proximity }) => {  // Ensure default array
    const formatLocation = () => {
        if (selectedLocation === "all") {
            return "All Locations";
        } else if (typeof selectedLocation === "object" && selectedLocation.lat && selectedLocation.lon) {
            return `Lat: ${selectedLocation.lat}, Lon: ${selectedLocation.lon}`;
        }
        return "Unknown location";
    };

    const locationText = formatLocation();

    console.log("Matching Disasters to Display in Dashboard:", matchingDisasters);

    return (
        <div className="alertDashboard">
            <h2>Real-Time Disaster Notification Dashboard</h2>
            <p>{locationText} - within {proximity} miles</p>
            {matchingDisasters.length > 0 ? (
                <ul>
                    {matchingDisasters.map((disaster, index) => (
                        <li key={`${disaster.id}-${index}`}>
                            <strong>{disaster.incidentType || "Unknown Type"}</strong>:{" "}
                            {disaster.message || "No description available"} (
                            <em>{disaster.location || "Unknown location"}</em>
                            {disaster.severity && ` - Severity: ${disaster.severity}`}
                            )
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No disasters reported in this area.</p>
            )}
        </div>
    );
};

export default AlertDashboard;
