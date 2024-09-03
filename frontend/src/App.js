import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import SafetyTipsPage from "./pages/SafetyTipsPage/SafetyTipsPage.js";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage.js";
import NotificationSettingsPage from "./pages/NotificationSettingsPage/NotificationSettingsPage.js";
import "./App.css";

const App = () => {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ResourcesPage" element={<ResourcesPage />} />
                <Route path="/SafetyTipsPage" element={<SafetyTipsPage />} />
                <Route path="/NotificationSettingsPage" element={<NotificationSettingsPage />} />
            </Routes>
        </div>
    );
};

export default App;