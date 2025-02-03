import handleNavbarButtons from "./navigation.js";
import fetchFilms from "./fetchFilms.js";

// Start App
const startApp = () => {
  console.log("🚀 App started...");

  fetchFilms();
};

// Event Listener
document.addEventListener("DOMContentLoaded", startApp);
