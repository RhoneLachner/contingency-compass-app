// src/components/Map/Map.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';

const Map = ({ disasterData }) => {
    const defaultPosition = [47.6062, -122.3321]; // Default to Seattle, WA

    return (
        <section className="map-section">
            <h2>Disaster Map</h2>
            <MapContainer center={defaultPosition} zoom={5} className="map-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {disasterData.map((disaster) => (
                    <Marker key={disaster.id} position={[disaster.lat, disaster.lng]}>
                        <Popup>
                            <strong>{disaster.type}</strong>: {disaster.message}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    );
};

export default Map;
