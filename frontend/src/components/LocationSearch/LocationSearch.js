// src/components/LocationSearch/LocationSearch.js

import React, { useState } from 'react';
import './locationSearch.css';

const LocationSearchComponent = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState(10);

    const handleSearch = () => {
        onSearch(location, distance);
    };

    return (
        <section className="search-section">
            <h2>Search for Resources</h2>
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <select value={distance} onChange={(e) => setDistance(e.target.value)}>
                    <option value={5}>5 miles</option>
                    <option value={10}>10 miles</option>
                    <option value={20}>20 miles</option>
                    <option value={50}>50 miles</option>
                </select>
                <button onClick={handleSearch}>Search</button>
            </div>
        </section>
    );
};

export default LocationSearchComponent;
