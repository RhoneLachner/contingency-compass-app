// src/components/ResourceLocator/ResourceLocator.js

import React from 'react';
import './resourceLocator.css';

const ResourceLocator = () => {
    return (
        <section className="resource-locator">
            <h2>Nearby Resources</h2>
            <p>Use our map to locate nearby shelters, food banks, and medical facilities.</p>
            {/* Placeholder for a map component */}
            <div className="map-placeholder">Map coming soon...</div>
        </section>
    );
};

export default ResourceLocator;
