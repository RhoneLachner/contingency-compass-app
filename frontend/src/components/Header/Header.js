// src/components/Header/Header.js

import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="app-header">
            <img src="../images/disaster-compass-icon-copy.png" alt="Contingency Compass Icon" className="app-logo" />
            <h1>Contingency Compass</h1>
        </header>
    );
};

export default Header;
