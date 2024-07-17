import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelcius(f){
    return ((f-32)*5)/9;
}

function toFahrenheit(c){
    return (c*9)/5+32;
}

function tryConvert(tem, convert){
    const input = parseFloat(tem);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output*1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("C");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("C");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("F");
    };

    const celsius = scale === "F" ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="C"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="F"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;