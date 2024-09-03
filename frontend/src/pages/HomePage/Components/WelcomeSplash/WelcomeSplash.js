import React from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import "./welcomeSplash.css";

 const WelcomeSplash = () => {
    
    return(
<div className="welcomeSplashContainer">

    <div className="splashBody">
    <NavigationButtons />

        <h1 className="splashTitle">Contingency Compass</h1>
        <p className="splashText"> A compass to help empower, protect,
        <br/> and prepare for the unexpected.  </p>
    </div>  
</div>
    )
 }

 export default WelcomeSplash;