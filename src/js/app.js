import fetchFilms from "./fetchFilms.js";
import fetchPeople from "./fetchPeople.js";
import handleNavbarButtons from "./navigation.js";

// Start App
const startApp = () => {
  console.log("🚀 App started...");
  fetchPeople();
  fetchFilms();
};

document.addEventListener("DOMContentLoaded", startApp);
