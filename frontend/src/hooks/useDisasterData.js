import { useState, useCallback, useEffect } from "react";

const DISASTER_API_URL = "/api/open/v2/DisasterDeclarationsSummaries";

const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; // Radius of Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c;
    const distanceMiles = distanceKm * 0.621371; // Convert km to miles
    return distanceMiles;
};

// Updated cleanCountyName function
const cleanCountyName = (county) => {
    return county.replace(/ *\([^)]*\)/g, "").replace(/(county|parish)/gi, "").trim().toLowerCase();
};
const useDisasterData = () => {
    const [selectedLocation, setSelectedLocation] = useState({});
    const [proximity, setProximity] = useState(10);
    const [selectedDisasterTypes, setSelectedDisasterTypes] = useState(["all"]);
    const [disasters, setDisasters] = useState([]);
    const [error, setError] = useState(null);
    const [matchingDisasters, setMatchingDisasters] = useState([]); // Track matching disasters

    const allDisasterTypes = ["Fire", "Flood", "Earthquake", "Tornado", "Air Quality", "Chemical Spill", "Nuclear Event"];

    const fetchDisasters = useCallback(async () => {
        try {
            setError(null);

            const disasterResponse = await fetch(DISASTER_API_URL);
            if (!disasterResponse.ok) {
                throw new Error("Failed to fetch Disaster Declarations Summaries");
            }
            const disasterData = await disasterResponse.json();
            const disasterSummaries = disasterData.DisasterDeclarationsSummaries;

            const formattedDisasters = disasterSummaries.map(disaster => ({
                id: disaster.disasterNumber,
                incidentType: disaster.incidentType || "Unknown",
                message: disaster.declarationTitle || "No description available",
                severity: disaster.declarationType,
                beginDate: new Date(disaster.incidentBeginDate).toLocaleDateString("en-US") || "Unknown date",
                location: `${disaster.designatedArea || "Unknown city"}, ${disaster.state || "Unknown state"}`,
                county: cleanCountyName(disaster.designatedArea),  // Clean county name
                lat: disaster.latitude,
                lon: disaster.longitude,
            }));

            let filteredDisasters = formattedDisasters;

            console.log("Selected County (Cleaned):", cleanCountyName(selectedLocation.county || ""));
            console.log("Selected Location Data:", selectedLocation);

            const cleanSelectedCounty = cleanCountyName(selectedLocation.county || "");

            // Track matching disasters based on county
            let matchedDisasters = [];

            if (cleanSelectedCounty) {
                filteredDisasters = formattedDisasters.filter(disaster => {
                    const countyMatch = disaster.county.includes(cleanSelectedCounty);
                    if (countyMatch) {
                        matchedDisasters.push(disaster); // Add to matched disasters list
                    }
                    console.log(`Disaster County: ${disaster.county}, Match: ${countyMatch}`);
                    return countyMatch;
                });
            }

            // Apply proximity filtering if lat/lon is available
            if (selectedLocation.lat && selectedLocation.lon) {
                const { lat: userLat, lon: userLon } = selectedLocation;
                filteredDisasters = filteredDisasters.filter(disaster => {
                    const distance = haversineDistance(userLat, userLon, disaster.lat, disaster.lon);
                    return distance <= proximity;
                });
            }

            // Filter by disaster types
            if (!selectedDisasterTypes.includes("all")) {
                filteredDisasters = filteredDisasters.filter(disaster =>
                    selectedDisasterTypes.includes(disaster.incidentType)
                );
            }

            console.log("Filtered Disasters: ", filteredDisasters);
            console.log("Matching Disasters for County:", matchedDisasters);

            setDisasters(filteredDisasters);
            setMatchingDisasters(matchedDisasters); // Set the matched disasters to be displayed

        } catch (error) {
            setError(error.message);
            console.error("Error fetching disaster data:", error);
        }
    }, [selectedLocation, selectedDisasterTypes, proximity]);

    useEffect(() => {
        fetchDisasters();
    }, [selectedLocation, selectedDisasterTypes, proximity, fetchDisasters]);

    return {
        selectedLocation,
        setSelectedLocation,
        proximity,
        setProximity,
        selectedDisasterTypes,
        setSelectedDisasterTypes,
        disasters,
        matchingDisasters,  // Expose the matching disasters to be displayed
        allDisasterTypes,
        error,
    };
};

export default useDisasterData;
