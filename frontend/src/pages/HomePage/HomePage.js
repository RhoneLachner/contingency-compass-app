// src/pages/HomePage/HomePage.js

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "../../GlobalComponents/Header/Header";
import Footer from "../../GlobalComponents/Footer/Footer";
import AlertMap from "./Components/AlertMap/AlertMap";
import LocationSearch from "../../GlobalComponents/LocationSearch/LocationSearch";
import AlertDashboard from "./Components/AlertDashboard/AlertDashboard";
import NavigationButtons from "./Components/NavigationButtons/NavigationButtons";
import DisasterTypeButtons from "./Components/DisasterTypeButtons/DisasterTypeButtons";
import "./homePage.css";

const HomePage = () => {
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [proximity, setProximity] = useState(10);
    const [selectedDisasterTypes, setSelectedDisasterTypes] = useState(["all"]);
    const [disasters, setDisasters] = useState([]);

    const allDisasterTypes = ["Earthquake", "Flood", "Wildfire", "Tornado", "Air Quality", "Chemical Spill", "Nuclear Event"];

    const mockDisasterData = useMemo(() => [
        { id: 1, type: "Earthquake", message: "Magnitude 5.2 earthquake detected.", location: "Seattle", state: "WA" },
        { id: 2, type: "Flood", message: "Flood warning issued.", location: "Portland", state: "OR" },
        { id: 3, type: "Wildfire", message: "Wildfire spreading near Los Angeles.", location: "Los Angeles", state: "CA" },
        { id: 4, type: "Tornado", message: "Tornado watch issued.", location: "Chicago", state: "IL" },
        { id: 5, type: "Air Quality", message: "Air quality is unhealthy due to high levels of pollutants.", location: "Denver", state: "CO" },
        { id: 6, type: "Chemical Spill", message: "Hazardous chemical spill detected near the industrial area.", location: "Houston", state: "TX" },
        { id: 7, type: "Nuclear Event", message: "Nuclear reactor leak detected, immediate evacuation advised.", location: "San Francisco", state: "CA" },
    ], []);

    const filterDisasters = useCallback((location, types) => {
        let filteredDisasters = mockDisasterData;

        if (location !== "all") {
            filteredDisasters = filteredDisasters.filter(disaster => disaster.location === location);
        }

        if (!types.includes("all")) {
            filteredDisasters = filteredDisasters.filter(disaster => types.includes(disaster.type));
        }

        setDisasters(filteredDisasters);
    }, [mockDisasterData]);

    useEffect(() => {
        filterDisasters(selectedLocation, selectedDisasterTypes);
    }, [selectedLocation, selectedDisasterTypes, filterDisasters]);

    const handleLocationChange = (location, proximity) => {
        setSelectedLocation(location);
        setProximity(proximity);
    };

    const handleDisasterTypeChange = (type) => {
        setSelectedDisasterTypes((prevTypes) => {
            let newTypes;

            if (type === "all") {
                newTypes = ["all"];
            } else {
                if (prevTypes.includes(type)) {
                    newTypes = prevTypes.filter((t) => t !== type);
                } else {
                    newTypes = prevTypes.includes("all")
                        ? [type]
                        : [...prevTypes, type];
                }

                if (newTypes.length === allDisasterTypes.length) {
                    newTypes = ["all"];
                }

                if (newTypes.length === 0) {
                    newTypes = ["all"];
                }
            }

            setSelectedDisasterTypes(newTypes);
            return newTypes;
        });
    };

    return (
        <div className="homePage">
            <Header />
            <NavigationButtons />
            <LocationSearch
                onLocationChange={handleLocationChange}
                showAllButton={selectedLocation !== "all"}
            />
            <AlertMap
                selectedLocation={selectedLocation}
                proximity={proximity}
                disasters={disasters}
                showAll={selectedLocation === "all"}
            />
            <DisasterTypeButtons
                allDisasterTypes={allDisasterTypes}
                selectedDisasterTypes={selectedDisasterTypes}
                handleDisasterTypeChange={handleDisasterTypeChange}
            />
            <AlertDashboard 
                disasters={disasters} 
                selectedLocation={selectedLocation} 
                proximity={proximity} 
            />
            <Footer />
        </div>
    );
};

export default HomePage;
