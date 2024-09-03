// src/pages/NearbyResourcesPage.NearbyResourcesPage.js

import React from 'react';
import ResourceLocatorComponent from '../../GlobalComponents/ResourceLocatorComponent/ResourceLocatorComponent.js'; 
import './resourcesPage.css';
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
