// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Map from './components/Map/Map';
import Filter from './components/Filter/Filter';
import AlertDashboard from './components/AlertDashboard/AlertDashboard';
import SafetyTips from './components/SafetyTips/SafetyTips';
import ResourceLocator from './components/ResourceLocator/ResourceLocator';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    const [disasterData, setDisasterData] = useState([
        { id: 1, lat: 47.6062, lng: -122.3321, type: 'Earthquake', message: 'Magnitude 5.2 earthquake detected.', location: 'Washington' },
        { id: 2, lat: 45.5051, lng: -122.6750, type: 'Flood', message: 'Flood warning issued.', location: 'Oregon' },
        { id: 3, lat: 34.0522, lng: -118.2437, type: 'Wildfire', message: 'Wildfire spreading rapidly.', location: 'California' },
    ]);

    const [filteredType, setFilteredType] = useState('All');

    const handleSearch = (location, distance) => {
        console.log(`Searching for resources near ${location} within ${distance} miles.`);
        // Simulate an API call to fetch disaster data based on location and distance
        // Replace with real data fetching logic as needed
        const newDisasterData = [
            // Example new data based on search
            { id: 4, lat: 37.7749, lng: -122.4194, type: 'Earthquake', message: 'New earthquake detected.', location: 'California' },
        ];
        setDisasterData(newDisasterData);
    };

    const handleFilterChange = (type) => {
        setFilteredType(type);
    };

    const filteredDisasterData = filteredType === 'All'
        ? disasterData
        : disasterData.filter(disaster => disaster.type === filteredType);

    return (
        <Router>
            <div className="App">
                <Header />
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/safety-tips">Safety Tips</Link></li>
                        <li><Link to="/nearby-resources">Nearby Resources</Link></li>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <LocationSearch onSearch={handleSearch} />
                                <Filter onFilterChange={handleFilterChange} />
                                <Map disasterData={filteredDisasterData} />
                                <AlertDashboard alerts={disasterData} />
                            </>
                        } />
                        <Route path="/safety-tips" element={<SafetyTips />} />
                        <Route path="/nearby-resources" element={<ResourceLocator />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
