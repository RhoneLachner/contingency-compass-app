// src/pages/NearbyResourcesPage.NearbyResourcesPage.js

import React from 'react';
import ResourceLocatorComponent from '../../GlobalComponents/ResourceLocatorComponent/ResourceLocatorComponent.js'; // Adjust the path if necessary
import './resourcesPage.css'; // Optional: Create this CSS file for styling

const ResourcesPage = () => {
    return (
        <div className="resourcesPage">
            <h1>Resources Page</h1>
            <p>Find essential services and resources near your location:</p>
            <ResourceLocatorComponent /> 
        </div>
    );
};

export default ResourcesPage;
