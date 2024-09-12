// src/GlobalComponents/Header/Header.js

import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); 
    const hamburgerRef = useRef(null); 

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && 
            !menuRef.current.contains(event.target) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(event.target)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="appHeader">
            <div className="headerIconContainer">
                <Link to="/">
                    <img src="/images/compass-icon-cc.png" alt="Contingency Compass Icon" className="appLogo" />
                </Link>
            </div>
            <div className="hamburgerMenu" ref={hamburgerRef} onClick={toggleMenu}>
                <img src="/images/hamburger-icon.png" alt="Menu" className="hamburgerIcon" />
            </div>
            {menuOpen && (
                <div className="dropdownMenu" ref={menuRef}>
                    <Link to="/ResourcesPage" className="dropdownItem" onClick={toggleMenu}>Nearby Resources</Link>
                    <Link to="/SafetyTipsPage" className="dropdownItem" onClick={toggleMenu}>Safety Tips</Link>
                    <Link to="/NotificationSettingsPage" className="dropdownItem" onClick={toggleMenu}>Phone Notifications</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
