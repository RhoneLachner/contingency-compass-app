import React from "react";
import Header from "../../globalComponents/Header/Header";
import Footer from "../../globalComponents/Footer/Footer";
import AlertMap from "./Components/AlertMap/AlertMap";
import AlertDashboard from "./Components/AlertDashboard/AlertDashboard";
import DisasterTypeButtons from "./Components/DisasterTypeButtons/DisasterTypeButtons";
import WelcomeSplash from "./Components/WelcomeSplash/WelcomeSplash";
import LocationSearch from "../../globalComponents/LocationSearch/LocationSearch";
import useDisasterData from "../../hooks/useDisasterData";
import "./homePage.css";

const HomePage = () => {
  const {
    selectedLocation,
    setSelectedLocation,
    proximity,
    setProximity,
    selectedDisasterTypes,
    setSelectedDisasterTypes,
    disasters,
    matchingDisasters,
    allDisasterTypes,
  } = useDisasterData();

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
          newTypes = prevTypes.includes("all") ? [type] : [...prevTypes, type];
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
      <WelcomeSplash />
      <div className="locationSearchSection" id="locationSearchID" />
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
        matchingDisasters={matchingDisasters}
        selectedLocation={selectedLocation}
        proximity={proximity}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
