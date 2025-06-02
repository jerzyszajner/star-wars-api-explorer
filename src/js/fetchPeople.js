import renderPeople from "./renderPeople";
import showNotifications from "./showNotifications";

// Fetch people from the API
const fetchPeople = async () => {
  const url = "https://swapi.py4e.com/api/people/";
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
    renderPeople(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchPeople data! Try again later.");
  }
};

export default fetchPeople;
