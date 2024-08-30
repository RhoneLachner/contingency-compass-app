// src/components/Filter/filter.js

import React from 'react';
import './filter.css';

const FilterComponent = ({ onFilterChange }) => {
    const disasterTypes = ['All', 'Earthquake', 'Flood', 'Wildfire', 'Tsunami', 'Volcanic Eruption'];

    return (
        <section className="filter-section">
            <h2>Filter Disasters</h2>
            <select onChange={(e) => onFilterChange(e.target.value)}>
                {disasterTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default FilterComponent;
