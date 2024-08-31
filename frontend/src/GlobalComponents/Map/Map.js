// src/GlobalComponents/Map/Map.js

import React from "react";
import "./map.css";

const Map = ({ selectedLocation, proximity, disasters, showAll }) => {
    return (
        <div className="mapContainer">
            {showAll ? (
                <p>Map will display all locations.</p>
            ) : (
                <p>Map will display locations within {proximity} miles of {selectedLocation}.</p>
            )}
            {/* Future plan to map with disaster markers here based on showAll and proximity */}
            {/* Example: Use disaster data to place markers */}
        </div>
    );
};

export default Map;
