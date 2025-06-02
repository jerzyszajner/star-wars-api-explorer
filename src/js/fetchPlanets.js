import renderPlanets from "./renderPlanets";
import showNotifications from "./showNotifications";

// Fetch planets from the API
const fetchPlanets = async () => {
  const url = "https://swapi.py4e.com/api/planets/";
  if (!navigator.onLine) {
    showNotifications("No internet connection!");
    return;
  }
  try {
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    renderPlanets(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchPlanets data! Try again later.");
  }
};

export default fetchPlanets;
