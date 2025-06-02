import renderFilms from "./renderFilms";
import showNotifications from "./showNotifications";

const fetchFilms = async () => {
  const url = "https://swapi.py4e.com/api/films/";
  if (!navigator.onLine) {
    showNotifications("No internet connection!");
    return;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderFilms(data.results.slice(0, 6));
  } catch (error) {
    showNotifications("Failed to fetchFilms data! Try again later.");
  }
};

export default fetchFilms;
