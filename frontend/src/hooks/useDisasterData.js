// src/hooks/useDisasterData.js

import { useState, useMemo, useCallback, useEffect } from "react";

const useDisasterData = () => {
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

    return {
        selectedLocation,
        setSelectedLocation,
        proximity,
        setProximity,
        selectedDisasterTypes,
        setSelectedDisasterTypes,
        disasters,
        allDisasterTypes,
        filterDisasters,
    };
};

export default useDisasterData;
