import React from "react";
import "./alertMap.css";

const AlertMap = ({ selectedLocation, proximity, showAll }) => {
    return (
        <div className="mapContainer">
            {showAll ? (
                <p>Map will display all locations.</p>
            ) : (
                <p>Map will display locations within {proximity} miles of {selectedLocation.lat}, {selectedLocation.lon}.</p>
            )}
            {/* Future plan to map with disaster markers here based on showAll and proximity */}
        </div>
    );
};

export default AlertMap;
