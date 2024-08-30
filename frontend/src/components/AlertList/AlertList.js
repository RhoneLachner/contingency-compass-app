// src/components/AlertList/AlertList.js

import React from 'react';
import './alertList.css';

const AlertList = () => {
    const alerts = [
        { id: 1, type: 'Earthquake', message: 'Magnitude 5.2 earthquake detected nearby.' },
        { id: 2, type: 'Flood', message: 'Flash flood warning in your area.' },
    ];

    return (
        <section className="alert-list">
            <h2>Real-Time Alerts</h2>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id} className="alert-item">
                        <strong>{alert.type}</strong>: {alert.message}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AlertList;
