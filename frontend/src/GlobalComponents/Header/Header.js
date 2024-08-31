// src/components/Header/Header.js

import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="appHeader">
             <img src="../images/disaster-compass-icon-copy.png" alt="Contingency Compass Icon" className="appLogo" />
                <h1 className='headerTitle'>Contingency Compass</h1> 
        </header>
    );
};

export default Header;
