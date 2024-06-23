import { apiCall, processWeatherData } from "./apicall";

export async function showClimate(location) {

    const climateDiv = document.getElementById("climateInfo");
    const climateData = await processWeatherData(await apiCall(location));

    climateDiv.innerHTML = `The weather in ${climateData.city} is ${climateData.condition}, it's ${climateData.isDay} with a temperature of ${climateData.temperature}`
}