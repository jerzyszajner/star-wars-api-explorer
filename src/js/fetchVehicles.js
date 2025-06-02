import renderVehicles from "./renderVehicles";
import showNotifications from "./showNotifications";

const fetchVehicles = async () => {
  const url = "https://swapi.py4e.com/api/vehicles/";
  if (!navigator.onLine) {
    showNotifications("No internet connection!");
    return;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderVehicles(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchVehicles data! Try again later.");
  }
};

export default fetchVehicles;
