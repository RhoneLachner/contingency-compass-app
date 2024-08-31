// src/components/resourceLocator/resourceLocatorComponent.js

import React from 'react';
import './resourceLocatorComponent.css'; // Optional: Create this CSS file for styling

const ResourceLocatorComponent = () => {
    return (
        <section className="resourceLocatorComponent">
        <div>RESOURCE LOCATOR COMPONENT</div>
            <h2>Find Nearby Resources</h2>
            <ul>
                <li>Shelters: List of nearby shelters...</li>
                <li>Food Banks: List of food banks...</li>
                <li>Medical Facilities: List of hospitals and clinics...</li>
                <li>Relief Centers: List of relief centers...</li>
            </ul>
        </section>
    );
};

export default ResourceLocatorComponent;
