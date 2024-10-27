import React from "react";

function Weather({temperature}){
    let valueToShow = 0;
    temperature = Number(temperature);
    if(temperature < 15){ 
        valueToShow = "It's Cold";
    }
    else if(temperature < 25) {
        valueToShow = "It's nice";
    }
    else{
        valueToShow = "It's Hot";
    }
    return(
        <>
        <h1>{valueToShow}</h1>
        </>
    )
}

export default Weather;