export async function apiCall(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0ef57535f1174390944202818241706&q=${location}`, {
        mode: 'cors'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null; 
    }
  }
  