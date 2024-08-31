// src/GlobalComponents/LocationSearch/LocationSearch.js

import React, { useState } from "react";
import "./locationSearch.css";

const LocationSearch = ({ onLocationChange, showAllButton }) => {
    const [inputValue, setInputValue] = useState("");
    const [proximity, setProximity] = useState(10); // Default proximity
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError(""); // Clear error when user starts typing
    };

    const handleProximityChange = (e) => {
        setProximity(e.target.value);
    };

    const handleSearch = () => {
        // Simple regex patterns for city, state, or zip code
        const cityStatePattern = /^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$/;
        const zipCodePattern = /^\d{5}$/;

        if (cityStatePattern.test(inputValue) || zipCodePattern.test(inputValue)) {
            setError(""); // Clear error
            onLocationChange(inputValue, proximity);
        } else {
            setError("Please enter a valid city and state or zip code.");
            setInputValue(""); // Clear input value to show placeholder error
        }
    };

    const handleSeeAllLocations = () => {
        setError(""); 
        onLocationChange("all", proximity);
    };

    const handleCancel = () => {
        setError(""); 
        setInputValue(""); 
    };

    return (
        <div className="locationSearch">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={error ? "input-error" : ""}
                placeholder={error || "Enter city, state or zip code"} 
            />
            <select value={proximity} onChange={handleProximityChange}>
                <option value={1}>1 mile</option>
                <option value={10}>10 miles</option>
                <option value={20}>20 miles</option>
                <option value={50}>50 miles</option>
                <option value={100}>100 miles</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            {showAllButton && (
                <button onClick={handleSeeAllLocations}>See All Locations</button>
            )}
            {error && (
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
            )}
        </div>
    );
};

export default LocationSearch;
