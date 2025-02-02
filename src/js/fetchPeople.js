import renderPeople from "./renderPeople";
import showNotifications from "./showNotifications";

const fetchPeople = async () => {
  const url = "https://swapi.py4e.com/api/people/";
  if (!navigator.onLine) {
    showNotifications("No internet connection!");
    return;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderPeople(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchPeople data! Try again later.");
    console.log(error, "Failed to fetchPeople data!");
  }
};

export default fetchPeople;
