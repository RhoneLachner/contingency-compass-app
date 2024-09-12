import { useState, useCallback, useEffect } from "react";

const DISASTER_API_URL = "/api/open/v2/DisasterDeclarationsSummaries";

const declarationTypeMap = {
    "EM": "Emergency Declaration",
    "DR": "Major Disaster Declaration",
    "SU": "Pre-Declaration Surge",
};

const useDisasterData = () => {
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [proximity, setProximity] = useState(10);
    const [selectedDisasterTypes, setSelectedDisasterTypes] = useState(["all"]);
    const [disasters, setDisasters] = useState([]);
    const [error, setError] = useState(null); // Error state

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
     
            const formattedDisasters = disasterSummaries.map(disaster => {
                const incidentType = disaster.incidentType || "Unknown";
                const description = disaster.declarationTitle || "No description available";
                
                // Only include severity if it's one of EM, DR, or SU
                const severity = declarationTypeMap[disaster.declarationType] || null;
                
                const beginDate = new Date(disaster.incidentBeginDate).toLocaleDateString("en-US") || "Unknown date";
                const location = `${disaster.designatedArea || "Unknown city"}, ${disaster.state || "Unknown state"}`;

                // Format sentence, only adding severity if it exists
                return severity 
                    ? `${incidentType}: ${description} - ${severity} - ${beginDate} - ${location}`
                    : `${incidentType}: ${description} - ${beginDate} - ${location}`;
            });

            setDisasters(formattedDisasters);
        } catch (error) {
            setError(error.message); 
            console.error("Error fetching disaster data:", error);
        }
    }, []);

    useEffect(() => {
        fetchDisasters();
    }, [selectedLocation, selectedDisasterTypes, fetchDisasters]);

    return {
        selectedLocation,
        setSelectedLocation,
        proximity,
        setProximity,
        selectedDisasterTypes,
        setSelectedDisasterTypes,
        disasters,
        allDisasterTypes,
        error, 
    };
};

export default useDisasterData;
