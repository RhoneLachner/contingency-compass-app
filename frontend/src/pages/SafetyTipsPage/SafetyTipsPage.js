// src/pages/SafetyTipsPage.SafetyTipsPage.js

import React from 'react';
import  SafetyTipsComponent  from './SafetyTipsComponent/SafetyTipsComponent.js'; // Adjust the path if necessary
import  Header  from "../../globalComponents/Header/Header.js"
import './safetyTipsPage.css'; // Optional: Create this CSS file for styling

const SafetyTipsPage = () => {
    return (
        <>
            <Header/>
             <div className="safety-tips-page">
                <h1>Safety Tips</h1>
                 <p>Here are some safety tips to help you stay safe during different types of disasters:</p>
                <SafetyTipsComponent/>
            </div>
        </>
    );
};

export default SafetyTipsPage;
