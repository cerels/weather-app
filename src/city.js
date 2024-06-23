import { Country, State, City } from "country-state-city";
import { showClimate } from "./clime";

export function populateCountry() {
  const countryList = Country.getAllCountries();
  const countryForm = document.getElementById("countries");

  countryList.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = `${element.name}`;
    option.id = `${element.isoCode}`;
    countryForm.append(option);
  });

  countryForm.addEventListener("change", function () {
    // Get the selected index
    var selectedIndex = countryForm.selectedIndex;

    // Get the selected option element
    var selectedOption = countryForm.options[selectedIndex];

    // Get the ID of the selected option (assuming it has an ID)
    var selectedOptionId = selectedOption.id;
    populateState(selectedOptionId);
    console.log("Selected option ID:", selectedOptionId);
  });
}

function populateState(countryId) {
  const stateList = State.getStatesOfCountry(countryId);
  const stateForm = document.getElementById("states");
  const cityForm = document.getElementById("cities");
  cityForm.innerHTML = "--Choose a city--";
  stateForm.innerText = "";
  stateList.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = `${element.name}`;
    option.id = `${element.isoCode}`;
    stateForm.append(option);
  });

  stateForm.addEventListener("change", function () {
    // Get the selected index
    var selectedIndex = stateForm.selectedIndex;

    // Get the selected option element
    var selectedOption = stateForm.options[selectedIndex];

    // Get the ID of the selected option (assuming it has an ID)
    var selectedOptionId = selectedOption.id;
    populateCity(countryId, selectedOptionId);
    console.log("Selected option ID:", selectedOptionId);
  });
}

function populateCity(countryId, stateId) {
  const cityList = City.getCitiesOfState(countryId, stateId);
  const cityForm = document.getElementById("cities");
  cityForm.innerText = "";
  cityList.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = `${element.name}`;
    // option.id = `${element.isoCode}`;
    cityForm.append(option);
  });

  cityForm.addEventListener("change", function () {
    // Get the selected index
    var selectedIndex = cityForm.selectedIndex;

    // Get the selected option element
    var selectedOption = cityForm.options[selectedIndex];

    // Get the ID of the selected option (assuming it has an ID)
    var selectedOptionId = selectedOption.value;
    console.log("Selected option city:", selectedOptionId);
    showClimate(selectedOptionId)
    
  });
}
