export async function apiCall(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0ef57535f1174390944202818241706&q=${location}`,
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export async function processWeatherData(weatherData) {
  if (!weatherData) {
    return null; // Handle case where weather data is not available
  }

  const { current, location } = weatherData; // Destructuring for cleaner access

  return {
    city: location.name, // Extract city name
    temperature: current.temp_c, // Extract temperature in Celsius
    condition: current.condition.text, // Extract weather condition text
    isDay: current.is_day === 1 ? "Day" : "Night", // Convert is_day to Day/Night
  };
}
