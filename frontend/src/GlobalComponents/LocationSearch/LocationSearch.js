import React, { useState } from "react";
import axios from "axios";
import "./locationSearch.css";

const fetchCoordinatesAndCounty = async (city, state) => {
    const apiKey = 'AIzaSyDSCnRRvWaijhprauL3fQE9rgX8fi_BeZg'; // Ensure this is correct
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log(response.data); 
        if (response.data.status === "OK") {
            const { lat, lng } = response.data.results[0].geometry.location;
            let county = null;
            const addressComponents = response.data.results[0].address_components;

            // Find county in the address components
            addressComponents.forEach(component => {
                if (component.types.includes("administrative_area_level_2")) {
                    county = component.long_name;
                }
            });

            return { lat, lon: lng, county };
        } else {
            console.error("Error from Geocoding API:", response.data.status);
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates and county:", error);
        return null;
    }
};

const LocationSearch = ({ onLocationChange, showAllButton }) => {
    const [inputValue, setInputValue] = useState("");
    const [proximity, setProximity] = useState(10);
    const [error, setError] = useState("");

    // Updated handleSearch function
    const handleSearch = async () => {
        if (inputValue) {
            const inputParts = inputValue.split(", ");
            if (inputParts.length !== 2) {
                setError("Please enter city and state separated by a comma.");
                return;
            }
            const [city, state] = inputParts;
            const locationData = await fetchCoordinatesAndCounty(city, state);
            if (locationData) {
                onLocationChange(locationData, proximity);
            } else {
                setError("Failed to get location data.");
            }
        } else {
            setError("Please enter a valid city and state.");
        }
    };

    return (
        <div className="locationSearch">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={error || "Enter city, state"}
            />
            <select value={proximity} onChange={(e) => setProximity(e.target.value)}>
                <option value={1}>1 mile</option>
                <option value={10}>10 miles</option>
                <option value={20}>20 miles</option>
                <option value={50}>50 miles</option>
                <option value={100}>100 miles</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default LocationSearch;
