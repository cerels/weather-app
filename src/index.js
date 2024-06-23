import { apiCall, processWeatherData } from "./apicall.js";
import { Country, State, City } from "country-state-city";
import { populateCity, populateCountry } from "./city.js";



populateCountry()

// const weatherData = await processWeatherData(await apiCall("cartagena"));
// console.log(weatherData.city); // This will log "Cartagena"
