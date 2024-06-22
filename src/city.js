import { Country, State, City }  from 'country-state-city';


export function populateCity(){
const countryList =  Country.getAllCountries();

const countryForm = document.getElementById("countries");

countryList.forEach(element => {
    const option = document.createElement('option')
    option.textContent = `${element.name}`
    countryForm.append(option)
});

}