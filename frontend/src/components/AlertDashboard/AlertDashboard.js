// src/components/AlertDashboard/AlertDashboard.js

import React, { useState } from 'react';
import './AlertDashboard.css';

const AlertDashboard = ({ alerts }) => {
    const [locationFilter, setLocationFilter] = useState('All');

    const filteredAlerts = locationFilter === 'All'
        ? alerts
        : alerts.filter((alert) => alert.location === locationFilter);

    return (
        <section className="alert-dashboard">
            <h2>Real-Time Alerts</h2>
            <select onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="All">All Locations</option>
                <option value="Washington">Washington</option>
                <option value="Oregon">Oregon</option>
                <option value="California">California</option>
            </select>
            <ul>
                {filteredAlerts.map((alert) => (
                    <li key={alert.id} className="alert-item">
                        <strong>{alert.type}</strong>: {alert.message}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AlertDashboard;
