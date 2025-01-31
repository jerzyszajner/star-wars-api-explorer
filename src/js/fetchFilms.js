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
    const filteredFilms = data.results.filter((film) => film.episode_id <= 6);
    filteredFilms.sort((a, b) => a.episode_id - b.episode_id);
    renderFilms(filteredFilms);
  } catch (error) {
    showNotifications("Failed to fetch data! Try again later.");
  }
};

export default fetchFilms;
