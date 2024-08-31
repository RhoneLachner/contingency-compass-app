// src/components/SafetyTipsComponent/SafetyTipsComponent.js

import React from 'react';
import './safetyTipsComponent.css'; // Optional: Create this CSS file for styling

const SafetyTipsComponent = () => {
    return (
        <section className="safetyTipsComponent">
            <h2>General Safety Tips</h2>
            <ul>
                <li>Stay informed by monitoring weather alerts and warnings.</li>
                <li>Prepare an emergency kit with essential supplies.</li>
                <li>Have a family emergency plan in place.</li>
                <li>Know the evacuation routes and safe places in your area.</li>
            </ul>
        </section>
    );
};

export default SafetyTipsComponent;
