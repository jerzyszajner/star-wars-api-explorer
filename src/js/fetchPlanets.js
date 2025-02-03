import renderPlanets from "./renderPlanets";
import showNotifications from "./showNotifications";

const fetchPlanets = async () => {
  const url = "https://swapi.py4e.com/api/planets/";
  if (!navigator.onLine) {
    showNotifications("No internet connection!");
    return;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderPlanets(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchPlanets data! Try again later.");
    console.log(error, "Failed to fetchPlanets data!");
  }
};

export default fetchPlanets;
