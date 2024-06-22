import { apiCall, processWeatherData } from "./apicall.js";
import { Country, State, City } from "country-state-city";
import { populateCity } from "./city.js";

// const weatherData = await processWeatherData(await apiCall("cartagena"));
// console.log(weatherData.city); // This will log "Cartagena"

populateCity()
