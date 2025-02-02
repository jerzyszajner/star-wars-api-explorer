import fetchFilms from "./fetchFilms.js";
import handleNavbarButtons from "./navigation.js";

// Start App
const startApp = () => {
  console.log("🚀 App started...");
  fetchFilms();
  handleNavbarButtons();
};

document.addEventListener("DOMContentLoaded", startApp);
