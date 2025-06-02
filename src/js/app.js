import navigation from "./navigation.js";
import fetchFilms from "./fetchFilms.js";

// Initialize application
const startApp = () => {
  navigation();
  fetchFilms();
};

// Event Listener
document.addEventListener("DOMContentLoaded", startApp);
